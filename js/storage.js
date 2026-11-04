/**
 * Cap Côtier — stockage local et profils.
 * Plusieurs profils de candidats sur le même appareil ; suivi par identifiant de question.
 * Toutes les lectures/écritures sont protégées : l'application fonctionne même sans stockage.
 */
class StorageManager {
  constructor() {
    this.LIST_KEY = "pcm_profiles_list";
    this.ACTIVE_KEY = "pcm_active_profile_id";
    this.listeners = [];
    this.memory = {}; // repli si localStorage est indisponible
    this.init();
  }

  // --- accès bas niveau ---
  get(key) {
    try { const v = localStorage.getItem(key); return v === null ? this.memory[key] ?? null : v; }
    catch (e) { return this.memory[key] ?? null; }
  }
  set(key, val) {
    this.memory[key] = val;
    try { localStorage.setItem(key, val); } catch (e) { /* stockage plein ou bloqué */ }
  }
  remove(key) {
    delete this.memory[key];
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }
  readJSON(key, fallback) {
    try { const raw = this.get(key); return raw ? JSON.parse(raw) : fallback; } catch (e) { return fallback; }
  }

  init() {
    let list = this.getProfilesList();
    if (!list.length) {
      const p = { id: "prof_default", name: "Capitaine", createdAt: Date.now() };
      list = [p];
      this.saveProfilesList(list);
      this.set(this.ACTIVE_KEY, p.id);
    }
    const active = this.get(this.ACTIVE_KEY);
    this.activeProfileId = list.some((p) => p.id === active) ? active : list[0].id;
    this.loadProfileData(this.activeProfileId);
  }

  emptyProfile(name) {
    return {
      name: name || "Capitaine",
      createdAt: Date.now(),
      viewedSections: [],
      questionStats: {}, // { questionId: { attempts, correct, lapses, lastResult, consecutiveCorrect, lastAttemptDate, mastered } }
      conceptStats: {},  // même structure, par notion (questions équivalentes regroupées)
      fsrsCards: {},
      quizHistory: [],
      statsSummary: { totalAnswers: 0, totalCorrect: 0, quizzesCompleted: 0 }
    };
  }

  getProfilesList() {
    const l = this.readJSON(this.LIST_KEY, []);
    return Array.isArray(l) ? l.filter((p) => p && typeof p.id === "string" && p.id).map((p) => ({ id: p.id, name: typeof p.name === "string" && p.name.trim() ? p.name.trim().slice(0, 40) : "Capitaine", createdAt: Number.isFinite(p.createdAt) ? p.createdAt : Date.now() })) : [];
  }
  saveProfilesList(list) { this.set(this.LIST_KEY, JSON.stringify(list)); }

