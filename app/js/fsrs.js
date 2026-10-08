/**
 * Cap Côtier - Moteur FSRS (Free Spaced Repetition Scheduler)
 * Algorithme moderne de répétition espacée basé sur la Stabilité (S), la Difficulté (D) et la Rétention (R).
 * Construit des séries de 20 questions qui ciblent en priorité les notions fragiles.
 */

class FSRSEngine {
  constructor(storageManager) {
    this.storage = storageManager;
    // Paramètres optimisés du modèle FSRS v4.5
    this.w = [
      0.4072, 1.1827, 3.1262, 15.4722, // Stabilité initiale pour ratings 1, 2, 3, 4
      7.2102, 0.5316, 1.0651, 0.0234,  // Paramètres de difficulté
      1.6160, 0.1544, 1.0824,          // Stabilité après rappel réussi
      1.9813, 0.0953, 0.2975, 0.2204,  // Stabilité après oubli (Lapse)
      0.2407, 2.9466                    // Paramètres additionnels
    ];
    this.requestRetention = 0.90; // Cible de rétention à 90%
    this.ROUND_SIZE = 20;
  }

  /**
   * États FSRS:
   * 0: New (Nouvelle question, jamais vue dans FSRS)
   * 1: Learning (En apprentissage)
   * 2: Review (En consolidation espacée)
   * 3: Relearning (En réapprentissage après échec)
   */

  /** Récupère la carte FSRS d'une question ou initialise une nouvelle */
  getCard(questionId) {
    const cards = this.storage.profileData.fsrsCards || {};
    if (cards[questionId]) {
      return { ...cards[questionId] };
    }
    return {
      id: questionId,
      state: 0, // New
      difficulty: 5.0,
      stability: 0,
      reps: 0,
      lapses: 0,
      lastReview: 0,
      due: 0
    };
  }

  saveCard(card) {
    if (!this.storage.profileData.fsrsCards) {
      this.storage.profileData.fsrsCards = {};
    }
    this.storage.profileData.fsrsCards[card.id] = card;
    this.storage.saveProfileData();
  }

  /** Calcule la probabilité de rétention actuelle R(t) */
  getRetrievability(card, now = Date.now()) {
    if (card.state === 0 || card.stability <= 0) return 0;
    const elapsedDays = Math.max(0, (now - card.lastReview) / (1000 * 60 * 60 * 24));
    return Math.pow(1 + elapsedDays / (9 * card.stability), -1);
  }

  /** Met à jour la carte avec la note rating (1: Again, 2: Hard, 3: Good, 4: Easy) */
  scheduleCard(questionId, rating, now = Date.now()) {
    const card = this.getCard(questionId);
    const lastState = card.state;
    const elapsedDays = card.lastReview > 0
      ? Math.max(0, (now - card.lastReview) / (1000 * 60 * 60 * 24))
      : 0;

    let nextDifficulty = card.difficulty;
    let nextStability = card.stability;
    let nextState = card.state;
    let nextDueIntervalDays = 1;

    if (card.state === 0) {
      // Carte nouvelle
      nextDifficulty = this.initDifficulty(rating);
      nextStability = this.initStability(rating);
      card.reps = 1;
      if (rating === 1) {
        nextState = 1; // Learning
        nextDueIntervalDays = 0.04; // 1 heure
      } else if (rating === 2) {
        nextState = 1; // Learning
        nextDueIntervalDays = 0.5;  // 12 heures
      } else {
        nextState = 2; // Review
        nextDueIntervalDays = nextStability;
      }
    } else {
      // Carte existante
      const retrievability = this.getRetrievability(card, now);
      nextDifficulty = this.nextDifficulty(card.difficulty, rating);

      if (rating === 1) {
        // Échec (Lapse)
        card.lapses += 1;
        nextStability = this.nextForgetStability(card.difficulty, card.stability, retrievability);
        nextState = 3; // Relearning
        nextDueIntervalDays = 0.05; // Révision rapide dans ~1h
      } else {
        // Succès (Good / Hard / Easy)
        card.reps += 1;
        nextStability = this.nextRecallStability(card.difficulty, card.stability, retrievability, rating);
        nextState = 2; // Review
        nextDueIntervalDays = this.calculateInterval(nextStability);
      }
    }

    card.state = nextState;
    card.difficulty = Math.min(10, Math.max(1, nextDifficulty));
    card.stability = Math.max(0.1, nextStability);
    card.lastReview = now;
    card.due = now + (nextDueIntervalDays * 24 * 60 * 60 * 1000);

    this.saveCard(card);
    return card;
  }

  // --- FORMULES MATHÉMATIQUES FSRS ---

  initDifficulty(rating) {
    return this.w[4] - Math.exp(this.w[5] * (rating - 1)) + 1;
  }

  initStability(rating) {
    const idx = Math.min(4, Math.max(1, rating)) - 1;
    return Math.max(0.1, this.w[idx]);
  }

  nextDifficulty(d, rating) {
    const nextD = d - this.w[6] * (rating - 3);
    const meanReversion = this.w[7] * this.initDifficulty(4) + (1 - this.w[7]) * nextD;
    return Math.min(10, Math.max(1, meanReversion));
  }

