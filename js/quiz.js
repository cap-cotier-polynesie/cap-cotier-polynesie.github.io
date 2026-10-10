/**
 * Cap Côtier — moteur de QCM.
 * Deux modes :
 *  - « practice » : correction immédiate et explication après chaque question ;
 *  - « exam »     : conditions d’examen (chrono global, navigation libre, correction à la fin).
 */
class QuizEngine {
  constructor() {
    this.storage = window.storageManager;
    this.fsrs = window.fsrsEngine;
    this.sound = window.soundEngine;
    this.state = null;
    this.timer = null;
    this.onKey = this.onKey.bind(this);
  }

  static shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  get active() { return !!(this.state && !this.state.finished); }

  /**
   * cfg : { title, kicker, mode, questions, shuffle, timeLimit (s), maxErrors, passPct, backHref, backLabel, onRetry }
   */
  start(container, cfg, resume) {
    this.stop();
    const questions = resume ? resume.questions : (cfg.shuffle ? QuizEngine.shuffle(cfg.questions) : cfg.questions.slice());
    this.container = container;
    this.state = {
      cfg,
      questions,
      index: resume ? resume.index : 0,
      answers: resume ? resume.answers : new Array(questions.length).fill(null),
      flagged: new Set(resume ? resume.flagged : []),
      revealed: false,
      finished: false,
      startedAt: resume ? resume.startedAt : Date.now(),
      deadline: resume ? resume.deadline : (cfg.timeLimit ? Date.now() + cfg.timeLimit * 1000 : null)
    };
    this.state.session = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    this.persist();
    document.body.classList.add("in-quiz");
    document.addEventListener("keydown", this.onKey);
    if (this.state.deadline) this.timer = setInterval(() => this.tick(), 500);
    this.render();
    this.focusQuestion();
  }

  /** Sauvegarde l’examen en cours (session du navigateur) pour pouvoir le reprendre après un rechargement. */
  persist() {
    const s = this.state;
    if (!s || s.cfg.mode !== "exam" || !s.cfg.resumeKey) return;
    if (!s.finished && !s.answers.some(Boolean)) return; // rien à sauvegarder tant qu'aucune réponse n'est donnée
    try {
      if (s.finished) { sessionStorage.removeItem("pcm_exam"); return; }
      sessionStorage.setItem("pcm_exam", JSON.stringify({ key: s.cfg.resumeKey, ids: s.questions.map((q) => q.id), answers: s.answers, flagged: [...s.flagged], index: s.index, startedAt: s.startedAt, deadline: s.deadline }));
    } catch (e) { /* stockage indisponible */ }
  }

  static savedExam(key) {
    try {
      const d = JSON.parse(sessionStorage.getItem("pcm_exam") || "null");
      if (d && d.key === key && (!d.deadline || d.deadline > Date.now() + 5000)) return d;
    } catch (e) { /* ignore */ }
    return null;
  }

  static clearSavedExam() {
    try { sessionStorage.removeItem("pcm_exam"); } catch (e) { /* ignore */ }
  }

  /** Vrai si quitter maintenant ferait perdre un examen en cours. */
  get atRisk() {
    const s = this.state;
    return !!(s && !s.finished && s.cfg.mode === "exam" && s.answers.some(Boolean));
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;
    document.removeEventListener("keydown", this.onKey);
    document.body.classList.remove("in-quiz");
    this.state = null;
  }

  // ------------------------------------------------------------------
  tick() {
    const s = this.state;
    if (!s || s.finished || !s.deadline) return;
    const left = Math.max(0, s.deadline - Date.now());
    const el = this.container.querySelector("#quizTimer");
    if (el) {
      el.querySelector("span").textContent = QuizEngine.fmt(left);
      el.classList.toggle("is-low", left < 60000);
    }
    if (left <= 0) {
      this.finish();
      window.app.toast("Temps écoulé — copie ramassée !");
    }
  }

  static fmt(ms) {
    const t = Math.ceil(ms / 1000);
    return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
  }