  /** Reconstruit un profil propre à partir de données éventuellement corrompues ou anciennes. */
  sanitizeProfile(d, fallbackName) {
    const isObj = (x) => x && typeof x === "object" && !Array.isArray(x);
    const src = isObj(d) ? d : {};
    const p = this.emptyProfile(typeof src.name === "string" && src.name.trim() ? src.name.trim().slice(0, 40) : fallbackName);
    if (Number.isFinite(src.createdAt)) p.createdAt = src.createdAt;
    if (Array.isArray(src.viewedSections)) p.viewedSections = src.viewedSections.filter((x) => typeof x === "string");
    ["questionStats", "conceptStats"].forEach((field) => {
      if (!isObj(src[field])) return;
      Object.entries(src[field]).forEach(([id, st]) => {
        if (!isObj(st)) return;
        const n = (v) => (Number.isFinite(v) && v >= 0 ? v : 0);
        const clean = { attempts: n(st.attempts), correct: n(st.correct), lapses: n(st.lapses), lastResult: !!st.lastResult, consecutiveCorrect: n(st.consecutiveCorrect), lastAttemptDate: n(st.lastAttemptDate) };
        if (typeof st.lastCorrectSession === "string") clean.lastCorrectSession = st.lastCorrectSession.slice(0, 32);
        if (Number.isFinite(st.lastCountedCorrect)) clean.lastCountedCorrect = st.lastCountedCorrect;
        clean.mastered = clean.consecutiveCorrect >= 2;
        p[field][id] = clean;
      });
    });
    if (isObj(src.fsrsCards)) {
      Object.entries(src.fsrsCards).forEach(([id, c]) => {
        if (isObj(c) && Number.isFinite(c.state) && Number.isFinite(c.stability) && Number.isFinite(c.due)) p.fsrsCards[id] = Object.assign({ id, difficulty: 5, reps: 0, lapses: 0, lastReview: 0 }, c, { id });
      });
    }
    if (Array.isArray(src.quizHistory)) {
      p.quizHistory = src.quizHistory.filter((h) => isObj(h) && Number.isFinite(h.total) && Number.isFinite(h.score)).slice(0, 60)
        .map((h) => ({ id: String(h.id || ""), date: Number.isFinite(h.date) ? h.date : Date.now(), title: String(h.title || "Entraînement"), mode: String(h.mode || "practice"), total: h.total, score: h.score, percentage: h.total ? Math.round((h.score / h.total) * 100) : 0, passed: !!h.passed, mistakeIds: Array.isArray(h.mistakeIds) ? h.mistakeIds.filter((x) => typeof x === "string") : [] }));
    }
    if (isObj(src.statsSummary)) {
      ["totalAnswers", "totalCorrect", "quizzesCompleted"].forEach((k) => { if (Number.isFinite(src.statsSummary[k]) && src.statsSummary[k] >= 0) p.statsSummary[k] = src.statsSummary[k]; });
    }
    return p;
  }

  loadProfileData(id) {
    const info = this.getProfilesList().find((p) => p.id === id);
    this.profileData = this.sanitizeProfile(this.readJSON(`pcm_data_${id}`, null), info ? info.name : "Capitaine");
  }

  saveProfileData(id = this.activeProfileId, data = this.profileData) {
    this.set(`pcm_data_${id}`, JSON.stringify(data));
    this.notify();
  }

  subscribe(cb) { this.listeners.push(cb); return () => { this.listeners = this.listeners.filter((x) => x !== cb); }; }
  notify() { this.listeners.forEach((cb) => { try { cb(this.profileData); } catch (e) { console.error(e); } }); }

  // --- profils ---
  createProfile(name) {
    const clean = ((name || "").trim() || "Nouveau marin").slice(0, 40);
    const id = "prof_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const list = this.getProfilesList();
    list.push({ id, name: clean, createdAt: Date.now() });
    this.saveProfilesList(list);
    this.set(`pcm_data_${id}`, JSON.stringify(this.emptyProfile(clean)));
    return this.switchProfile(id);
  }
  switchProfile(id) {
    if (!this.getProfilesList().some((p) => p.id === id)) return false;
    this.activeProfileId = id;
    this.set(this.ACTIVE_KEY, id);
    this.loadProfileData(id);
    this.notify();
    return true;
  }
  renameProfile(id, name) {
    const clean = (name || "").trim().slice(0, 40);
    if (!clean) return false;
    const list = this.getProfilesList();
    const e = list.find((p) => p.id === id);
    if (e) { e.name = clean; this.saveProfilesList(list); }
    if (id === this.activeProfileId) { this.profileData.name = clean; this.saveProfileData(); }
    else {
      const d = this.readJSON(`pcm_data_${id}`, null);
      if (d) { d.name = clean; this.set(`pcm_data_${id}`, JSON.stringify(d)); }
      this.notify();
    }
    return true;
  }
  deleteProfile(id) {
    let list = this.getProfilesList();
    if (list.length <= 1) return false;
    list = list.filter((p) => p.id !== id);
    this.saveProfilesList(list);
    this.remove(`pcm_data_${id}`);
    if (this.activeProfileId === id) this.switchProfile(list[0].id); else this.notify();
    return true;
  }
  getActiveProfileInfo() {
    return this.getProfilesList().find((p) => p.id === this.activeProfileId) || { id: this.activeProfileId, name: this.profileData.name };
  }
  resetCurrentProfile() {
    this.profileData = this.emptyProfile(this.profileData.name);
    this.saveProfileData();
  }