  nextRecallStability(d, s, r, rating) {
    const hardPenalty = rating === 2 ? this.w[15] : 1;
    const easyBonus = rating === 4 ? this.w[16] : 1;
    return s * (1 + Math.exp(this.w[8]) *
      (11 - d) *
      Math.pow(s, -this.w[9]) *
      (Math.exp((1 - r) * this.w[10]) - 1) *
      hardPenalty *
      easyBonus);
  }

  nextForgetStability(d, s, r) {
    return this.w[11] *
      Math.pow(d, -this.w[12]) *
      (Math.pow(s + 1, this.w[13]) - 1) *
      Math.exp((1 - r) * this.w[14]);
  }

  calculateInterval(stability) {
    // Intervalle FSRS : I = 9 · S · (1/R − 1) ; pour une rétention cible de 90 %, I = S.
    const interval = 9 * stability * (1 / this.requestRetention - 1);
    return Math.max(1, Math.round(interval));
  }

  // --- SÉLECTION D'UNE SÉRIE ---
  //
  // La mémoire est suivie par NOTION (« concept ») et non par question : plusieurs questions
  // équivalentes (même règle, autre formulation ou autre cap) partagent une seule carte.
  // Réussir l'une renforce la notion ; la série suivante proposera de préférence une autre
  // variante, pour vérifier que la règle est comprise et pas seulement la question mémorisée.

  static keyOf(q) { return q.concept || q.id; }

  /** Regroupe un ensemble de questions par notion. */
  groupByConcept(pool) {
    const m = new Map();
    pool.forEach((q) => {
      const k = FSRSEngine.keyOf(q);
      if (!m.has(k)) m.set(k, []);
      m.get(k).push(q);
    });
    return m;
  }

  /** Choisit la variante d'une notion : la moins pratiquée, puis la plus anciennement vue. */
  pickVariant(questions) {
    const stats = this.storage.profileData.questionStats || {};
    const scored = questions.map((q) => {
      const st = stats[q.id];
      return { q, n: st ? st.attempts : 0, t: st ? st.lastAttemptDate : 0, r: Math.random() };
    });
    scored.sort((a, b) => a.n - b.n || a.t - b.t || a.r - b.r);
    return scored[0].q;
  }

  /**
   * Série de révision (une question par notion) :
   * 1. notions dont la révision est due, les plus oubliées d'abord ;
   * 2. notions en (ré)apprentissage ;
   * 3. nouvelles notions, au hasard ;
   * 4. à défaut, les révisions les plus proches.
   */
  generateRound(allQuestionsPool, roundSize = this.ROUND_SIZE) {
    if (!allQuestionsPool || !allQuestionsPool.length) return [];
    const now = Date.now();
    const cards = this.storage.profileData.fsrsCards || {};
    const groups = this.groupByConcept(allQuestionsPool);
    const overdue = [], learning = [], fresh = [], future = [];
    groups.forEach((qs, key) => {
      const c = cards[key];
      if (!c || c.state === 0) fresh.push(key);
      else if (c.due <= now) overdue.push({ key, r: this.getRetrievability(c, now) });
      else if (c.state === 1 || c.state === 3) learning.push({ key, due: c.due });
      else future.push({ key, due: c.due });
    });
    overdue.sort((a, b) => a.r - b.r);
    learning.sort((a, b) => a.due - b.due);
    future.sort((a, b) => a.due - b.due);
    for (let i = fresh.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fresh[i], fresh[j]] = [fresh[j], fresh[i]];
    }
    const keys = [...overdue.map((x) => x.key), ...learning.map((x) => x.key), ...fresh, ...future.map((x) => x.key)].slice(0, roundSize);
    return keys.map((k) => this.pickVariant(groups.get(k)));
  }

  /** Nombre de notions déjà vues dont la révision est due maintenant. */
  countDue(allQuestionsPool, now = Date.now()) {
    const cards = this.storage.profileData.fsrsCards || {};
    let n = 0;
    this.groupByConcept(allQuestionsPool).forEach((qs, key) => { const c = cards[key]; if (c && c.state !== 0 && c.due <= now) n += 1; });
    return n;
  }

  /** Notions ancrées durablement (stabilité ≥ 14 jours et rétention ≥ 90 %). */
  getGlobalFSRSMastery(allQuestionsPool) {
    const groups = this.groupByConcept(allQuestionsPool || []);
    const now = Date.now();
    const cards = this.storage.profileData.fsrsCards || {};
    let mastered = 0;
    groups.forEach((qs, key) => {
      const c = cards[key];
      if (c && c.state === 2 && c.stability >= 14 && this.getRetrievability(c, now) >= 0.9) mastered += 1;
    });
    const total = groups.size;
    return { mastered, total, pct: total ? Math.round((mastered / total) * 100) : 0 };
  }
}

// Instance globale prête à l'emploi
window.FSRSEngine = FSRSEngine;
window.fsrsEngine = new FSRSEngine(window.storageManager);
