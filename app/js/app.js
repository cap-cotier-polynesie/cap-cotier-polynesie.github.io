/**
 * Cap Côtier — contrôleur principal (routage par hash, vues, dialogues).
 */
(function () {
  "use strict";

  const D = window.PERMIS_DATA;
  const storage = window.storageManager;
  const fsrs = window.fsrsEngine;
  const quiz = window.quizEngine;
  const sound = window.soundEngine;
  const view = document.getElementById("view");

  // ------------------------------------------------------------------
  // Index des données
  // ------------------------------------------------------------------
  const moduleById = Object.fromEntries(D.modules.map((m) => [m.id, m]));
  const sectionById = Object.fromEntries(D.sections.map((s) => [s.id, s]));
  const questionById = Object.fromEntries(D.questions.map((q) => [q.id, q]));
  const studySections = D.sections.filter((s) => moduleById[s.moduleId] && !moduleById[s.moduleId].bonus);
  // Banque dédoublonnée (les tests de fin de cours reprennent des questions des chapitres)
  const pool = D.questions.filter((q) => !q.duplicateOf);
  const poolBySection = {};
  pool.forEach((q) => { (poolBySection[q.sectionId] = poolBySection[q.sectionId] || []).push(q); });
  const questionsBySection = poolBySection;
  const studyPool = pool.filter((q) => studySections.some((s) => s.id === q.sectionId));
  const conceptOf = (q) => q.concept || q.id;
  const categories = (D.categories || []).map((c) => Object.assign({}, c));
  const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));
  const questionsByCategory = {};
  pool.forEach((q) => (q.tags || []).forEach((t) => { (questionsByCategory[t] = questionsByCategory[t] || []).push(q); }));
  D.questions.forEach((q) => {
    const cat = q.tags && categoryById[q.tags[0]];
    q.categoryLabel = cat ? cat.label : "";
  });
  const visibleCategory = (c) => new Set((questionsByCategory[c.id] || []).map(conceptOf)).size >= 3;
  const themeBySection = Object.fromEntries(D.sets.filter((x) => x.kind === "theme").map((x) => [x.sectionId, x]));
  D.questions.forEach((q) => {
    const sec = sectionById[q.sectionId];
    q.sourceLabel = q.sourceLabel || (sec ? `${sec.number} · ${sec.shortTitle || sec.title}` : "");
  });

  // ------------------------------------------------------------------
  // Utilitaires
  // ------------------------------------------------------------------
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const plural = (n, one, many) => `${n} ${n > 1 ? many : one}`;
  const shuffle = (a) => window.QuizEngine.shuffle(a);

  // Signalement d’erreur : ouvre une issue GitHub pré-remplie
  const REPO = "https://github.com/cap-cotier-polynesie/cap-cotier-polynesie.github.io";
  function reportUrl(title, context) {
    const body = [...(context || []), "", "**Ce qui me semble erroné :**", "", "", "**Correction proposée ou source (facultatif) :**", "", "", "---", `Page : ${location.href}`].join("\n");
    return `${REPO}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  }
  const reportQuestionUrl = (q) => reportUrl(`Erreur dans la question ${q.id}`, [
    `**Question ${q.id}** : ${q.question}`, "",
    ...Object.entries(q.options).map(([k, t]) => `- ${k}. ${t}${k === q.correct ? " ✅" : ""}`), "",
    `> ${q.explanation || ""}`,
  ]);
  const reportLink = (href, label = "Signaler une erreur") => `<a class="report-link" href="${esc(href)}" target="_blank" rel="noopener">${I.flag} ${label}</a>`;

  const I = {
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 5.5C5 4.5 8 4.5 12 6.5c4-2 7-2 9-1v13c-2-1-5-1-9 1-4-2-7-2-9-1z"/><path d="M12 6.5v13"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>`,
    brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/><path d="M12 8v4l3 2"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M10 2h4"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,
    doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>`,
    flag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4h11l-2 4 2 4H5"/></svg>`,
    redo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg>`,
    play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>`,
    upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V9M7 14l5-5 5 5M4 3h16"/></svg>`,
    shuffle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>`,
    wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/></svg>`
  };

  // ------------------------------------------------------------------
  // Dialogues, toasts, zoom
  // ------------------------------------------------------------------
  const dlg = document.getElementById("appDialog");
  function openDialog(html, setup) {
    return new Promise((resolve) => {
      dlg.innerHTML = html;
      const done = (v) => { dlg.close(); resolve(v); };
      dlg.onclose = () => resolve(undefined);
      dlg.oncancel = () => resolve(undefined);
      setup(dlg, done);
      dlg.showModal();
    });
  }
  const confirm = (o) => confirmDialog(o);
  function confirmDialog({ title, text, ok = "Confirmer", cancel = "Annuler", danger = false }) {
    return openDialog(`<form method="dialog"><div class="dlg-body"><h3>${esc(title)}</h3><p>${esc(text)}</p></div>
      <div class="dlg-actions"><button class="btn btn-ghost btn-sm" value="cancel" type="button" data-c ${danger ? "autofocus" : ""}>${esc(cancel)}</button><button class="btn ${danger ? "btn-danger" : "btn-primary"} btn-sm" value="ok" type="submit" data-ok ${danger ? "" : "autofocus"}>${esc(ok)}</button></div></form>`,
      (d, done) => {
        d.querySelector("[data-c]").onclick = () => done(false);
        d.querySelector("form").onsubmit = (e) => { e.preventDefault(); done(true); };
      }).then((v) => v === true);
  }
  function promptDialog({ title, text = "", value = "", ok = "Valider" }) {
    return openDialog(`<form method="dialog"><div class="dlg-body"><h3>${esc(title)}</h3>${text ? `<p>${esc(text)}</p>` : ""}<input type="text" maxlength="40" value="${esc(value)}" aria-label="${esc(title)}" required></div>
      <div class="dlg-actions"><button class="btn btn-ghost btn-sm" type="button" data-c>Annuler</button><button class="btn btn-primary btn-sm" type="submit">${esc(ok)}</button></div></form>`,
      (d, done) => {
        const input = d.querySelector("input");
        setTimeout(() => { input.focus(); input.select(); }, 30);
        d.querySelector("[data-c]").onclick = () => done(null);
        d.querySelector("form").onsubmit = (e) => { e.preventDefault(); done(input.value.trim() || null); };
      });
  }
  function toast(msg) {
    const wrap = document.getElementById("toasts");
    wrap.innerHTML = "";
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => t.remove(), 2800);
  }
  const zoomDlg = document.getElementById("zoomDialog");
  zoomDlg.addEventListener("click", (e) => { if (e.target === zoomDlg || e.target.closest("[data-close]")) zoomDlg.close(); });
  function zoom(src) {
    const img = document.getElementById("zoomImg");
    img.src = src;
    img.alt = "Illustration agrandie";
    zoomDlg.showModal();
  }

  // ------------------------------------------------------------------
  // Progression
  // ------------------------------------------------------------------
  function sectionStats(secId) {
    const qs = questionsBySection[secId] || [];
    return storage.getMastery(qs);
  }
  function moduleProgress(mod) {
    const secs = mod.sections.map((id) => sectionById[id]);
    const read = secs.filter((s) => storage.isSectionViewed(s.id)).length;
    const qs = secs.flatMap((s) => questionsBySection[s.id] || []);
    const m = storage.getMastery(qs);
    return { read, total: secs.length, mastery: m.pct, frac: secs.length ? (read / secs.length) * 0.5 + (m.pct / 100) * 0.5 : 0 };
  }
  const studyIds = studySections.map((s) => s.id);
  function overview() { return storage.getOverview(studyPool, studyIds); }
  const readCount = () => storage.profileData.viewedSections.filter((id) => studyIds.includes(id)).length;

  function nextStep() {
    const unread = studySections.find((s) => !storage.isSectionViewed(s.id));
    if (unread) {
      const started = readCount() > 0;
      return { icon: I.book, kicker: started ? "Reprendre le cours" : "Commencer", title: `${unread.number} — ${unread.title}`, text: `${unread.minutes} min de lecture · ${plural((questionsBySection[unread.id] || []).length, "question", "questions")} d’entraînement`, href: `#/cours/${unread.id}`, cta: started ? "Continuer" : "Lire le premier chapitre" };
    }
    const weak = studySections.map((s) => ({ s, st: sectionStats(s.id) })).sort((a, b) => a.st.pct - b.st.pct)[0];
    if (weak && weak.st.pct < 70) {
      return { icon: I.target, kicker: "Point faible", title: `${weak.s.number} — ${weak.s.title}`, text: `${weak.st.pct} % des notions acquises. Une série ciblée pour consolider.`, href: `#/quiz/chapitre/${weak.s.id}`, cta: "S’entraîner" };
    }
    return { icon: I.clock, kicker: "Prêt pour le grand jour ?", title: "Examen blanc en conditions réelles", text: `${D.exam.questions} questions, ${D.exam.minutes} minutes, ${D.exam.maxErrors} erreurs maximum.`, href: "#/quiz/examen", cta: "Lancer l’examen blanc" };
  }

  // ------------------------------------------------------------------
  // Illustrations décoratives
  // ------------------------------------------------------------------
  function routeMapSVG() {
    const mods = D.modules.filter((m) => !m.bonus);
    const pts = [[70, 330], [175, 262], [300, 300], [372, 192], [462, 140], [548, 62]];
    const lab = [null, [0, 34, "middle"], [0, 34, "middle"], [-24, -4, "end"], [-24, 0, "end"]];
    const progs = mods.map(moduleProgress);
    const done = progs.reduce((a, p) => a + p.frac, 0) / mods.length;
    const d = `M${pts[0][0]} ${pts[0][1]} C120 300 150 270 ${pts[1][0]} ${pts[1][1]} S260 300 ${pts[2][0]} ${pts[2][1]} S360 200 ${pts[3][0]} ${pts[3][1]} S440 120 ${pts[4][0]} ${pts[4][1]} S520 70 ${pts[5][0]} ${pts[5][1]}`;
    const wps = mods.map((m, i) => {
      const [x, y] = pts[i + 1];
      const p = progs[i];
      const complete = p.read === p.total && p.mastery >= 70;
      return `<g class="wp ${complete ? "is-done" : p.read ? "is-started" : ""}">
        <circle cx="${x}" cy="${y}" r="15" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${complete ? `<path d="M${x - 6} ${y} l4 4 l8 -9" stroke="var(--ok)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : `<text x="${x}" y="${y + 5}" text-anchor="middle" font-family="DM Mono, monospace" font-size="13" fill="var(--ink)">${m.number}</text>`}
        <text x="${x + lab[i + 1][0]}" y="${y + lab[i + 1][1]}" text-anchor="${lab[i + 1][2]}" class="map-label">${esc(m.shortTitle)}</text>
        <text x="${x + lab[i + 1][0]}" y="${y + lab[i + 1][1] + 14}" text-anchor="${lab[i + 1][2]}" class="map-sub">${p.read}/${p.total} lus · ${p.mastery} %</text>
      </g>`;
    }).join("");
    return `<svg viewBox="0 0 600 390" role="img" aria-label="Votre route vers l’examen : ${Math.round(done * 100)} % parcourus">
      <defs>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="var(--line-strong)" stroke-width="1.2"/></pattern>
      </defs>
      <rect width="600" height="390" fill="color-mix(in srgb, var(--lagoon) 9%, var(--card))"/>
      <g fill="none" stroke="var(--lagoon)" stroke-opacity=".28" stroke-width="1.1">
        <path d="M600 210 C540 220 500 260 520 320 S590 390 600 392"/><path d="M600 240 C560 250 535 280 548 322 S595 370 600 372"/>
        <path d="M-2 120 C60 110 110 70 96 20 L94 -2"/><path d="M-2 90 C40 86 76 56 66 18 L64 -2"/><path d="M-2 150 C80 140 140 90 126 30 L122 -2"/>
      </g>
      <path d="M600 262 C572 270 560 296 570 324 S598 352 600 352 Z" fill="color-mix(in srgb, var(--gold) 30%, var(--card))" stroke="var(--ink)" stroke-width="1.2"/>
      <path d="M-2 62 C24 60 42 44 38 18 L36 -2 L-2 -2 Z" fill="color-mix(in srgb, var(--gold) 30%, var(--card))" stroke="var(--ink)" stroke-width="1.2"/>
      <path d="M-2 62 C24 60 42 44 38 18 L36 -2 L-2 -2 Z" fill="url(#hatch)" opacity=".5"/>
      <g font-family="DM Mono, monospace" font-size="10" font-style="italic" fill="var(--muted)" opacity=".8">
        <text x="120" y="120">14</text><text x="250" y="70">27</text><text x="350" y="350">18</text><text x="230" y="350">9</text><text x="470" y="250">32</text><text x="560" y="160">41</text><text x="160" y="190">11</text><text x="420" y="300">23</text>
      </g>
      <path d="${d}" fill="none" stroke="var(--ink)" stroke-opacity=".35" stroke-width="2" stroke-dasharray="2 7" stroke-linecap="round"/>
      <path d="${d}" fill="none" stroke="var(--coral)" stroke-width="3.5" stroke-linecap="round" pathLength="100" stroke-dasharray="${(done * 100).toFixed(1)} 100" class="route-done"/>
      <g transform="translate(${pts[0][0]} ${pts[0][1]})">
        <rect x="-26" y="10" width="52" height="8" fill="var(--ink)"/><path d="M-20 10 v-14 M-8 10 v-10 M6 10 v-16 M18 10 v-8" stroke="var(--ink)" stroke-width="2"/>
        <text x="0" y="36" text-anchor="middle" font-family="DM Mono, monospace" font-size="10" fill="var(--muted)" letter-spacing="1">MARINA</text>
      </g>
      ${wps}
      <g transform="translate(${pts[5][0]} ${pts[5][1]})">
        <circle r="20" fill="var(--coral)"/><path d="M-6 9 V-10 h12 l-3 4 3 4 h-12" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/>
        <text x="-30" y="5" text-anchor="end" class="map-label">Examen</text>
      </g>
      <g transform="translate(70 70)" opacity=".9">
        <circle r="34" fill="none" stroke="var(--ink)" stroke-opacity=".3"/><circle r="26" fill="none" stroke="var(--ink)" stroke-opacity=".2" stroke-dasharray="1 3"/>
        <path d="M0 -32 L5 -5 L0 0 Z" fill="var(--coral)"/><path d="M0 -32 L-5 -5 L0 0 Z" fill="var(--ink)"/>
        <path d="M0 32 L5 5 L0 0 Z M32 0 L5 5 L0 0 Z M-32 0 L-5 -5 L0 0 Z" fill="var(--ink)" opacity=".55"/>
        <text y="-40" text-anchor="middle" font-family="DM Mono, monospace" font-size="10" fill="var(--ink)">N</text>
      </g>
    </svg>`;
  }

  function examArtSVG() {
    let ticks = "";
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * Math.PI * 2, r1 = i % 5 ? 92 : 86, r2 = 98;
      ticks += `<line x1="${(150 + r1 * Math.sin(a)).toFixed(1)}" y1="${(150 - r1 * Math.cos(a)).toFixed(1)}" x2="${(150 + r2 * Math.sin(a)).toFixed(1)}" y2="${(150 - r2 * Math.cos(a)).toFixed(1)}" stroke="#e9eff7" stroke-opacity="${i % 5 ? 0.3 : 0.75}" stroke-width="${i % 5 ? 1 : 2}"/>`;
    }
    const sweep = (D.exam.minutes / 60) * Math.PI * 2;
    return `<svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="300" fill="transparent"/>
      <circle cx="150" cy="150" r="118" fill="none" stroke="#e9eff7" stroke-opacity=".08" stroke-width="22"/>
      <path d="M150 32 A118 118 0 0 1 ${(150 + 118 * Math.sin(sweep)).toFixed(1)} ${(150 - 118 * Math.cos(sweep)).toFixed(1)}" fill="none" stroke="#ff7f63" stroke-width="22"/>
      ${ticks}
      <text x="150" y="146" text-anchor="middle" font-family="Fraunces, serif" font-size="52" font-weight="600" fill="#f4efe4">${String(D.exam.minutes).padStart(2, "0")}:00</text>
      <text x="150" y="176" text-anchor="middle" font-family="DM Mono, monospace" font-size="11" letter-spacing="3" fill="#8ea0b6">${D.exam.questions} QUESTIONS</text>
    </svg>`;
  }

  // ------------------------------------------------------------------
  // Vues
  // ------------------------------------------------------------------
  function setView(html, { title, nav } = {}) {
    view.innerHTML = `<div class="view-enter">${html}</div>`;
    document.title = title ? `${title} — Permis côtier Polynésie · Cap Côtier` : "Permis côtier Polynésie française — Cap Côtier : cours et QCM gratuits";
    document.querySelectorAll("[data-nav]").forEach((a) => {
      if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    window.Figures.hydrate(view);
    view.querySelectorAll("[data-zoom]").forEach((b) => b.addEventListener("click", () => zoom(b.dataset.zoom)));
  }

  function renderHome() {
    const o = overview();
    const ns = nextStep();
    const due = fsrs.countDue(studyPool);
    const mistakes = storage.getMistakes(pool).length;
    const name = storage.getActiveProfileInfo().name;
    setView(`
      <section class="hero">
        <div>
          <span class="eyebrow">Permis côtier · Polynésie française</span>
          <h1>Prenez le large, <em>sereinement.</em></h1>
          <p class="hero-lede">Cours illustrés, près de 1 000 QCM corrigés et commentés, les questionnaires types et des examens blancs au format de la DPAM : tout pour réussir l’épreuve théorique du permis côtier à Tahiti et dans les îles.</p>
          <div class="hero-actions">
            <a class="btn btn-accent btn-lg" href="#/cours">Découvrir les cours ${I.arrow}</a>
            <a class="btn btn-ghost btn-lg" href="#/entrainement">S’entraîner</a>
          </div>
          <ul class="hero-perks">
            <li>${I.check} Gratuit</li>
            <li>${I.check} Sans inscription</li>
            <li>${I.check} Règles de Polynésie française</li>
          </ul>
        </div>
        <div>
          <div class="chart-frame route-map"><div class="chart-inner">${routeMapSVG()}</div></div>
          <div class="route-caption"><span>Route de ${esc(name)}</span><span>${o.readiness} % de préparation</span></div>
        </div>
      </section>

      <a class="panel next-step" href="${ns.href}" style="text-decoration:none;color:inherit">
        <span class="ns-icon">${ns.icon}</span>
        <span><span class="eyebrow">${esc(ns.kicker)}</span><h3>${esc(ns.title)}</h3><p>${esc(ns.text)}</p></span>
        <span class="btn btn-primary btn-sm">${esc(ns.cta)} ${I.arrow}</span>
      </a>

      <div class="section-title"><h2>Votre carnet de bord</h2><p>Programme théorique (${studySections.length} chapitres) · progression enregistrée sur cet appareil.</p></div>
      <div class="panel stat-strip">
        <div class="stat"><b>${o.readiness} %</b><span>Préparation</span></div>
        <div class="stat"><b>${readCount()}<small class="muted" style="font-size:.5em">/${studySections.length}</small></b><span>Chapitres lus</span></div>
        <div class="stat"><b>${o.mastered}<small class="muted" style="font-size:.5em">/${o.concepts}</small></b><span>Notions acquises</span></div>
        <div class="stat"><b>${o.answers ? o.accuracy + " %" : "—"}</b><span>Réussite</span></div>
      </div>

      <div class="section-title"><h2>S’entraîner</h2><a class="btn btn-quiet btn-sm" href="#/entrainement">Tout voir ${I.arrow}</a></div>
      <div class="grid grid-3">
        <a class="panel tile is-feature" href="#/quiz/revision">
          <span class="tile-icon">${I.brain}</span>
          <h3>Révision intelligente</h3>
          <p>20 questions choisies par répétition espacée : vos points faibles d’abord, puis de nouvelles questions.</p>
          <div class="tile-meta"><span class="chip">${due ? plural(due, "notion à revoir", "notions à revoir") : "Nouvelles notions"}</span></div>
        </a>
        <a class="panel tile" href="#/quiz/examen">
          <span class="tile-icon">${I.clock}</span>
          <h3>Examen blanc</h3>
          <p>${D.exam.questions} questions tirées sur tout le programme, chrono de ${D.exam.minutes} minutes, correction à la fin.</p>
          <div class="tile-meta"><span class="chip is-lagoon">${D.exam.maxErrors} erreurs max.</span></div>
        </a>
        ${mistakes ? `<a class="panel tile" href="#/quiz/erreurs">` : `<div class="panel tile is-disabled">`}
          <span class="tile-icon">${I.redo}</span>
          <h3>Mes erreurs</h3>
          <p>${mistakes ? "Reprenez les questions manquées lors de votre dernière tentative." : "Aucune erreur en attente. Les questions manquées apparaîtront ici."}</p>
          <div class="tile-meta"><span class="chip ${mistakes ? "is-bad" : ""}">${plural(mistakes, "question", "questions")}</span></div>
        ${mistakes ? "</a>" : "</div>"}
      </div>

      <div class="section-title"><h2>Merci à Fluid Tahiti</h2></div>
      <section class="panel credit-card">
        <span class="cc-mark">${I.wave}</span>
        <div><h3>Un contenu né au bord du lagon</h3>
        <p>Cap Côtier s’appuie notamment sur les supports de formation de <a href="https://www.fluid-tahiti.com/" target="_blank" rel="noopener">Fluid Tahiti</a>, adaptés et enrichis (questions, illustrations, explications, règles polynésiennes). Les éventuelles erreurs viennent de ce travail, pas de Fluid Tahiti : vous en repérez une ? ${reportLink(reportUrl("Erreur repérée"), "Signalez-la")}</p>
        <p>Centre de plongée de la Marina Taina (Punaauia), Fluid Tahiti forme aussi au <strong>permis bateau</strong>, de la théorie à la pratique sur l’eau. Plongée, sortie baleines ou permis côtier : <a href="https://www.fluid-tahiti.com/" target="_blank" rel="noopener">contactez-les</a>. Māuruuru roa !</p></div>
      </section>
    `, { nav: "home" });
  }

  function renderCourses() {
    const mods = D.modules.map((m) => {
      const p = moduleProgress(m);
      const rows = m.sections.map((id) => {
        const s = sectionById[id];
        const st = sectionStats(s.id);
        const read = storage.isSectionViewed(s.id);
        const nq = (questionsBySection[s.id] || []).length;
        return `<li><a class="chapter-row" href="#/cours/${s.id}">
          <span class="chapter-no">Ch.<b>${s.number}</b></span>
          <span><h3>${esc(s.title)}</h3><p>${esc(s.subtitle || "")} · ${s.minutes} min${nq ? ` · ${nq} QCM` : ""}</p></span>
          <span class="chapter-side">
            ${nq ? `<span class="ring" style="--p:${st.pct}" title="${st.pct} % des notions acquises"><span>${st.pct}</span></span>` : ""}
            <span class="read-badge ${read ? "is-read" : ""}" title="${read ? "Lu" : "À lire"}">${I.check}</span>
          </span>
        </a></li>`;
      }).join("");
      return `<section class="module" id="${m.id}">
        <div class="module-head">
          <span class="module-num">${m.bonus ? "+" : m.number}</span>
          <div><h2>${esc(m.title)}</h2><p>${esc(m.description)}</p></div>
          <span class="chip ${p.read === p.total ? "is-ok" : ""}">${p.read}/${p.total} lus</span>
        </div>
        <ul class="chapter-list">${rows}</ul>
      </section>`;
    }).join("");
    setView(`
      <header class="page-head">
        <span class="eyebrow">Le programme</span>
        <h1>Cours du permis côtier</h1>
        <p>${studySections.length} chapitres organisés comme la formation en salle : balisage, feux et marques, signaux et règles de barre, sécurité. Chaque chapitre se termine par sa série de QCM.</p>
        <div class="hero-actions" style="margin-top:16px">
          ${D.sections.every((s) => storage.isSectionViewed(s.id))
            ? `<button class="btn btn-ghost btn-sm" type="button" id="markAll" data-read="0">Tout marquer comme non lu</button>`
            : `<button class="btn btn-ghost btn-sm" type="button" id="markAll" data-read="1">${I.check} Tout marquer comme lu</button>`}
        </div>
      </header>
      ${mods}
    `, { title: "Cours", nav: "cours" });
    document.getElementById("markAll").addEventListener("click", (e) => {
      const read = e.currentTarget.dataset.read === "1";
      storage.setSectionsViewed(D.sections.map((s) => s.id), read);
      toast(read ? "Tous les chapitres sont marqués comme lus" : "Tous les chapitres sont marqués comme non lus");
      renderCourses();
      const b = document.getElementById("markAll");
      if (b) b.focus({ preventScroll: true });
    });
  }

  let readerCleanup = null;
  const manualUnread = new Set(); // chapitres remis à « non lu » à la main pendant la visite
  function renderReader(id) {
    const s = sectionById[id];
    if (!s) return go("#/cours");
    const mod = moduleById[s.moduleId];
    const idx = D.sections.indexOf(s);
    const prev = D.sections[idx - 1], next = D.sections[idx + 1];
    const nq = (questionsBySection[s.id] || []).length;
    const theme = themeBySection[s.id];
    const read = storage.isSectionViewed(s.id);
    // Titres h3 → ancres et sommaire
    const tmp = document.createElement("div");
    tmp.innerHTML = s.html;
    const toc = [];
    tmp.querySelectorAll("h3").forEach((h, i) => { h.id = `${s.id}-${i + 1}`; toc.push({ id: h.id, text: h.textContent }); });
    tmp.querySelectorAll("table").forEach((t) => { if (!t.parentElement.classList.contains("table-wrap")) { const w = document.createElement("div"); w.className = "table-wrap"; t.replaceWith(w); w.appendChild(t); } });
    setView(`
      <div class="reader">
        <aside class="reader-aside" aria-label="Sommaire du chapitre">
          <div class="toc-title">Dans ce chapitre</div>
          <ul class="toc">${toc.map((t) => `<li><a href="#/cours/${s.id}" data-anchor="${t.id}">${esc(t.text)}</a></li>`).join("")}</ul>
          <button class="btn btn-ghost btn-sm btn-block js-toggle-read" type="button" style="margin-bottom:8px">${read ? "Marquer comme non lu" : `${I.check} Marquer comme lu`}</button>
          ${theme ? `<a class="btn btn-lagoon btn-sm btn-block" href="#/quiz/theme/${theme.id}">${I.doc} QCM du cours (${theme.questionIds.length})</a>` : ""}
          ${nq ? `<a class="btn btn-ghost btn-sm btn-block" style="margin-top:8px" href="#/quiz/chapitre/${s.id}">${I.shuffle} Série aléatoire du chapitre</a>` : ""}
        </aside>
        <article>
          <header class="lesson-head">
            <div class="crumbs"><a href="#/cours">Cours</a><span>/</span><span>${esc(mod.title)}</span></div>
            <h1>${esc(s.title)}</h1>
            <p class="subtitle">${esc(s.subtitle || "")}</p>
            <div class="lesson-meta"><span class="chip">Chapitre ${s.number}</span><span class="chip">${s.minutes} min</span>${nq ? `<span class="chip is-lagoon">${nq} questions</span>` : ""}${read ? `<span class="chip is-ok">Lu</span>` : ""}<button class="btn btn-ghost btn-sm js-toggle-read only-narrow" type="button">${read ? "Marquer comme non lu" : `${I.check} Marquer comme lu`}</button></div>
          </header>
          ${s.keyRules && s.keyRules.length ? `<section class="keyrules"><h2>L’essentiel</h2><ol>${s.keyRules.map((k) => `<li><span>${esc(k)}</span></li>`).join("")}</ol></section>` : ""}
          <div class="lesson">${tmp.innerHTML}</div>
          <section class="panel lesson-end" id="lessonEnd">
            <div><h3>${read ? "Chapitre lu" : "Fin du chapitre"}</h3><p>${nq ? (theme ? `Vérifiez vos acquis : le QCM du cours (${theme.questionIds.length} questions) ou une série aléatoire parmi les ${nq} questions du chapitre.` : `Vérifiez vos acquis avec une série aléatoire parmi les ${nq} questions du chapitre.`) : "Passez au chapitre suivant."}</p></div>
            <div class="hero-actions">
              <button class="btn btn-ghost js-toggle-read" type="button" id="toggleRead">${read ? "Marquer comme non lu" : `${I.check} Marquer comme lu`}</button>
              ${theme ? `<a class="btn btn-primary" href="#/quiz/theme/${theme.id}">${I.doc} QCM du cours</a>` : ""}
              ${nq ? `<a class="btn ${theme ? "btn-ghost" : "btn-primary"}" href="#/quiz/chapitre/${s.id}">${I.shuffle} Série aléatoire du chapitre</a>` : (next ? `<a class="btn btn-primary" href="#/cours/${next.id}">Chapitre suivant ${I.arrow}</a>` : "")}
            </div>
            <p class="lesson-report">Une erreur ou une imprécision dans ce chapitre ? ${reportLink(reportUrl(`Erreur dans le chapitre ${s.number} — ${s.title}`, [`**Chapitre ${s.number}** : ${s.title}`]), "Signalez-la")}</p>
          </section>
          <nav class="reader-nav" aria-label="Chapitres">
            ${prev ? `<a class="panel" href="#/cours/${prev.id}"><small>← Précédent</small><b>${prev.number} · ${esc(prev.title)}</b></a>` : "<span></span>"}
            ${next ? `<a class="panel next" href="#/cours/${next.id}"><small>Suivant →</small><b>${next.number} · ${esc(next.title)}</b></a>` : "<span></span>"}
          </nav>
        </article>
      </div>
    `, { title: s.title, nav: "cours" });

    view.querySelectorAll(".js-toggle-read").forEach((btn) => btn.addEventListener("click", (ev) => {
      const where = ev.currentTarget.closest("aside") ? "aside" : ev.currentTarget.closest(".lesson-meta") ? "meta" : "end";
      if (storage.isSectionViewed(s.id)) { storage.unmarkSectionViewed(s.id); manualUnread.add(s.id); toast("Chapitre marqué comme non lu"); }
      else { storage.markSectionViewed(s.id); manualUnread.delete(s.id); toast("Chapitre marqué comme lu"); }
      const y = window.scrollY;
      if (readerCleanup) { readerCleanup(); readerCleanup = null; }
      renderReader(id);
      window.scrollTo(0, y);
      const sel = where === "aside" ? "aside .js-toggle-read" : where === "meta" ? ".lesson-meta .js-toggle-read" : "#toggleRead";
      const tr = view.querySelector(sel);
      if (tr) tr.focus({ preventScroll: true });
    }));
    view.querySelectorAll("[data-anchor]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const t = document.getElementById(a.dataset.anchor);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    // Barre de lecture, sommaire actif, lecture automatique en fin de chapitre
    const bar = document.getElementById("readerProgress");
    bar.hidden = false;
    const heads = toc.map((t) => document.getElementById(t.id));
    const links = [...view.querySelectorAll("[data-anchor]")];
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 100) + "%";
      let cur = 0;
      heads.forEach((el, i) => { if (el && el.getBoundingClientRect().top < 140) cur = i; });
      links.forEach((l, i) => l.classList.toggle("is-active", i === cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting) && !storage.isSectionViewed(s.id) && !manualUnread.has(s.id)) {
          storage.markSectionViewed(s.id);
          toast("Chapitre lu — bravo !");
          const h3 = view.querySelector(".lesson-end h3");
          if (h3) h3.textContent = "Chapitre lu";
          const tr = document.getElementById("toggleRead");
          if (tr) tr.textContent = "Marquer comme non lu";
        }
      }, { threshold: 0.6 });
      io.observe(document.getElementById("lessonEnd"));
    }
    readerCleanup = () => { window.removeEventListener("scroll", onScroll); if (io) io.disconnect(); bar.hidden = true; bar.style.width = "0"; };
  }

  function renderTraining() {
    const mods = D.modules.filter((m) => !m.bonus);
    const mistakes = storage.getMistakes(pool).length;
    const due = fsrs.countDue(studyPool);
    const fsrsM = fsrs.getGlobalFSRSMastery(studyPool);
    const tests = D.sets.filter((x) => x.kind === "test");
    const series = D.sets.filter((x) => x.kind === "serie");
    const historyBest = (title) => {
      const h = storage.profileData.quizHistory.filter((x) => x.title === title);
      if (!h.length) return "";
      const best = h.reduce((a, b) => (b.score / b.total > a.score / a.total ? b : a));
      return `<span class="chip ${best.passed ? "is-ok" : "is-bad"}">Meilleur : ${best.score}/${best.total}</span>`;
    };
    const setRow = (x, href) => `<div class="list-row">
        <div><h4>${esc(x.title)}</h4><p>${esc(x.description)}</p></div>
        <div class="lr-side">${historyBest(x.title)}<a class="btn btn-ghost btn-sm" href="${href}">${I.play} Lancer</a></div>
      </div>`;
    const chapterRows = studySections.map((s) => {
      const st = sectionStats(s.id);
      const n = (questionsBySection[s.id] || []).length;
      const theme = themeBySection[s.id];
      return `<div class="list-row">
        <div><h4>${s.number} · ${esc(s.title)}</h4><p>${theme ? `QCM du cours : ${theme.questionIds.length} questions · ` : ""}${n} questions au total · ${st.mastered}/${st.total} notions acquises</p></div>
        <div class="lr-side lr-grid"><span class="bar" aria-hidden="true"><i style="width:${st.pct}%"></i></span>
          ${theme ? `<a class="btn btn-ghost btn-sm" href="#/quiz/theme/${theme.id}" aria-label="QCM du cours ${esc(s.title)} (${theme.questionIds.length} questions dans l’ordre)">${I.doc} QCM du cours</a>` : `<span class="lr-gap"></span>`}
          <a class="btn btn-ghost btn-sm" href="#/quiz/chapitre/${s.id}" aria-label="Série aléatoire ${esc(s.title)}">${I.shuffle} Aléatoire</a></div>
      </div>`;
    }).join("");
    const cumulRows = mods.map((m, i) => {
      const scope = mods.slice(0, i + 1);
      const n = scope.flatMap((mm) => mm.sections.flatMap((id) => poolBySection[id] || [])).length;
      return `<div class="list-row">
        <div><h4>${i === 0 ? esc(m.title) : (m.number === 2 ? "Modules 1 et 2" : `Modules 1 à ${m.number}`)}</h4><p>20 questions tirées au sort parmi ${n} · ${scope.map((x) => esc(x.shortTitle)).join(", ")}</p></div>
        <div class="lr-side"><a class="btn btn-ghost btn-sm" href="#/quiz/cumul/${m.id}">${I.play} Lancer</a></div>
      </div>`;
    }).join("");

    setView(`
      <header class="page-head">
        <span class="eyebrow">Entraînement</span>
        <h1>Hissez le niveau</h1>
        <p>Des QCM fixes issus du cours, des séries tirées au sort pour varier, la révision espacée pour ancrer, et l’examen blanc pour se mettre en conditions réelles. ${studyPool.length} questions, chaque notion déclinée en au moins 5 variantes.</p>
      </header>

      <section class="panel exam-hero">
        <div class="eh-body">
          <span class="eyebrow">Conditions d’examen DPAM</span>
          <h2>Examen blanc</h2>
          <p>${D.exam.questions} questions tirées au sort sur l’ensemble du programme, tous chapitres représentés, sans questions redondantes. Chronomètre global, navigation libre entre les questions, correction détaillée à la fin.</p>
          <div class="eh-rules">
            <div><b>${D.exam.questions}</b><span>Questions</span></div>
            <div><b>${D.exam.minutes}′</b><span>Durée</span></div>
            <div><b>≤ ${D.exam.maxErrors}</b><span>Erreurs</span></div>
          </div>
          <div class="hero-actions"><a class="btn btn-accent btn-lg" href="#/quiz/examen">${I.clock} Commencer l’examen blanc</a></div>
        </div>
        <div class="eh-art">${examArtSVG()}</div>
      </section>

      <div class="grid grid-3" style="margin-top:16px">
        <a class="panel tile is-feature" href="#/quiz/revision">
          <span class="tile-icon">${I.brain}</span>
          <h3>Révision intelligente</h3>
          <p>La répétition espacée vous repose chaque question juste avant que vous ne l’oubliiez. Idéal 10 minutes par jour.</p>
          <div class="tile-meta"><span class="chip">${due ? plural(due, "notion à revoir", "notions à revoir") : "rien en retard"}</span><span class="chip">${fsrsM.pct} % ancré</span></div>
        </a>
        <a class="panel tile" href="#/quiz/aleatoire">
          <span class="tile-icon">${I.shuffle}</span>
          <h3>Série aléatoire</h3>
          <p>20 questions tirées sur tout le programme, tous les chapitres représentés, avec correction immédiate.</p>
          <div class="tile-meta"><span class="chip is-lagoon">${studyPool.length} questions</span></div>
        </a>
        ${mistakes ? `<a class="panel tile" href="#/quiz/erreurs">` : `<div class="panel tile is-disabled">`}
          <span class="tile-icon">${I.redo}</span>
          <h3>Mes erreurs</h3>
          <p>${mistakes ? "Les questions manquées lors de leur dernière tentative, jusqu’à ce qu’elles soient justes." : "Rien à rattraper pour l’instant : les questions manquées s’accumuleront ici."}</p>
          <div class="tile-meta"><span class="chip ${mistakes ? "is-bad" : ""}">${plural(mistakes, "question", "questions")}</span></div>
        ${mistakes ? "</a>" : "</div>"}
      </div>

      <div class="section-title"><h2>Questionnaires types</h2><p>${series.length} questionnaires fixes de 20 questions, en conditions d’examen.</p></div>
      <div class="panel list-rows">${series.map((x) => setRow(x, `#/quiz/serie/${x.id}`)).join("")}</div>

      ${categories.length ? `<div class="section-title"><h2>Par thème</h2><p>Jusqu’à 20 questions tirées au sort dans un seul thème, en variant les notions.</p></div>
      <div class="cat-grid">${categories.filter(visibleCategory).map((c) => {
        const qs = questionsByCategory[c.id];
        const st = storage.getMastery(qs);
        return `<a class="panel cat-card" href="#/quiz/categorie/${c.id}" aria-label="${esc(c.label)} : jusqu’à ${reachableSize(c.id, qs)} questions, ${st.mastered} notions acquises sur ${st.total}">
          <span class="ring" style="--p:${st.pct}" aria-hidden="true"><span>${st.pct}</span></span>
          <span><b>${esc(c.label)}</b><small><span class="nw">${reachableSize(c.id, qs)} questions</span> · <span class="nw">${st.mastered}/${st.total} notions</span></small></span>
        </a>`;
      }).join("")}</div>` : ""}

      <div class="section-title"><h2>Par chapitre</h2><p>Le QCM du cours (questions fixes) ou une série tirée au sort, avec correction immédiate.</p></div>
      <div class="panel list-rows">${chapterRows}</div>

      <div class="section-title"><h2>Révisions cumulées</h2><p>Ce que vous avez appris jusqu’ici, tiré au sort et mélangé.</p></div>
      <div class="panel list-rows">${cumulRows}</div>

      <div class="section-title"><h2>Tests de fin de module</h2><p>Des tests fixes de 15 questions, avec correction à la fin.</p></div>
      <div class="panel list-rows">${tests.map((x) => setRow(x, `#/quiz/test/${x.id}`)).join("")}</div>
    `, { title: "Entraînement", nav: "entrainement" });
  }

  function renderProgress() {
    const o = overview();
    const info = storage.getActiveProfileInfo();
    const profiles = storage.getProfilesList();
    const hist = storage.profileData.quizHistory.slice(0, 12);
    const rows = studySections.map((s) => {
      const st = sectionStats(s.id);
      const read = storage.isSectionViewed(s.id);
      const status = st.pct >= 80 ? `<span class="chip is-ok">Acquis</span>` : st.attempted ? `<span class="chip is-warn">En cours</span>` : `<span class="chip">À découvrir</span>`;
      return `<tr><td><a href="#/cours/${s.id}"><strong>${s.number}</strong> ${esc(s.title)}</a>${read ? "" : ` <span class="muted">· non lu</span>`}</td>
        <td><span class="bar"><i style="width:${st.pct}%"></i></span> <span class="mono muted" style="font-size:.8rem">${st.mastered}/${st.total}</span></td>
        <td class="mono col-acc">${st.attempted ? st.accuracy + " %" : "—"}</td><td class="col-status">${status}</td>
        <td><a class="btn btn-quiet btn-sm" href="#/quiz/chapitre/${s.id}">Réviser</a></td></tr>`;
    }).join("");
    const histHtml = hist.length ? hist.map((h) => {
      const d = new Date(h.date);
      return `<div class="history-row"><div><strong>${esc(h.title)}</strong><small>${d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" })} · ${d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}</small></div>
        <span class="chip chip-mode">${h.mode === "exam" ? "Examen" : "Entraînement"}</span><span class="chip ${h.passed ? "is-ok" : "is-bad"}">${h.score}/${h.total}</span></div>`;
    }).join("") : `<div class="empty">${I.flag}<p>Aucune série terminée pour l’instant.</p></div>`;

    setView(`
      <header class="page-head">
        <span class="eyebrow">Carnet de bord</span>
        <h1>Progrès de ${esc(info.name)}</h1>
        <p>Votre progression est enregistrée uniquement sur cet appareil. Exportez une sauvegarde pour la retrouver ailleurs.</p>
      </header>

      <section class="panel readiness">
        <div class="dial" style="--p:${o.readiness};--c:var(--lagoon)"><div><b>${o.readiness}%</b><span>PRÉPARATION</span></div></div>
        <div>
          <h2>${o.readiness >= 80 ? "Prêt à appareiller" : o.readiness >= 50 ? "Bonne route" : "Cap sur l’apprentissage"}</h2>
          <p>L’indice combine les notions acquises (50 %), votre taux de réussite (30 %, pris en compte progressivement jusqu’à 100 réponses) et les chapitres lus (20 %). Une notion est acquise après deux bonnes réponses consécutives, sur n’importe laquelle de ses questions, données à au moins 12 heures d’intervalle. ${o.readiness >= 80 ? "Enchaînez les examens blancs pour confirmer." : "Lisez les chapitres et entraînez-vous régulièrement."}</p>
          <div class="hero-facts">
            <div class="fact"><b>${o.mastered}</b><span>notions / ${o.concepts}</span></div>
            <div class="fact"><b>${o.answers ? o.accuracy + "%" : "—"}</b><span>réussite</span></div>
            <div class="fact"><b>${o.answers}</b><span>réponses</span></div>
            <div class="fact"><b>${o.quizzes}</b><span>séries</span></div>
          </div>
        </div>
      </section>

      <div class="section-title"><h2>Par chapitre</h2></div>
      <div class="table-wrap"><table class="data-table mastery-table"><thead><tr><th>Chapitre</th><th>Notions acquises</th><th class="col-acc">Précision</th><th class="col-status">Statut</th><th><span class="sr-only">Action</span></th></tr></thead><tbody>${rows}</tbody></table></div>

      <div class="grid grid-2" style="margin-top:40px">
        <section class="panel"><div class="pad" style="padding-bottom:6px"><h3>Historique</h3><p>Vos dernières séries.</p></div>${histHtml}</section>
        <section class="panel pad">
          <h3>Profils</h3><p>Plusieurs candidats sur le même appareil ? Chacun son carnet.</p>
          ${profiles.map((p) => `<div class="profile-row"><span class="avatar">${esc(p.name.charAt(0).toUpperCase())}</span><span class="p-name">${esc(p.name)}${p.id === info.id ? ` <span class="chip is-lagoon">actif</span>` : ""}</span>
            ${p.id !== info.id ? `<button class="btn btn-ghost btn-sm" data-switch="${p.id}">Utiliser</button>` : ""}
            <button class="btn btn-quiet btn-sm" data-rename="${p.id}">Renommer</button>
            ${profiles.length > 1 ? `<button class="btn btn-quiet btn-sm" data-delete="${p.id}" style="color:var(--bad)">Supprimer</button>` : ""}</div>`).join("")}
          <button class="btn btn-ghost btn-sm" style="margin-top:12px" id="newProfile">+ Nouveau profil</button>
        </section>
      </div>

      <div class="grid grid-2" style="margin-top:16px">
        <section class="panel pad">
          <h3>Sons et vibrations</h3>
          <div class="setting"><span>Effets sonores<small>Bonne / mauvaise réponse, fin de série</small></span><label class="switch"><input type="checkbox" id="optSound" aria-label="Effets sonores" ${sound.enabled ? "checked" : ""}><span></span></label></div>
          <div class="setting"><span>Volume</span><input type="range" id="optVolume" min="0" max="1" step="0.05" value="${sound.volume}" aria-label="Volume"></div>
          <div class="setting"><span>Vibrations<small>Sur smartphone compatible</small></span><label class="switch"><input type="checkbox" id="optHaptics" aria-label="Vibrations" ${sound.hapticsEnabled ? "checked" : ""}><span></span></label></div>
          <div class="setting"><span>Tester la corne de brume<small>Un son prolongé, deux sons brefs</small></span><button class="btn btn-ghost btn-sm" id="testHorn">${I.play} Écouter</button></div>
        </section>
        <section class="panel pad">
          <h3>Sauvegarde</h3><p>Exportez vos profils et votre progression dans un fichier, puis importez-le sur un autre appareil.</p>
          <div class="hero-actions">
            <button class="btn btn-ghost btn-sm" id="exportBtn">${I.download} Exporter</button>
            <label class="btn btn-ghost btn-sm">${I.upload} Importer<input type="file" accept="application/json,.json" id="importInput" hidden></label>
          </div>
          <div class="danger-zone"><small>Effacer la progression de « ${esc(info.name)} » sur cet appareil.</small><button class="btn btn-danger btn-sm" id="resetBtn">Réinitialiser</button></div>
        </section>
      </div>
    `, { title: "Progrès", nav: "progres" });

    const $ = (sel) => view.querySelector(sel);
    $("#optSound").onchange = (e) => sound.setEnabled(e.target.checked);
    $("#optVolume").oninput = (e) => sound.setVolume(e.target.value);
    $("#optHaptics").onchange = (e) => sound.setHapticsEnabled(e.target.checked);
    $("#testHorn").onclick = () => sound.playPattern("-..");
    $("#newProfile").onclick = async () => {
      const name = await promptDialog({ title: "Nouveau profil", text: "Prénom du candidat ou de la candidate :", ok: "Créer" });
      if (name) { storage.createProfile(name); toast(`Profil « ${name} » créé`); renderProgress(); }
    };
    view.querySelectorAll("[data-switch]").forEach((b) => b.onclick = () => { storage.switchProfile(b.dataset.switch); migrateToConcepts(); toast("Profil changé"); renderProgress(); });
    view.querySelectorAll("[data-rename]").forEach((b) => b.onclick = async () => {
      const p = storage.getProfilesList().find((x) => x.id === b.dataset.rename);
      const name = await promptDialog({ title: "Renommer le profil", value: p ? p.name : "", ok: "Renommer" });
      if (name) { storage.renameProfile(b.dataset.rename, name); renderProgress(); }
    });
    view.querySelectorAll("[data-delete]").forEach((b) => b.onclick = async () => {
      const p = storage.getProfilesList().find((x) => x.id === b.dataset.delete);
      if (await confirmDialog({ title: `Supprimer le profil « ${p ? p.name : ""} » ?`, text: "Toute sa progression sera définitivement effacée de cet appareil.", ok: "Supprimer", danger: true })) {
        storage.deleteProfile(b.dataset.delete); renderProgress();
      }
    });
    $("#exportBtn").onclick = () => {
      const blob = new Blob([storage.exportJSON()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cap-cotier-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast("Sauvegarde téléchargée");
    };
    $("#importInput").onchange = (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = async () => {
        e.target.value = "";
        const parsed = storage.parseBackup(String(r.result));
        if (!parsed) { toast("Ce fichier n’est pas une sauvegarde Cap Côtier valide"); return; }
        const names = parsed.profiles.map((x) => x.name).join(", ");
        const ok = await confirmDialog({ title: "Importer la sauvegarde ?", text: `${plural(parsed.profiles.length, "profil", "profils")} : ${names}. Un profil déjà présent sur cet appareil avec le même identifiant sera remplacé ; les autres sont conservés.`, ok: "Importer" });
        if (!ok) return;
        const n = storage.importBackup(parsed);
        migrateToConcepts();
        toast(`Sauvegarde importée (${plural(n, "profil", "profils")})`);
        renderProgress();
      };
      r.readAsText(f);
    };
    $("#resetBtn").onclick = async () => {
      if (await confirmDialog({ title: `Réinitialiser « ${info.name} » ?`, text: "Chapitres lus, réponses et historique de ce profil seront effacés.", ok: "Réinitialiser", danger: true })) {
        storage.resetCurrentProfile(); toast("Progression réinitialisée"); renderProgress();
      }
    };
  }

  function renderAbout() {
    setView(`
      <header class="page-head">
        <span class="eyebrow">À propos</span>
        <h1>Crédits &amp; avertissement</h1>
        <p>Cap Côtier est un outil de révision gratuit et indépendant pour le permis côtier de Polynésie française.</p>
      </header>
      <section class="panel credit-card">
        <span class="cc-mark">${I.wave}</span>
        <div><h3>Merci à Fluid Tahiti</h3>
        <p>Cap Côtier s’appuie notamment sur les supports pédagogiques (cours, QCM et questionnaires types) de <a href="https://www.fluid-tahiti.com/" target="_blank" rel="noopener">Fluid Tahiti</a>, centre de plongée de la Marina Taina (Punaauia) qui forme aussi au permis bateau. Māuruuru roa !</p>
        <p>Ces supports ont été adaptés et enrichis : questions supplémentaires, illustrations redessinées, explications détaillées, spécificités polynésiennes vérifiées auprès des textes de la DPAM. Les éventuelles erreurs ou imprécisions relèvent de ce travail, et non de Fluid Tahiti.</p></div>
      </section>
      <div class="prose">
        <h2>Spécificités polynésiennes</h2>
        <p>En Polynésie française, le permis côtier est délivré par la Direction polynésienne des affaires maritimes (DPAM). L’essentiel des règles est identique à la métropole (RIPAM, balisage AISM région A), mais certains points diffèrent : navigation limitée à 5 milles d’un abri avec le permis côtier (6 en métropole), épreuve théorique de 20 questions en 15 minutes avec 3 erreurs maximum, alerte des secours auprès du JRCC Tahiti (VHF canal 16 ou téléphone 16), armement de sécurité propre au Fenua. Ces différences sont signalées dans les cours par un encadré doré.</p>
        <h2>Avertissement</h2>
        <p>Cette application est un support d’entraînement : elle ne remplace ni la formation dispensée par un bateau-école déclaré, ni les textes en vigueur. La réglementation peut évoluer ; en cas de doute, référez-vous à la DPAM (<a href="https://www.service-public.pf/dpam/" target="_blank" rel="noopener">service-public.pf/dpam</a>) et au RIPAM.</p>
        <h2>La banque de questions</h2>
        <p>Les questions sont regroupées en <strong>notions</strong> : une notion correspond à une règle précise (« cardinale Ouest : de quel côté passer », « trois sons brefs », « vitesse dans la bande des 300 m »…). <strong>Chaque notion est déclinée en au moins 5 questions différentes</strong> — autre cap, autre illustration, question posée dans l’autre sens — afin que les séries aléatoires ne se répètent pas. Les tirages privilégient les questions que vous n’avez jamais vues ou le moins souvent vues.</p>
        <p>Une notion est considérée comme acquise après deux bonnes réponses consécutives, sur n’importe laquelle de ses questions, données à au moins 12 heures d’intervalle. La révision intelligente vous la repropose ensuite à intervalles croissants, en changeant de variante.</p>
        <h2>Signaler une erreur</h2>
        <p>Une réponse fausse, une question ambiguë, une coquille dans un cours ? Chaque correction de question et chaque fin de chapitre comporte un lien « Signaler une erreur » qui ouvre un signalement pré-rempli sur GitHub (un compte GitHub gratuit est nécessaire). Indiquez si possible votre source (RIPAM, mémento, texte de la DPAM) : chaque signalement est relu.</p>
        <p>${reportLink(reportUrl("Erreur repérée"))}</p>
        <h2>Fonctionnement</h2>
        <p>Tout fonctionne dans votre navigateur, sans compte ni serveur : votre progression reste sur votre appareil. De nombreuses illustrations (balises, feux, marques, pavillons, signaux) sont dessinées en vectoriel ; les QCM du cours conservent leurs dessins d’origine. Les signaux sonores sont synthétisés.</p>
        <p class="hero-actions" style="margin-top:20px"><a class="btn btn-primary" href="#/cours">Voir les cours ${I.arrow}</a></p>
      </div>
    `, { title: "Crédits", nav: "" });
  }

  // ------------------------------------------------------------------
  // Lancement des séries
  // ------------------------------------------------------------------
  /**
   * Ordre de priorité : d’abord les questions jamais posées, puis les moins souvent posées
   * (à égalité, au hasard). Refaire une série plusieurs fois fait défiler toute la banque.
   */
  function byFreshness(list) {
    const stats = storage.profileData.questionStats || {};
    return list.map((q) => ({ q, k: ((stats[q.id] && stats[q.id].attempts) || 0) + Math.random() * 0.9 }))
      .sort((a, b) => a.k - b.k).map((x) => x.q);
  }

  /** Nombre de questions demandé pour une série pratique : 20 au plus, et pas plus de 2 variantes par notion. */
  const seriesSize = (qs) => Math.min(20, qs.length, 2 * new Set(qs.map(conceptOf)).size);
  /** Taille réellement atteignable (les quasi-doublons sont exclus) : maximum de quelques tirages, mis en cache. */
  const seriesReach = {};
  function reachableSize(key, qs) {
    if (seriesReach[key] == null) {
      let best = 0;
      for (let i = 0; i < 6; i++) best = Math.max(best, pickVaried(qs, seriesSize(qs), conceptOf).length);
      seriesReach[key] = best;
    }
    return seriesReach[key];
  }

  /**
   * Tirage varié.
   * - quotas équilibrés entre groupes (chapitres par défaut) ;
   * - une seule question par notion tant que possible, puis au plus `maxPerConcept` variantes ;
   * - jamais deux quasi-doublons (listes « near » calculées à la génération : même texte et
   *   même illustration ; deux cardinales différentes ne sont pas des doublons) ;
   * - priorité aux questions les moins souvent posées.
   * `ctx` permet de partager les exclusions entre plusieurs tirages (quotas par module).
   */
  function pickVaried(cands, n, groupOf = (q) => q.sectionId, { maxPerConcept = 2, ctx = null } = {}) {
    const c = ctx || { ids: new Set(), near: new Set(), concepts: {} };
    const groups = {};
    byFreshness(cands).forEach((q) => { const g = groupOf(q); (groups[g] = groups[g] || []).push(q); });
    const keys = shuffle(Object.keys(groups));
    const quota = {};
    const base = Math.floor(n / keys.length);
    keys.forEach((k) => { quota[k] = Math.min(base, groups[k].length); });
    let rest = n - keys.reduce((acc, k) => acc + quota[k], 0);
    while (rest > 0) {
      const open = keys.filter((k) => quota[k] < groups[k].length);
      if (!open.length) break;
      const total = open.reduce((acc, k) => acc + groups[k].length, 0);
      let r = Math.random() * total;
      const k = open.find((x) => (r -= groups[x].length) < 0) || open[0];
      quota[k] += 1;
      rest -= 1;
    }
    const chosen = [], count = {};
    const fresh = (q) => !c.ids.has(q.id) && !c.near.has(q.id);
    const uses = (q) => c.concepts[conceptOf(q)] || 0;
    const strict = (q) => fresh(q) && uses(q) === 0;
    const capped = (q) => fresh(q) && uses(q) < maxPerConcept;
    const take = (q) => {
      chosen.push(q); c.ids.add(q.id);
      (q.near || []).forEach((x) => c.near.add(x));
      c.concepts[conceptOf(q)] = uses(q) + 1;
      const g = groupOf(q); count[g] = (count[g] || 0) + 1;
    };
    let progress = true;
    while (chosen.length < n && progress) {
      progress = false;
      for (const k of keys) {
        if (chosen.length >= n) break;
        if ((count[k] || 0) >= quota[k]) continue;
        const q = groups[k].find(strict);
        if (q) { take(q); progress = true; }
      }
    }
    const ordered = byFreshness(cands);
    for (const test of [strict, capped]) {
      for (const q of ordered) { if (chosen.length >= n) break; if (test(q)) take(q); }
    }
    return shuffle(chosen);
  }

  /** Examen blanc : quotas par module (D.exam.distribution), puis répartition par chapitre. */
  function pickExam() {
    const ctx = { ids: new Set(), near: new Set(), concepts: {} };
    const mods = D.modules.filter((m) => !m.bonus);
    const dist = D.exam.distribution || {};
    let out = [];
    mods.forEach((m) => {
      const qs = m.sections.flatMap((sid) => poolBySection[sid] || []);
      out = out.concat(pickVaried(qs, dist[m.id] || Math.round(D.exam.questions / mods.length), (q) => q.sectionId, { maxPerConcept: 1, ctx }));
    });
    if (out.length < D.exam.questions) out = out.concat(pickVaried(studyPool, D.exam.questions - out.length, (q) => q.sectionId, { maxPerConcept: 1, ctx }));
    return shuffle(out).slice(0, D.exam.questions);
  }

  function startQuiz(kind, id) {
    let cfg = null;
    const exam = { mode: "exam", timeLimit: D.exam.minutes * 60, maxErrors: D.exam.maxErrors };
    if (kind === "chapitre") {
      const s = sectionById[id];
      const qs = s && questionsBySection[s.id];
      if (!qs || !qs.length) return go("#/entrainement");
      cfg = { title: `Ch. ${s.number} · ${s.shortTitle || s.title} — série aléatoire`, mode: "practice", questions: pickVaried(qs, seriesSize(qs), conceptOf), shuffle: false, backHref: `#/cours/${s.id}`, backLabel: "Retour au chapitre" };
      cfg.onRetry = () => startQuiz("chapitre", id);
    } else if (kind === "theme") {
      const set = D.sets.find((x) => x.id === id && x.kind === "theme");
      if (!set) return go("#/entrainement");
      cfg = { title: set.title, mode: "practice", questions: set.questionIds.map((qid) => questionById[qid]).filter(Boolean), shuffle: false, backHref: `#/cours/${set.sectionId}`, backLabel: "Retour au chapitre" };
    } else if (kind === "categorie") {
      const cat = categoryById[id];
      if (!cat || !visibleCategory(cat)) return go("#/entrainement");
      const qs = questionsByCategory[cat.id];
      const target = reachableSize(cat.id, qs);
      let drawn = pickVaried(qs, seriesSize(qs), conceptOf);
      for (let i = 0; i < 8 && drawn.length < target; i++) drawn = pickVaried(qs, seriesSize(qs), conceptOf);
      cfg = { title: `Thème · ${cat.label}`, categoryLabel: cat.label, mode: "practice", questions: drawn, shuffle: false };
      cfg.onRetry = () => startQuiz("categorie", id);
    } else if (kind === "aleatoire") {
      cfg = { title: "Série aléatoire — tout le programme", mode: "practice", questions: pickVaried(studyPool, 20, (q) => q.sectionId, { maxPerConcept: 1 }), shuffle: false };
      cfg.onRetry = () => startQuiz("aleatoire");
    } else if (kind === "cumul") {
      const mods = D.modules.filter((m) => !m.bonus);
      const k = mods.findIndex((m) => m.id === id);
      if (k < 0) return go("#/entrainement");
      const qs = mods.slice(0, k + 1).flatMap((m) => m.sections.flatMap((sid) => poolBySection[sid] || []));
      cfg = { title: k === 0 ? `Révision · ${mods[0].shortTitle}` : `Révision cumulée · modules 1 ${k === 1 ? "et" : "à"} ${mods[k].number}`, mode: "practice", questions: pickVaried(qs, 20, (q) => q.sectionId, { maxPerConcept: 1 }), shuffle: false };
      cfg.onRetry = () => startQuiz("cumul", id);
    } else if (kind === "test" || kind === "serie") {
      const set = D.sets.find((x) => x.id === id && x.kind === kind);
      if (!set) return go("#/entrainement");
      const qs = set.questionIds.map((qid) => questionById[qid]).filter(Boolean);
      cfg = Object.assign({ title: set.title, questions: qs, shuffle: false }, kind === "serie" ? exam : { mode: "exam", maxErrors: set.maxErrors != null ? set.maxErrors : null, passPct: 80 });
      cfg.resumeKey = location.hash;
    } else if (kind === "examen") {
      cfg = Object.assign({ title: "Examen blanc", questions: pickExam(), shuffle: false }, exam);
      cfg.resumeKey = location.hash;
      cfg.onRetry = () => startQuiz("examen");
    } else if (kind === "revision") {
      const qs = fsrs.generateRound(studyPool, 20);
      cfg = { title: "Révision intelligente", mode: "practice", questions: qs, shuffle: true };
      cfg.onRetry = () => startQuiz("revision");
    } else if (kind === "erreurs") {
      const qs = storage.getMistakes(pool);
      if (!qs.length) { toast("Aucune erreur à revoir"); return go("#/entrainement"); }
      cfg = { title: "Mes erreurs", mode: "practice", questions: qs, shuffle: true };
      cfg.onRetry = () => startQuiz("erreurs");
    }
    if (!cfg || !cfg.questions.length) return go("#/entrainement");
    // Retour vers la page d’où l’on vient (sauf pour les QCM lancés depuis un chapitre)
    if (lastPage && (!cfg.backHref || !lastPage.startsWith("#/cours/"))) {
      cfg.backHref = lastPage;
      cfg.backLabel = lastPage.startsWith("#/cours/") ? "Retour au chapitre" : lastPage === "#/" || lastPage === "" ? "Retour à l’accueil" : lastPage.startsWith("#/progres") ? "Retour aux progrès" : "Retour à l’entraînement";
    }
    cfg.backHref = cfg.backHref || "#/entrainement";
    let resume = null;
    if (cfg.resumeKey) {
      const saved = window.QuizEngine.savedExam(cfg.resumeKey);
      const qs = saved && saved.ids.map((qid) => questionById[qid]);
      if (qs && qs.every(Boolean)) {
        resume = { questions: qs, answers: saved.answers, flagged: saved.flagged, index: saved.index, startedAt: saved.startedAt, deadline: saved.deadline };
        toast("Examen en cours repris");
      }
    }
    document.title = `${cfg.title} — Permis côtier Polynésie · Cap Côtier`;
    document.querySelectorAll("[data-nav]").forEach((a) => (a.dataset.nav === "entrainement" ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
    quiz.start(view, cfg, resume);
  }

  // ------------------------------------------------------------------
  // Routeur
  // ------------------------------------------------------------------
  function go(hash) { if (location.hash !== hash) location.hash = hash; else route(); }

  let lastPage = "";       // dernière page hors QCM
  let currentHash = location.hash;
  let firstRoute = true;
  let restoring = false;

  let guardOpen = false;
  let skipGuard = false;
  async function onHashChange() {
    if (restoring) { restoring = false; return; }
    if (guardOpen) { history.pushState(null, "", currentHash); return; }
    if (skipGuard) { skipGuard = false; route(); return; }
    if (quiz.atRisk) {
      const target = location.hash;
      // On revient d’abord sur l’examen le temps de demander confirmation
      history.pushState(null, "", currentHash);
      guardOpen = true;
      const ok = await confirm({ title: "Abandonner l’examen ?", text: "L’examen en cours sera perdu si vous quittez cette page.", ok: "Abandonner", cancel: "Continuer l’examen", danger: true });
      guardOpen = false;
      if (!ok) return;
      window.QuizEngine.clearSavedExam();
      quiz.stop();
      // Revenir d'un pas : on retombe exactement sur la page demandée, sans entrée en double
      skipGuard = true;
      history.back();
      return;
    }
    route();
  }

  window.addEventListener("beforeunload", (e) => {
    if (quiz.atRisk) { e.preventDefault(); e.returnValue = ""; }
  });

  function route() {
    if (readerCleanup) { readerCleanup(); readerCleanup = null; }
    if (quiz.state) {
      // Examen quitté sans aucune réponse : on n’en garde pas la trace
      if (quiz.state.cfg.mode === "exam" && !quiz.state.answers.some(Boolean)) window.QuizEngine.clearSavedExam();
      quiz.stop();
    }
    if (!location.hash.startsWith("#/quiz/")) lastPage = location.hash || "#/";
    currentHash = location.hash;
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).map(decodeURIComponent);
    const [p0, p1, p2] = parts;
    window.scrollTo(0, 0);
    switch (p0) {
      case undefined: case "": case "accueil": renderHome(); break;
      case "cours": p1 ? renderReader(p1) : renderCourses(); break;
      case "entrainement": renderTraining(); break;
      case "quiz": startQuiz(p1, p2); break;
      case "progres": renderProgress(); break;
      case "a-propos": renderAbout(); break;
      default: go("#/");
    }
    if (!firstRoute && !location.hash.startsWith("#/quiz/")) view.focus({ preventScroll: true });
    firstRoute = false;
  }

  window.addEventListener("hashchange", onHashChange);

  function migrateToConcepts() {
    const pd = storage.profileData;
    let changed = false;
    D.questions.forEach((q) => {
      if (!q.concept) return;
      const oldCard = pd.fsrsCards[q.id];
      if (oldCard && q.concept !== q.id) {
        const cur = pd.fsrsCards[q.concept];
        if (!cur || (oldCard.lastReview || 0) > (cur.lastReview || 0)) pd.fsrsCards[q.concept] = Object.assign({}, oldCard, { id: q.concept });
        delete pd.fsrsCards[q.id];
        changed = true;
      }
      const st = pd.questionStats[q.id];
      if (st && !pd.conceptStats[q.concept]) { pd.conceptStats[q.concept] = Object.assign({}, st, { mastered: false, consecutiveCorrect: Math.min(st.consecutiveCorrect, 1) }); changed = true; }
    });
    if (changed) storage.saveProfileData();
  }
  migrateToConcepts();

  window.app = { esc, reportQuestionUrl, reportLink, toast, zoom, confirm: confirmDialog, prompt: promptDialog, go, data: D, pool };
  route();
})();