  onKey(e) {
    const s = this.state;
    if (!s || s.finished || e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector("dialog[open]")) return;
    const tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    const q = s.questions[s.index];
    const keys = Object.keys(q.options);
    let k = e.key.toUpperCase();
    if (/^[1-9]$/.test(e.key)) k = keys[parseInt(e.key, 10) - 1];
    if (keys.includes(k)) { e.preventDefault(); this.choose(k); return; }
    if (e.key === "Enter") {
      // Entrée sur un bouton ou un lien garde son comportement natif (grille, « À revoir », « Précédente »…)
      const t = e.target;
      if (t && t.closest && t.closest("button, a") && !t.closest(".opt")) return;
      if (s.cfg.mode === "practice" && s.revealed) { e.preventDefault(); this.next(); }
      else if (s.cfg.mode === "exam" && s.answers[s.index]) { e.preventDefault(); this.next(); }
    } else if (e.key === "ArrowRight" && s.cfg.mode === "exam") { this.go(s.index + 1); }
    else if (e.key === "ArrowLeft" && s.cfg.mode === "exam") { this.go(s.index - 1); }
  }

  choose(key) {
    const s = this.state;
    if (!s || s.finished) return;
    if (s.cfg.mode === "practice") {
      if (s.revealed) return;
      s.answers[s.index] = key;
      s.revealed = true;
      const q = s.questions[s.index];
      const ok = key === q.correct;
      this.storage.recordAnswer(q.duplicateOf || q.id, ok, { save: false, concept: q.concept, session: s.session });
      this.fsrs.scheduleCard(window.FSRSEngine.keyOf(q), ok ? 3 : 1);
      this.render();
      this.announce(ok ? "Bonne réponse." : `Mauvaise réponse. Réponse attendue : ${q.correct}, ${q.options[q.correct]}.`);
      const actions = this.container.querySelector(".quiz-actions");
      if (actions && actions.getBoundingClientRect().bottom > window.innerHeight) actions.scrollIntoView({ behavior: "smooth", block: "end" });
      const nb = this.container.querySelector("[data-act='next']");
      if (nb) nb.focus({ preventScroll: true });
      try { ok ? this.sound.playSuccess() : this.sound.playError(); } catch (e) { /* son facultatif */ }
    } else {
      s.answers[s.index] = key;
      this.persist();
      this.render();
      const b = this.container.querySelector(`[data-opt='${key}']`);
      if (b) b.focus({ preventScroll: true });
    }
  }

  next() {
    const s = this.state;
    if (s.index >= s.questions.length - 1) {
      if (s.cfg.mode === "exam") return this.confirmSubmit();
      return this.finish();
    }
    s.index += 1;
    s.revealed = false;
    this.persist();
    this.render(true);
    this.focusQuestion();
  }

  go(i) {
    const s = this.state;
    if (i < 0 || i >= s.questions.length) return;
    s.index = i;
    this.persist();
    this.render(true);
    this.focusQuestion();
  }

  focusQuestion() {
    const h = this.container.querySelector(".q-text");
    if (h) h.focus({ preventScroll: true });
  }

  announce(text) {
    const el = document.getElementById("quizLive");
    if (el) { el.textContent = ""; setTimeout(() => { el.textContent = text; }, 30); }
  }

  toggleFlag() {
    const s = this.state;
    s.flagged.has(s.index) ? s.flagged.delete(s.index) : s.flagged.add(s.index);
    this.persist();
    this.render();
    const b = this.container.querySelector("[data-act='flag']");
    if (b) b.focus({ preventScroll: true });
    this.announce(s.flagged.has(s.index) ? "Question marquée à revoir." : "Marque retirée.");
  }