  // --- lecture des chapitres ---
  markSectionViewed(id) {
    if (!id || this.profileData.viewedSections.includes(id)) return false;
    this.profileData.viewedSections.push(id);
    this.saveProfileData();
    return true;
  }
  unmarkSectionViewed(id) {
    this.profileData.viewedSections = this.profileData.viewedSections.filter((x) => x !== id);
    this.saveProfileData();
  }
  isSectionViewed(id) { return this.profileData.viewedSections.includes(id); }
  setSectionsViewed(ids, read) {
    const set = new Set(this.profileData.viewedSections);
    ids.forEach((id) => (read ? set.add(id) : set.delete(id)));
    this.profileData.viewedSections = [...set];
    this.saveProfileData();
  }

  // --- réponses ---
  /**
   * Met à jour les statistiques d'une question ou d'une notion.
   * « Acquis » = deux bonnes réponses consécutives, données dans deux séries différentes et à au
   * moins 12 heures d'intervalle : répondre juste deux fois dans la même séance ne suffit pas.
   */
  static bump(map, key, ok, session) {
    const st = map[key] || (map[key] = { attempts: 0, correct: 0, lapses: 0, lastResult: false, consecutiveCorrect: 0, lastAttemptDate: 0, mastered: false });
    st.attempts += 1;
    st.lastAttemptDate = Date.now();
    st.lastResult = !!ok;
    if (ok) {
      st.correct += 1;
      // Une nouvelle bonne réponse ne compte vers l'acquisition que si elle vient d'une autre série
      // ET au moins 12 heures après la précédente bonne réponse prise en compte.
      const now = Date.now();
      const spaced = !st.lastCountedCorrect || now - st.lastCountedCorrect >= StorageManager.MASTERY_GAP;
      if ((!session || st.lastCorrectSession !== session) && spaced) { st.consecutiveCorrect += 1; st.lastCountedCorrect = now; }
      if (session) st.lastCorrectSession = session;
    } else { st.consecutiveCorrect = 0; st.lapses += 1; delete st.lastCountedCorrect; delete st.lastCorrectSession; }
    // Acquis = deux bonnes réponses consécutives (pour une notion : sur n'importe laquelle de ses questions)
    st.mastered = st.consecutiveCorrect >= 2;
    return st;
  }

  /** Enregistre une réponse pour la question et pour sa notion (concept). */
  recordAnswer(qid, ok, { save = true, concept = null, session = null } = {}) {
    if (!qid) return null;
    const st = StorageManager.bump(this.profileData.questionStats, qid, ok, session);
    StorageManager.bump(this.profileData.conceptStats, concept || qid, ok, session);
    this.profileData.statsSummary.totalAnswers += 1;
    if (ok) this.profileData.statsSummary.totalCorrect += 1;
    if (save) this.saveProfileData();
    return st;
  }
  getQuestionStats(qid) { return this.profileData.questionStats[qid] || null; }

  recordQuizHistory(entry) {
    const item = {
      id: "quiz_" + Date.now(),
      date: Date.now(),
      title: entry.title || "Entraînement",
      mode: entry.mode || "practice",
      total: entry.total || 0,
      score: entry.score || 0,
      percentage: entry.total ? Math.round((entry.score / entry.total) * 100) : 0,
      passed: !!entry.passed,
      mistakeIds: entry.mistakeIds || []
    };
    this.profileData.quizHistory.unshift(item);
    this.profileData.quizHistory = this.profileData.quizHistory.slice(0, 60);
    this.profileData.statsSummary.quizzesCompleted += 1;
    this.saveProfileData();
    return item;
  }

  // --- statistiques ---
  /**
   * Maîtrise d'un ensemble de questions, mesurée en NOTIONS : deux questions équivalentes
   * ne comptent qu'une fois, et réussir l'une suffit à établir la notion.
   */
  getMastery(questions = []) {
    const keys = new Map();
    questions.forEach((q) => { const k = q.concept || q.id; if (!keys.has(k)) keys.set(k, q.id); });
    const total = keys.size;
    let attempted = 0, mastered = 0, att = 0, cor = 0;
    keys.forEach((qid, k) => {
      const st = this.profileData.conceptStats[k] || this.profileData.questionStats[qid];
      if (st && st.attempts > 0) {
        attempted += 1;
        if (st.mastered) mastered += 1;
        att += st.attempts;
        cor += st.correct;
      }
    });
    return { total, questions: questions.length, attempted, mastered, pct: total ? Math.round((mastered / total) * 100) : 0, accuracy: att ? Math.round((cor / att) * 100) : 0 };
  }

  getMistakes(pool) {
    return pool.filter((q) => { const st = this.profileData.questionStats[q.id]; return st && st.attempts > 0 && !st.lastResult; });
  }

  /**
   * Indice de préparation : 50 % questions acquises, 30 % précision, 20 % chapitres lus.
   * La précision n'est prise en compte qu'en proportion du volume de réponses (pleinement à partir de 100).
   */
  getOverview(pool, sectionIds) {
    const m = this.getMastery(pool);
    const s = this.profileData.statsSummary;
    const accuracy = s.totalAnswers ? Math.round((s.totalCorrect / s.totalAnswers) * 100) : 0;
    const read = this.profileData.viewedSections.filter((id) => sectionIds.includes(id)).length;
    const readPct = sectionIds.length ? Math.round((read / sectionIds.length) * 100) : 0;
    const weight = Math.min(1, s.totalAnswers / 100);
    const readiness = Math.round(m.pct * 0.5 + accuracy * weight * 0.3 + readPct * 0.2);
    return { totalQuestions: pool.length, concepts: m.total, attempted: m.attempted, mastered: m.mastered, masteryPct: m.pct, accuracy, read, readPct, readiness, quizzes: s.quizzesCompleted, answers: s.totalAnswers };
  }

  // --- sauvegarde / restauration ---
  exportJSON() {
    const bundle = { app: "Cap Côtier", version: 2, exportedAt: new Date().toISOString(), activeProfileId: this.activeProfileId, profilesList: this.getProfilesList(), profilesData: {} };
    bundle.profilesList.forEach((p) => {
      const d = p.id === this.activeProfileId ? this.profileData : this.readJSON(`pcm_data_${p.id}`, null);
      if (d) bundle.profilesData[p.id] = d;
    });
    return JSON.stringify(bundle, null, 2);
  }
  /** Lit un fichier de sauvegarde sans rien modifier ; renvoie les profils valides. */
  parseBackup(text) {
    try {
      const d = JSON.parse(text);
      if (!d || !Array.isArray(d.profilesList) || !d.profilesData || typeof d.profilesData !== "object") return null;
      const profiles = d.profilesList
        .filter((p) => p && typeof p.id === "string" && /^[\w-]{1,64}$/.test(p.id))
        .map((p) => {
          const name = typeof p.name === "string" && p.name.trim() ? p.name.trim().slice(0, 40) : "Capitaine";
          return { id: p.id, name, createdAt: Number.isFinite(p.createdAt) ? p.createdAt : Date.now(), data: this.sanitizeProfile(d.profilesData[p.id], name) };
        });
      if (!profiles.length) return null;
      return { profiles, activeProfileId: d.activeProfileId };
    } catch (e) {
      return null;
    }
  }

  /** Importe une sauvegarde analysée : les profils du fichier remplacent ceux de même identifiant, les autres sont conservés. */
  importBackup(parsed) {
    const list = this.getProfilesList();
    parsed.profiles.forEach((p) => {
      const i = list.findIndex((x) => x.id === p.id);
      const entry = { id: p.id, name: p.name, createdAt: p.createdAt };
      if (i >= 0) list[i] = entry; else list.push(entry);
      this.set(`pcm_data_${p.id}`, JSON.stringify(p.data));
    });
    this.saveProfilesList(list);
    const next = parsed.profiles.some((p) => p.id === parsed.activeProfileId) ? parsed.activeProfileId : parsed.profiles[0].id;
    this.switchProfile(next);
    return parsed.profiles.length;
  }
}

StorageManager.MASTERY_GAP = 12 * 3600 * 1000;
window.storageManager = new StorageManager();