  async confirmSubmit() {
    const s = this.state;
    const missing = s.answers.filter((a) => !a).length;
    const ok = await window.app.confirm({
      title: "Rendre la copie ?",
      text: missing ? `Il reste ${missing} question${missing > 1 ? "s" : ""} sans réponse : elle${missing > 1 ? "s" : ""} compte${missing > 1 ? "nt" : ""} comme fausse${missing > 1 ? "s" : ""}.` : "Toutes les questions ont une réponse. Vous ne pourrez plus les modifier.",
      ok: "Rendre la copie",
      cancel: "Continuer"
    });
    if (ok && this.state === s) this.finish();
  }

  async quit() {
    const s = this.state;
    const answered = s.answers.filter(Boolean).length;
    if (answered > 0 && !s.finished) {
      const ok = await window.app.confirm({ title: "Quitter la série ?", text: s.cfg.mode === "exam" ? "L’examen blanc en cours sera abandonné." : "Vos réponses déjà données restent enregistrées dans votre progression.", ok: "Quitter", cancel: "Rester", danger: true });
      if (!ok) return;
    }
    const href = s.cfg.backHref || "#/entrainement";
    QuizEngine.clearSavedExam();
    this.stop();
    window.location.hash = href;
  }

  finish() {
    const s = this.state;
    if (!s || s.finished) return;
    s.finished = true;
    clearInterval(this.timer);
    document.querySelectorAll("dialog[open]").forEach((d) => d.close());
    QuizEngine.clearSavedExam();
    const total = s.questions.length;
    let score = 0;
    const mistakes = [];
    s.questions.forEach((q, i) => {
      const ok = s.answers[i] === q.correct;
      if (ok) score += 1; else mistakes.push(q.id);
      if (s.cfg.mode === "exam") {
        this.storage.recordAnswer(q.duplicateOf || q.id, ok, { save: false, concept: q.concept, session: s.session });
        this.fsrs.scheduleCard(window.FSRSEngine.keyOf(q), ok ? 3 : 1);
      }
    });
    const errors = total - score;
    const passed = s.cfg.maxErrors != null ? errors <= s.cfg.maxErrors : (score / Math.max(1, total)) * 100 >= (s.cfg.passPct || 80);
    s.result = { total, score, errors, passed, pct: Math.round((score / Math.max(1, total)) * 100), duration: Date.now() - s.startedAt };
    this.storage.recordQuizHistory({ title: s.cfg.title, mode: s.cfg.mode, total, score, passed, mistakeIds: mistakes });
    if (passed) this.sound.playFanfare();
    document.body.classList.remove("in-quiz");
    this.renderResult();
  }

  // ------------------------------------------------------------------
  // Rendu
  // ------------------------------------------------------------------
  media(q) {
    if (q.figure && q.image) {
      // Image d'origine conservée pour le contexte (navire, scène) + détail redessiné à côté
      const f = q.figure;
      const attrs = Object.entries(f).map(([k, v]) => `data-${k}="${String(v).replace(/"/g, "&quot;")}"`).join(" ");
      return `<div class="q-media q-media-both"><button class="zoom-btn" type="button" data-zoom="${q.image}" aria-label="Agrandir l’illustration"><img class="q-img" src="${q.image}" alt="Illustration de la question" decoding="async"></button><figure class="fig" data-neutral="1" ${attrs}></figure></div>`;
    }
    if (q.figure) {
      const f = q.figure;
      const attrs = Object.entries(f).map(([k, v]) => `data-${k}="${String(v).replace(/"/g, "&quot;")}"`).join(" ");
      return `<div class="q-media"><figure class="fig" data-neutral="1" ${attrs}></figure></div>`;
    }
    if (q.image) {
      return `<div class="q-media"><button class="zoom-btn" type="button" data-zoom="${q.image}" aria-label="Agrandir l’illustration"><img class="q-img" src="${q.image}" alt="Illustration de la question" loading="eager" decoding="async"></button></div>`;
    }
    return "";
  }

  render(scrollTop) {
    const s = this.state;
    const q = s.questions[s.index];
    const n = s.questions.length;
    const isExam = s.cfg.mode === "exam";
    const chosen = s.answers[s.index];
    const answeredCount = s.answers.filter(Boolean).length;
    const progress = isExam ? (answeredCount / n) * 100 : ((s.index + (s.revealed ? 1 : 0)) / n) * 100;

    const opts = Object.entries(q.options).map(([k, text]) => {
      let cls = "opt", mark = "";
      if (!isExam && s.revealed) {
        if (k === q.correct) { cls += " is-correct"; mark = `<svg class="mark" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>`; }
        else if (k === chosen) { cls += " is-wrong"; mark = `<svg class="mark" viewBox="0 0 24 24" fill="none" stroke="var(--bad)" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`; }
        else cls += " is-dim";
      } else if (k === chosen) cls += " is-selected";
      const dis = !isExam && s.revealed ? "disabled" : "";
      return `<button class="${cls}" type="button" data-opt="${k}" ${dis} aria-pressed="${k === chosen}"><span class="key">${k}</span><span>${window.app.esc(text)}</span>${mark}</button>`;
    }).join("");

    let feedback = "";
    if (!isExam && s.revealed) {
      const ok = chosen === q.correct;
      feedback = `<div class="feedback ${ok ? "is-ok" : "is-bad"}" role="status">
        <h4>${ok ? "Bonne réponse" : `Réponse attendue : ${q.correct}`}</h4>
        <p>${window.app.esc(q.explanation || "")}</p>
        <p class="feedback-report">${window.app.reportLink(window.app.reportQuestionUrl(q))}</p>
      </div>`;
    }

    const last = s.index === n - 1;
    let actions;
    if (isExam) {
      actions = `<button class="btn btn-ghost btn-sm" type="button" data-act="prev" ${s.index === 0 ? "disabled" : ""}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>Précédente</button>
        <button class="btn btn-quiet btn-sm" type="button" data-act="flag" aria-pressed="${s.flagged.has(s.index)}">
          <svg viewBox="0 0 24 24" fill="${s.flagged.has(s.index) ? "var(--gold)" : "none"}" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4h11l-2 4 2 4H5"/></svg>${s.flagged.has(s.index) ? "Marquée" : "À revoir"}</button>
        <span class="spacer"></span>
        ${last ? `<button class="btn btn-accent" type="button" data-act="submit">Rendre la copie</button>`
               : `<button class="btn btn-primary" type="button" data-act="next">Suivante<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>`}`;
    } else {
      actions = `<span class="spacer"></span>${s.revealed ? `<button class="btn btn-primary" type="button" data-act="next">${last ? "Voir le bilan" : "Question suivante"}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>` : ""}`;
    }

    const grid = isExam ? `<div class="q-grid" role="navigation" aria-label="Questions">${s.questions.map((_, i) =>
      `<button type="button" data-go="${i}" class="${i === s.index ? "is-current" : ""} ${s.answers[i] ? "is-answered" : ""} ${s.flagged.has(i) ? "is-flagged" : ""}" aria-label="Question ${i + 1}${s.answers[i] ? ", répondue" : ""}${s.flagged.has(i) ? ", marquée à revoir" : ""}" ${i === s.index ? 'aria-current="true"' : ""}>${i + 1}</button>`).join("")}</div>` : "";

    this.container.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <button class="icon-btn" type="button" data-act="quit" aria-label="Quitter la série"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
          <div class="quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}"><i style="width:${progress}%"></i></div>
          ${s.deadline ? `<span class="timer" id="quizTimer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M10 2h4"/></svg><span>${QuizEngine.fmt(s.deadline - Date.now())}</span></span>`
                       : `<span class="quiz-counter">${s.index + 1}<span class="muted"> / ${n}</span></span>`}
        </div>
        <article class="panel q-card">
          <div class="q-head">
            <span class="quiz-title">${window.app.esc(s.cfg.title)}</span>
            ${isExam ? `<span class="chip">Question ${s.index + 1} / ${n}</span>` : (!s.cfg.categoryLabel && q.categoryLabel && !s.cfg.title.toLowerCase().includes(q.categoryLabel.toLowerCase())) ? `<span class="chip">${window.app.esc(q.categoryLabel)}</span>` : ""}
          </div>
          <h2 class="q-text" tabindex="-1">${window.app.esc(q.question)}</h2>
          ${this.media(q)}
          <div class="options" role="group" aria-label="Réponses">${opts}</div>
          ${feedback}
          <div class="quiz-actions">${actions}</div>
        </article>
        ${grid}
        <p class="sr-only" id="quizLive" aria-live="polite"></p>
        <p class="kbd-hint">Clavier : <kbd>A</kbd>–<kbd>${Object.keys(q.options).slice(-1)[0]}</kbd> ou <kbd>1</kbd>–<kbd>${Object.keys(q.options).length}</kbd> pour répondre · <kbd>Entrée</kbd> pour continuer${isExam ? " · <kbd>←</kbd> <kbd>→</kbd> pour naviguer" : ""}</p>
      </div>`;

    window.Figures.hydrate(this.container);
    this.bind();
    if (scrollTop) window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  bind() {
    const c = this.container;
    c.querySelectorAll("[data-opt]").forEach((b) => b.addEventListener("click", () => this.choose(b.dataset.opt)));
    c.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => this.go(parseInt(b.dataset.go, 10))));
    const act = (name, fn) => { const b = c.querySelector(`[data-act='${name}']`); if (b) b.addEventListener("click", fn); };
    act("next", () => this.next());
    act("prev", () => this.go(this.state.index - 1));
    act("flag", () => this.toggleFlag());
    act("submit", () => this.confirmSubmit());
    act("quit", () => this.quit());
    c.querySelectorAll("[data-zoom]").forEach((b) => b.addEventListener("click", () => window.app.zoom(b.dataset.zoom)));
  }

  renderResult() {
    const s = this.state;
    const r = s.result;
    const cfg = s.cfg;
    const isExam = cfg.mode === "exam";
    const mins = Math.floor(r.duration / 60000), secs = Math.round((r.duration % 60000) / 1000);
    let title, text;
    if (cfg.maxErrors != null) {
      title = r.passed ? "Reçu !" : "Ajourné, cette fois.";
      text = r.passed
        ? `${r.errors} erreur${r.errors > 1 ? "s" : ""} pour ${cfg.maxErrors} autorisée${cfg.maxErrors > 1 ? "s" : ""} au maximum. Vous auriez réussi l’épreuve théorique.`
        : `${r.errors} erreurs alors que ${cfg.maxErrors} au maximum sont admises. Relisez les explications ci-dessous puis retentez votre chance.`;
    } else {
      title = r.pct >= 90 ? "Excellent cap !" : r.pct >= 70 ? "Belle progression" : "On consolide";
      text = r.pct >= 90 ? "Ces notions sont bien ancrées. Passez à la suite ou tentez un examen blanc." : "Les questions manquées reviendront dans la révision intelligente jusqu’à ce qu’elles soient acquises.";
    }
    const reviewItems = s.questions.map((q, i) => {
      const a = s.answers[i];
      const ok = a === q.correct;
      let thumb = "";
      if (q.image) thumb = `<button class="zoom-btn" type="button" data-zoom="${q.image}" aria-label="Agrandir"><img src="${q.image}" alt="" loading="lazy"></button>`;
      else if (q.figure) thumb = `<figure class="fig" ${Object.entries(q.figure).map(([k, v]) => `data-${k}="${String(v).replace(/"/g, "&quot;")}"`).join(" ")}></figure>`;
      const flagged = s.flagged.has(i) ? ` <span class="chip is-warn">marquée</span>` : "";
      return `<div class="panel review-item ${ok ? "" : "is-bad"}">
        <div class="ri-row">${thumb}<div>
          <div class="ri-q"><span class="mono muted">${String(i + 1).padStart(2, "0")} · </span>${window.app.esc(q.question)}${flagged}</div>
          <div class="ri-ans">${ok ? `<b>Juste</b><span class="ok">${q.correct} — ${window.app.esc(q.options[q.correct])}</span>`
            : `${a ? `<b>Votre réponse</b><span class="bad">${a} — ${window.app.esc(q.options[a])}</span><br>` : `<b>Votre réponse</b><span class="muted">aucune</span><br>`}<b>Bonne réponse</b><span class="ok">${q.correct} — ${window.app.esc(q.options[q.correct])}</span>`}</div>
          <p class="ri-exp">${window.app.esc(q.explanation || "")}</p>
          <p class="ri-report">${window.app.reportLink(window.app.reportQuestionUrl(q))}</p>
        </div></div>
      </div>`;
    });
    const wrongCount = r.total - r.score;
    this.container.innerHTML = `
      <div class="quiz view-enter">
        <section class="panel result-hero">
          <div class="dial" style="--p:${r.pct};--c:${r.passed ? "var(--ok)" : "var(--bad)"}"><div><b>${r.score}<small style="font-size:.5em">/${r.total}</small></b><span>${r.pct} %</span></div></div>
          <div>
            <span class="eyebrow">${window.app.esc(cfg.title)}</span>
            <h1 tabindex="-1" id="resultTitle">${title}</h1>
            <p>${text}</p>
            <div class="hero-actions">
              <button class="btn btn-primary" type="button" data-act="retry">Recommencer</button>
              <a class="btn btn-ghost" href="${cfg.backHref || "#/entrainement"}">${window.app.esc(cfg.backLabel || "Retour à l’entraînement")}</a>
            </div>
            <p class="mono muted" style="margin:14px 0 0;font-size:.8rem">Durée : ${mins} min ${String(secs).padStart(2, "0")} s · ${wrongCount} erreur${wrongCount > 1 ? "s" : ""}</p>
          </div>
        </section>
        <div class="section-title"><div><h2>Corrigé détaillé</h2><p class="muted" style="margin:0">${wrongCount ? `${wrongCount} question${wrongCount > 1 ? "s" : ""} manquée${wrongCount > 1 ? "s" : ""}, signalée${wrongCount > 1 ? "s" : ""} par un trait rouge.` : "Sans faute !"}</p></div>
          ${wrongCount ? `<div class="review-tools"><button class="btn btn-ghost btn-sm" type="button" data-act="only-errors" aria-pressed="false">Seulement les erreurs</button><button class="btn btn-lagoon btn-sm" type="button" data-act="redo-errors">Refaire mes erreurs</button></div>` : ""}</div>
        <div class="review">${reviewItems.join("")}</div>
      </div>`;
    window.Figures.hydrate(this.container);
    const onlyErr = this.container.querySelector("[data-act='only-errors']");
    if (onlyErr) onlyErr.addEventListener("click", () => {
      const list = this.container.querySelector(".review");
      const on = list.classList.toggle("only-errors");
      onlyErr.setAttribute("aria-pressed", String(on));
      onlyErr.textContent = on ? "Tout afficher" : "Seulement les erreurs";
    });
    const redo = this.container.querySelector("[data-act='redo-errors']");
    if (redo) redo.addEventListener("click", () => {
      const wrong = s.questions.filter((q, i) => s.answers[i] !== q.correct);
      this.start(this.container, { title: "Revoir mes erreurs", mode: "practice", questions: wrong, shuffle: true, backHref: cfg.backHref, backLabel: cfg.backLabel });
      window.scrollTo({ top: 0 });
    });
    const retry = this.container.querySelector("[data-act='retry']");
    if (retry) retry.addEventListener("click", () => cfg.onRetry ? cfg.onRetry() : this.start(this.container, cfg));
    this.container.querySelectorAll("[data-zoom]").forEach((b) => b.addEventListener("click", () => window.app.zoom(b.dataset.zoom)));
    window.scrollTo({ top: 0 });
    const rt = this.container.querySelector("#resultTitle");
    if (rt) rt.focus({ preventScroll: true });
  }
}

window.QuizEngine = QuizEngine;
window.quizEngine = new QuizEngine();
