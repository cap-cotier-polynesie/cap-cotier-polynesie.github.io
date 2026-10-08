/**
 * Cap Côtier — bibliothèque de figures vectorielles.
 * Toutes les illustrations (balises, rythmes de feux, feux de navires, marques de jour,
 * pavillons, signaux sonores, signaux portuaires, règles de barre) sont dessinées ici en SVG.
 *
 * Usage HTML : <figure class="fig" data-fig="mark" data-type="card-n"></figure>
 * Usage JS   : Figures.render({ fig: "mark", type: "card-n" })
 */
(function () {
  "use strict";

  let uid = 0;
  const nextId = (p) => `${p}${++uid}`;

  const C = {
    red: "#d8343a", redDark: "#a51f27",
    green: "#169a55", greenDark: "#0d6b3a",
    yellow: "#f6c400", yellowDark: "#c79a00",
    black: "#1b2230", white: "#fbfaf6", blue: "#1f5fbf",
    orange: "#ff7a1a", ink: "#13243a",
    lightW: "#fff7d6", lightR: "#ff4b4b", lightG: "#36e07a", lightY: "#ffd23f", lightB: "#4f8dff"
  };

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ------------------------------------------------------------------
  // BALISES (marques AISM région A)
  // ------------------------------------------------------------------
  const MARKS = {
    "lat-port":   { label: "Marque latérale bâbord", bands: [[C.red, 1]], top: "can-red", light: C.lightR },
    "lat-stbd":   { label: "Marque latérale tribord", bands: [[C.green, 1]], top: "cone-green", light: C.lightG },
    "pref-stbd":  { label: "Bifurcation — chenal préféré à tribord", bands: [[C.red, 1], [C.green, 1], [C.red, 1]], top: "can-red", light: C.lightR },
    "pref-port":  { label: "Bifurcation — chenal préféré à bâbord", bands: [[C.green, 1], [C.red, 1], [C.green, 1]], top: "cone-green", light: C.lightG },
    "card-n":     { label: "Cardinale Nord", bands: [[C.black, 1], [C.yellow, 1]], top: "cones-up", light: C.lightW },
    "card-s":     { label: "Cardinale Sud", bands: [[C.yellow, 1], [C.black, 1]], top: "cones-down", light: C.lightW },
    "card-e":     { label: "Cardinale Est", bands: [[C.black, 1], [C.yellow, 1], [C.black, 1]], top: "cones-diamond", light: C.lightW },
    "card-w":     { label: "Cardinale Ouest", bands: [[C.yellow, 1], [C.black, 1], [C.yellow, 1]], top: "cones-hourglass", light: C.lightW },
    "isolated":   { label: "Danger isolé", bands: [[C.black, 1], [C.red, 1], [C.black, 1]], top: "balls-black", light: C.lightW },
    "safewater":  { label: "Eaux saines", stripes: [C.red, C.white], top: "ball-red", light: C.lightW },
    "special":    { label: "Marque spéciale", bands: [[C.yellow, 1]], top: "x-yellow", light: C.lightY },
    "newdanger":  { label: "Bouée d’épave d’urgence", stripes: [C.blue, C.yellow], top: "cross-yellow", light: C.lightB }
  };

  function topmark(kind, cx, baseY) {
    // baseY = bas du voyant ; dessin vers le haut
    const s = 'stroke="#0d1420" stroke-width="1.6" stroke-linejoin="round"';
    switch (kind) {
      case "can-red":
        return `<rect x="${cx - 11}" y="${baseY - 26}" width="22" height="26" rx="2" fill="${C.red}" ${s}/>`;
      case "cone-green":
        return `<path d="M${cx} ${baseY - 28} L${cx + 14} ${baseY} L${cx - 14} ${baseY} Z" fill="${C.green}" ${s}/>`;
      case "cones-up":
        return `<path d="M${cx} ${baseY - 44} L${cx + 12} ${baseY - 24} L${cx - 12} ${baseY - 24} Z" fill="${C.black}" ${s}/>
                <path d="M${cx} ${baseY - 20} L${cx + 12} ${baseY} L${cx - 12} ${baseY} Z" fill="${C.black}" ${s}/>`;
      case "cones-down":
        return `<path d="M${cx - 12} ${baseY - 44} L${cx + 12} ${baseY - 44} L${cx} ${baseY - 24} Z" fill="${C.black}" ${s}/>
                <path d="M${cx - 12} ${baseY - 20} L${cx + 12} ${baseY - 20} L${cx} ${baseY} Z" fill="${C.black}" ${s}/>`;
      case "cones-diamond": // bases opposées (Est)
        return `<path d="M${cx} ${baseY - 44} L${cx + 12} ${baseY - 24} L${cx - 12} ${baseY - 24} Z" fill="${C.black}" ${s}/>
                <path d="M${cx - 12} ${baseY - 20} L${cx + 12} ${baseY - 20} L${cx} ${baseY} Z" fill="${C.black}" ${s}/>`;
      case "cones-hourglass": // pointes opposées (Ouest)
        return `<path d="M${cx - 12} ${baseY - 44} L${cx + 12} ${baseY - 44} L${cx} ${baseY - 24} Z" fill="${C.black}" ${s}/>
                <path d="M${cx} ${baseY - 20} L${cx + 12} ${baseY} L${cx - 12} ${baseY} Z" fill="${C.black}" ${s}/>`;
      case "balls-black":
        return `<circle cx="${cx}" cy="${baseY - 32}" r="10" fill="${C.black}" ${s}/>
                <circle cx="${cx}" cy="${baseY - 10}" r="10" fill="${C.black}" ${s}/>`;
      case "ball-red":
        return `<circle cx="${cx}" cy="${baseY - 12}" r="12" fill="${C.red}" ${s}/>`;
      case "x-yellow":
        return `<g transform="translate(${cx} ${baseY - 13}) rotate(45)"><rect x="-3.5" y="-16" width="7" height="32" fill="${C.yellow}" ${s}/><rect x="-16" y="-3.5" width="32" height="7" fill="${C.yellow}" ${s}/><rect x="-3" y="-3" width="6" height="6" fill="${C.yellow}"/></g>`;
      case "cross-yellow":
        return `<g transform="translate(${cx} ${baseY - 14})"><rect x="-3.5" y="-14" width="7" height="28" fill="${C.yellow}" ${s}/><rect x="-14" y="-3.5" width="28" height="7" fill="${C.yellow}" ${s}/><rect x="-3" y="-3" width="6" height="6" fill="${C.yellow}"/></g>`;
    }
    return "";
  }

  function markSVG(type, opts = {}) {
    const m = MARKS[type];
    if (!m) return "";
    const id = nextId("mk");
    const cx = 60;
    const bodyTop = 74, bodyBot = 168, bw = 22;
    // Forme du corps : cylindre (bâbord), cône (tribord), charpente pour les autres marques
    const shape = m.top === "can-red" ? "can" : m.top === "cone-green" ? "cone" : "pillar";
    const bodyPath = () => {
      if (shape === "can") return `M${cx - 27} ${bodyTop + 6} Q${cx} ${bodyTop - 2} ${cx + 27} ${bodyTop + 6} L${cx + 29} ${bodyBot} L${cx - 29} ${bodyBot} Z`;
      if (shape === "cone") return `M${cx - 6} ${bodyTop - 4} L${cx + 6} ${bodyTop - 4} L${cx + 33} ${bodyBot} L${cx - 33} ${bodyBot} Z`;
      return `M${cx - 22} ${bodyTop} L${cx + 22} ${bodyTop} L${cx + 32} ${bodyBot} L${cx - 32} ${bodyBot} Z`;
    };
    let body = "";
    const clip = `<clipPath id="${id}c"><path d="${bodyPath()}"/></clipPath>`;
    if (m.bands) {
      const total = m.bands.reduce((a, b) => a + b[1], 0);
      let y = bodyTop;
      const h = bodyBot - bodyTop;
      m.bands.forEach(([col, w]) => {
        const bh = (h * w) / total;
        body += `<rect x="20" y="${y}" width="80" height="${bh + 0.5}" fill="${col}"/>`;
        y += bh;
      });
    } else if (m.stripes) {
      const n = 6;
      for (let i = 0; i < n; i++) {
        body += `<rect x="${24 + (i * 72) / n}" y="${bodyTop}" width="${72 / n + 0.5}" height="${bodyBot - bodyTop}" fill="${m.stripes[i % 2]}"/>`;
      }
    }
    const light = opts.light
      ? `<circle cx="${cx}" cy="4" r="17" fill="url(#${id}g)"/><circle cx="${cx}" cy="4" r="5" fill="${m.light}" stroke="#0d1420" stroke-opacity=".35" stroke-width="1"/>`
      : "";
    const mastTop = opts.light ? 8 : 22;
    return `<svg viewBox="0 -16 120 212" class="svg-mark" role="img" aria-label="${esc(m.label)}">
      <defs>${clip}
        <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset=".45" stop-color="#fff" stop-opacity=".18"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></linearGradient>
        <radialGradient id="${id}g"><stop offset="0" stop-color="${m.light}" stop-opacity=".95"/><stop offset=".35" stop-color="${m.light}" stop-opacity=".45"/><stop offset="1" stop-color="${m.light}" stop-opacity="0"/></radialGradient>
      </defs>
      <ellipse cx="${cx}" cy="183" rx="50" ry="7" class="fig-water-shadow"/>
      ${light}
      <line x1="${cx}" y1="${mastTop}" x2="${cx}" y2="${bodyTop}" stroke="#0d1420" stroke-width="3"/>
      ${opts.noTop ? "" : topmark(m.top, cx, 66)}
      <g clip-path="url(#${id}c)">${body}<rect x="20" y="${bodyTop}" width="80" height="${bodyBot - bodyTop}" fill="url(#${id}s)"/></g>
      <path d="${bodyPath()}" fill="none" stroke="#0d1420" stroke-width="1.8" stroke-linejoin="round"/>
      ${opts.num ? `<text x="${cx}" y="128" text-anchor="middle" font-family="Atkinson Hyperlegible Next, Arial, sans-serif" font-weight="700" font-size="26" fill="#fff" stroke="#0d1420" stroke-width="1" paint-order="stroke">${esc(opts.num)}</text>` : ""}
      <path d="M${cx - bw - 18} ${bodyBot} Q${cx} ${bodyBot - 8} ${cx + bw + 18} ${bodyBot} L${cx + bw + 12} ${bodyBot + 12} Q${cx} ${bodyBot + 17} ${cx - bw - 12} ${bodyBot + 12} Z" fill="${(m.bands ? m.bands[m.bands.length - 1][0] : m.stripes[0])}" stroke="#0d1420" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M4 182 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" class="fig-wave" stroke-width="2"/>
    </svg>`;
  }

  // ------------------------------------------------------------------
  // RYTHMES DE FEUX
  // ------------------------------------------------------------------
  // Séquences [allumé, éteint, allumé, éteint, ...] en secondes sur une période.
  const RHYTHMS = {
    "F":         { name: "Feu fixe", seq: [12, 0] },
    "Fl":        { name: "Éclats (Fl)", seq: [0.6, 4.4] },
    "LFl":       { name: "Éclat long (LFl)", seq: [2, 8] },
    "Q":         { name: "Scintillant (Q) — 60/min", seq: [0.5, 0.5] },
    "VQ":        { name: "Scintillant rapide (VQ) — 120/min", seq: [0.25, 0.25] },
    "Oc":        { name: "Occultations (Oc)", seq: [4, 1] },
    "Iso":       { name: "Isophase (Iso)", seq: [2, 2] },
    "Mo(A)":     { name: "Morse « A » (· —)", seq: [0.5, 0.5, 1.5, 5.5] },
    "Fl(2)":     { name: "2 éclats groupés", seq: [0.5, 1, 0.5, 4] },
    "Fl(3)":     { name: "3 éclats groupés", seq: [0.5, 1, 0.5, 1, 0.5, 6.5] },
    "Fl(2+1)":   { name: "Éclats groupés (2+1)", seq: [0.5, 0.8, 0.5, 2, 0.5, 5.7] },
    "Q(3)":      { name: "3 scintillements toutes les 10 s", seq: [0.5, 0.5, 0.5, 0.5, 0.5, 7.5] },
    "VQ(3)":     { name: "3 scintillements rapides toutes les 5 s", seq: [0.25, 0.25, 0.25, 0.25, 0.25, 3.75] },
    "Q(6)+LFl":  { name: "6 scintillements + 1 éclat long toutes les 15 s", seq: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 7] },
    "VQ(6)+LFl": { name: "6 scintillements rapides + 1 éclat long toutes les 10 s", seq: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 2, 5] },
    "Q(9)":      { name: "9 scintillements toutes les 15 s", seq: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 6.5] },
    "VQ(9)":     { name: "9 scintillements rapides toutes les 10 s", seq: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 5.75] }
  };
  const LIGHT_COLORS = { W: C.lightW, R: C.lightR, G: C.lightG, Y: C.lightY, B: C.lightB };
  const LIGHT_NAMES = { W: "blanc", R: "rouge", G: "vert", Y: "jaune", B: "bleu" };

  function rhythmSVG(code, color = "W") {
    const r = RHYTHMS[code];
    if (!r) return "";
    const period = r.seq.reduce((a, b) => a + b, 0);
    const win = Math.max(period * (period < 6 ? 2 : 1), 10);
    const W = 280, H = 72, x0 = 12, x1 = W - 12, y = 14, h = 20;
    const sc = (x1 - x0) / win;
    const fid = nextId("rg");
    const col = LIGHT_COLORS[color] || C.lightW;
    let t = 0, blocks = "";
    while (t < win - 0.001) {
      for (let i = 0; i < r.seq.length && t < win; i++) {
        const d = Math.min(r.seq[i], win - t);
        if (i % 2 === 0 && d > 0) {
          blocks += `<rect x="${(x0 + t * sc).toFixed(1)}" y="${y}" width="${Math.max(d * sc, 2).toFixed(1)}" height="${h}" rx="2" fill="${col}" filter="url(#${fid})"/>`;
        }
        t += r.seq[i];
      }
    }
    let ticks = "";
    for (let s = 0; s <= win; s++) {
      const x = x0 + s * sc;
      ticks += `<line x1="${x.toFixed(1)}" y1="${y + h + 6}" x2="${x.toFixed(1)}" y2="${y + h + (s % 5 === 0 ? 12 : 9)}" class="fig-tick"/>`;
      if (s % 5 === 0) ticks += `<text x="${x.toFixed(1)}" y="${y + h + 24}" class="fig-tick-label" text-anchor="middle">${s} s</text>`;
    }
    return `<svg viewBox="0 0 ${W} ${H}" class="svg-rhythm" role="img" aria-label="${esc(r.name)} ${LIGHT_NAMES[color] || ""}">
      <defs><filter id="${fid}" x="-50%" y="-80%" width="200%" height="260%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <rect x="2" y="${y - 8}" width="${W - 4}" height="${h + 16}" rx="8" class="fig-night"/>
      ${blocks}
      ${ticks}
    </svg>`;
  }

  // ------------------------------------------------------------------
  // FEUX DE NAVIRES (vue de nuit)
  // ------------------------------------------------------------------
  function lightsSVG(rowsSpec = "W") {
    const rows = String(rowsSpec).split("|").map((r) => r.trim().split(/\s+/));
    const W = 240, H = 170;
    const top = 26, bottom = 120;
    const n = rows.length;
    const id = nextId("lt");
    let dots = "";
    rows.forEach((row, ri) => {
      const yy = n === 1 ? (top + bottom) / 2 : top + ((bottom - top) * ri) / (n - 1);
      const m = row.length;
      const spread = Math.min(150, 46 * (m - 1));
      row.forEach((tok, ci) => {
        if (tok === "GR") {
          // Fanal bicolore : un seul feu, moitié verte (à gauche vu de l'avant) et moitié rouge
          const xx = m === 1 ? W / 2 : W / 2 - spread / 2 + (spread * ci) / (m - 1);
          dots += `<circle cx="${xx}" cy="${yy}" r="20" fill="url(#${id}G)" opacity=".8"/><circle cx="${xx}" cy="${yy}" r="20" fill="url(#${id}R)" opacity=".8"/>
            <path d="M${xx} ${yy - 7} A7 7 0 0 0 ${xx} ${yy + 7} Z" fill="${C.lightG}"/><path d="M${xx} ${yy - 7} A7 7 0 0 1 ${xx} ${yy + 7} Z" fill="${C.lightR}"/>
            <line x1="${xx}" y1="${yy - 7}" x2="${xx}" y2="${yy + 7}" stroke="#050b18" stroke-width="1"/>`;
          return;
        }
        if (tok === "." || !LIGHT_COLORS[tok]) return;
        const xx = m === 1 ? W / 2 : W / 2 - spread / 2 + (spread * ci) / (m - 1);
        const col = LIGHT_COLORS[tok];
        dots += `<circle cx="${xx}" cy="${yy}" r="19" fill="url(#${id}${tok})"/><circle cx="${xx}" cy="${yy}" r="7" fill="${col}"/><circle cx="${xx - 1.5}" cy="${yy - 1.5}" r="2" fill="#fff" opacity=".8"/>`;
      });
    });
    const grads = Object.keys(LIGHT_COLORS).map((k) => `<radialGradient id="${id}${k}"><stop offset="0" stop-color="${LIGHT_COLORS[k]}" stop-opacity=".9"/><stop offset=".3" stop-color="${LIGHT_COLORS[k]}" stop-opacity=".35"/><stop offset="1" stop-color="${LIGHT_COLORS[k]}" stop-opacity="0"/></radialGradient>`).join("");
    const desc = rows.map((r) => r.filter((t) => t !== ".").map((t) => (t === "GR" ? "un fanal bicolore vert et rouge" : LIGHT_NAMES[t] || t)).join(" et ")).filter(Boolean).join(", puis ");
    return `<svg viewBox="0 0 ${W} ${H}" class="svg-lights" role="img" aria-label="Feux vus de nuit, de haut en bas : ${esc(desc)}">
      <defs>${grads}<linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050b18"/><stop offset=".72" stop-color="#0b1a33"/><stop offset=".72" stop-color="#061024"/><stop offset="1" stop-color="#030812"/></linearGradient></defs>
      <rect width="${W}" height="${H}" rx="12" fill="url(#${id}sky)"/>
      <g fill="#fff" opacity=".35"><circle cx="22" cy="18" r=".9"/><circle cx="64" cy="40" r=".7"/><circle cx="200" cy="22" r="1"/><circle cx="214" cy="58" r=".6"/><circle cx="36" cy="88" r=".6"/></g>
      <path d="M0 140 q20 -3 40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#2a4a7a" stroke-width="1.2" fill="none" opacity=".7"/>
      <path d="M10 152 q20 -3 40 0 t40 0 t40 0 t40 0 t40 0" stroke="#2a4a7a" stroke-width="1" fill="none" opacity=".45"/>
      ${dots}
    </svg>`;
  }

  // ------------------------------------------------------------------
  // MARQUES DE JOUR
  // ------------------------------------------------------------------
  function shapesSVG(spec = "ball") {
    const list = String(spec).split(",").map((s) => s.trim()).filter(Boolean);
    const step = 40, W = 120;
    const H = 40 + list.length * step + 24;
    let g = "";
    const cx = 60;
    list.forEach((s, i) => {
      const cy = 40 + i * step + step / 2 - 4;
      switch (s) {
        case "ball": g += `<circle cx="${cx}" cy="${cy}" r="15" class="fig-shape"/>`; break;
        case "cone-up": g += `<path d="M${cx} ${cy - 16} L${cx + 16} ${cy + 14} L${cx - 16} ${cy + 14} Z" class="fig-shape"/>`; break;
        case "cone-down": g += `<path d="M${cx - 16} ${cy - 14} L${cx + 16} ${cy - 14} L${cx} ${cy + 16} Z" class="fig-shape"/>`; break;
        case "diamond": g += `<path d="M${cx} ${cy - 19} L${cx + 13} ${cy} L${cx} ${cy + 19} L${cx - 13} ${cy} Z" class="fig-shape"/>`; break;
        case "cylinder": g += `<rect x="${cx - 12}" y="${cy - 17}" width="24" height="34" rx="2" class="fig-shape"/>`; break;
      }
    });
    return `<svg viewBox="0 0 ${W} ${H}" class="svg-shapes" role="img" aria-label="Marques de jour : ${esc(list.join(", "))}">
      <line x1="${cx}" y1="14" x2="${cx}" y2="${H - 10}" class="fig-halyard"/>
      <path d="M${cx - 30} 14 L${cx + 30} 14" class="fig-yard"/>
      ${g}
    </svg>`;
  }

  // ------------------------------------------------------------------
  // PAVILLONS
  // ------------------------------------------------------------------
  function flagBody(f, x, y, w, h, id) {
    switch (f) {
      case "A":
        return `<path d="M${x} ${y} H${x + w / 2} V${y + h} H${x} Z" fill="${C.white}"/>
                <path d="M${x + w / 2} ${y} H${x + w} L${x + w * 0.74} ${y + h / 2} L${x + w} ${y + h} H${x + w / 2} Z" fill="#1d4fa8"/>
                <path d="M${x} ${y} H${x + w} L${x + w * 0.74} ${y + h / 2} L${x + w} ${y + h} H${x} Z" fill="none" class="fig-flag-edge"/>`;
      case "N": {
        let s = "";
        for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) s += `<rect x="${x + (c * w) / 4}" y="${y + (r * h) / 4}" width="${w / 4 + 0.3}" height="${h / 4 + 0.3}" fill="${(r + c) % 2 ? C.white : "#1d4fa8"}"/>`;
        return s + `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" class="fig-flag-edge"/>`;
      }
      case "C": {
        const cols = ["#1d4fa8", C.white, C.red, C.white, "#1d4fa8"];
        return cols.map((c, i) => `<rect x="${x}" y="${y + (i * h) / 5}" width="${w}" height="${h / 5 + 0.3}" fill="${c}"/>`).join("") + `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" class="fig-flag-edge"/>`;
      }
      case "diver-red":
        return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.red}"/><path d="M${x} ${y} L${x + w * 0.16} ${y} L${x + w} ${y + h * 0.82} L${x + w} ${y + h} L${x + w * 0.84} ${y + h} L${x} ${y + h * 0.18} Z" fill="${C.white}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" class="fig-flag-edge"/>`;
      case "ski":
        return `<path d="M${x} ${y} L${x + w * 1.25} ${y + h * 0.32} L${x} ${y + h * 0.64} Z" fill="${C.orange}" class="fig-flag-edge"/>`;
      case "national":
        return `<rect x="${x}" y="${y}" width="${w / 3 + 0.3}" height="${h}" fill="#1d3fa8"/><rect x="${x + w / 3}" y="${y}" width="${w / 3 + 0.3}" height="${h}" fill="${C.white}"/><rect x="${x + (2 * w) / 3}" y="${y}" width="${w / 3}" height="${h}" fill="${C.red}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" class="fig-flag-edge"/>`;
      case "T": // rouge au guindant : l’inverse du pavillon national
        return `<rect x="${x}" y="${y}" width="${w / 3 + 0.3}" height="${h}" fill="${C.red}"/><rect x="${x + w / 3}" y="${y}" width="${w / 3 + 0.3}" height="${h}" fill="${C.white}"/><rect x="${x + (2 * w) / 3}" y="${y}" width="${w / 3}" height="${h}" fill="#1d4fa8"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" class="fig-flag-edge"/>`;
      case "pf": {
        const cx = x + w / 2, cy = y + h / 2, r = h * 0.2;
        return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.red}"/><rect x="${x}" y="${y + h / 4}" width="${w}" height="${h / 2}" fill="${C.white}"/>
          <clipPath id="${id}d"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath>
          <g clip-path="url(#${id}d)"><rect x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" fill="#f2b400"/>
          <rect x="${cx - r}" y="${cy + r * 0.25}" width="${2 * r}" height="${r}" fill="#1d4fa8"/>
          <path d="M${cx - r} ${cy + r * 0.5} q${r / 4} -${r / 6} ${r / 2} 0 t${r / 2} 0 t${r / 2} 0 t${r / 2} 0" stroke="${C.white}" stroke-width="1" fill="none"/>
          <path d="M${cx - r * 0.6} ${cy + r * 0.12} h${r * 1.2} l-${r * 0.2} ${r * 0.14} h-${r * 0.8} z" fill="${C.red}"/></g>
          <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" class="fig-flag-edge"/>`;
      }
    }
    return "";
  }

  function flagSVG(f) {
    const id = nextId("fl");
    const names = { A: "Pavillon A (plongeurs)", N: "Pavillon N", C: "Pavillon C", NC: "Pavillons N au-dessus de C (détresse)", "diver-red": "Pavillon plongée rouge à diagonale blanche", ski: "Flamme orange (ski nautique)", national: "Pavillon national", T: "Pavillon T", pf: "Pavillon de la Polynésie française" };
    const W = 150;
    if (f === "NC") {
      return `<svg viewBox="0 0 ${W} 170" class="svg-flag" role="img" aria-label="${names.NC}">
        <line x1="18" y1="6" x2="18" y2="166" class="fig-pole"/>
        <g class="fig-flutter">${flagBody("N", 20, 12, 108, 70, id)}</g>
        <g class="fig-flutter">${flagBody("C", 20, 88, 108, 70, id)}</g>
      </svg>`;
    }
    return `<svg viewBox="0 0 ${W} 110" class="svg-flag" role="img" aria-label="${esc(names[f] || f)}">
      <line x1="18" y1="6" x2="18" y2="106" class="fig-pole"/>
      <g class="fig-flutter">${flagBody(f, 20, 12, 108, 72, id)}</g>
    </svg>`;
  }

  // ------------------------------------------------------------------
  // SIGNAUX SONORES
  // ------------------------------------------------------------------
  function soundSVG(pattern = ".") {
    const p = String(pattern).replace(/[^.\-]/g, "");
    const unit = 14, gap = 9;
    let x = 12, bars = "";
    for (const ch of p) {
      const w = ch === "-" ? unit * 4 : unit;
      bars += `<rect x="${x}" y="22" width="${w}" height="16" rx="8" class="fig-sound-bar ${ch === "-" ? "is-long" : "is-short"}"/>`;
      x += w + gap;
    }
    const W = Math.max(x + 4, 80);
    const label = [...p].map((c) => (c === "-" ? "son prolongé" : "son bref")).join(", ");
    return `<svg viewBox="0 0 ${W} 60" class="svg-sound" role="img" aria-label="${label}">${bars}</svg>`;
  }

  // ------------------------------------------------------------------
  // SIGNAUX DE TRAFIC PORTUAIRE (3 feux verticaux)
  // ------------------------------------------------------------------
  // flash : false (fixes), true (à éclats / clignotants) ou "occ" (à occultations : allumés, brièvement éteints)
  function portSVG(lights = "RRR", flash = false) {
    const anim = flash === "occ" ? "fig-occult" : flash ? "fig-blink" : "";
    const id = nextId("pt");
    const ls = String(lights).toUpperCase().split("").slice(0, 3);
    let g = "";
    ls.forEach((t, i) => {
      const col = LIGHT_COLORS[t] || C.lightW;
      const cy = 34 + i * 40;
      g += `<circle cx="60" cy="${cy}" r="22" fill="url(#${id}${t})" class="${anim}"/><circle cx="60" cy="${cy}" r="9" fill="${col}" class="${anim}"/>${flash ? `<circle cx="60" cy="${cy}" r="15" class="${flash === "occ" ? "fig-occ-ring" : "fig-flash-ring"}"/>` : ""}`;
    });
    const grads = Object.keys(LIGHT_COLORS).map((k) => `<radialGradient id="${id}${k}"><stop offset="0" stop-color="${LIGHT_COLORS[k]}" stop-opacity=".85"/><stop offset=".4" stop-color="${LIGHT_COLORS[k]}" stop-opacity=".3"/><stop offset="1" stop-color="${LIGHT_COLORS[k]}" stop-opacity="0"/></radialGradient>`).join("");
    return `<svg viewBox="0 0 120 160" class="svg-port" role="img" aria-label="Signal portuaire : ${ls.map((t) => LIGHT_NAMES[t]).join(", ")}${flash === "occ" ? " (à occultations)" : flash ? " (clignotants)" : ""}">
      <defs>${grads}</defs>
      <rect x="30" y="6" width="60" height="122" rx="14" fill="#0a1322"/>
      <rect x="54" y="128" width="12" height="28" fill="#0a1322"/>
      ${g}
    </svg>`;
  }

  // ------------------------------------------------------------------
  // BATEAU (vue de dessus) — utilisé par les schémas
  // ------------------------------------------------------------------
  function boat(x, y, angle, cls = "fig-boat", scale = 1) {
    return `<g transform="translate(${x} ${y}) rotate(${angle}) scale(${scale})">
      <path d="M0 -26 C10 -14 11 6 9 22 L-9 22 C-11 6 -10 -14 0 -26 Z" class="${cls}"/>
      <rect x="-5" y="-4" width="10" height="11" rx="2" class="fig-boat-cabin"/>
      <circle cx="-9.5" cy="-3" r="2.6" fill="${C.lightR}"/><circle cx="9.5" cy="-3" r="2.6" fill="${C.lightG}"/>
    </g>`;
  }

  const arrowDefs = (id) => `<marker id="${id}a" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="fig-arrowhead"/></marker>
    <marker id="${id}b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="fig-arrowhead-accent"/></marker>`;

  function encounterSVG(kind = "crossing") {
    const id = nextId("en");
    const W = 300, H = 220;
    let body = "", caption = "";
    const mA = `marker-end="url(#${id}a)"`, mB = `marker-end="url(#${id}b)"`;
    const S = 1.3;
    if (kind === "head-on") {
      body = `${boat(150, 182, 0, "fig-boat is-me", S)}${boat(150, 40, 180, "fig-boat is-other", S)}
        <path d="M150 146 C150 120 176 112 184 92" class="fig-route is-accent" ${mB}/>
        <path d="M150 76 C150 102 124 110 116 130" class="fig-route is-accent" ${mB}/>
        <text x="172" y="196" class="fig-label">Vous</text>
        <text x="172" y="34" class="fig-label">Autre navire</text>
        <text x="20" y="112" class="fig-label-sub">chacun sur tribord</text>`;
      caption = "Routes opposées : chacun vient sur tribord.";
    } else if (kind === "crossing") {
      body = `${boat(86, 182, 0, "fig-boat is-me", S)}${boat(196, 96, -90, "fig-boat is-other", S)}
        <path d="M86 148 L86 52" class="fig-route is-ghost" ${mA}/>
        <path d="M162 96 L30 96" class="fig-route is-ghost" ${mA}/>
        <path d="M86 148 C88 128 130 126 190 134 C246 142 268 128 270 44" class="fig-route is-accent" ${mB}/>
        <text x="112" y="200" class="fig-label">Vous : je m’écarte</text>
        <text x="150" y="56" class="fig-label">Privilégié</text>
        <text x="150" y="70" class="fig-label-sub">sur votre tribord</text>`;
      caption = "Routes croisées : celui qui voit l’autre sur son tribord s’écarte, en passant derrière lui.";
    } else if (kind === "overtaking") {
      body = `${boat(130, 70, 0, "fig-boat is-other", S)}${boat(130, 182, 0, "fig-boat is-me", S)}
        <path d="M130 146 C130 124 210 124 214 86 L214 16" class="fig-route is-accent" ${mB}/>
        <text x="156" y="200" class="fig-label">Rattrapant : s’écarte</text>
        <text x="24" y="74" class="fig-label">Rattrapé</text>`;
      caption = "Dépassement : le navire rattrapant s’écarte, quel que soit son type.";
    } else if (kind === "channel") {
      body = `<path d="M70 0 C60 70 60 150 70 220 L0 220 L0 0 Z" class="fig-land"/><path d="M230 0 C240 70 240 150 230 220 L300 220 L300 0 Z" class="fig-land"/>
        <line x1="150" y1="6" x2="150" y2="214" class="fig-axis"/>
        ${boat(188, 176, 0, "fig-boat is-me", S)}${boat(112, 48, 180, "fig-boat is-other", S)}
        <path d="M188 140 L188 70" class="fig-route is-accent" ${mB}/>
        <path d="M112 84 L112 154" class="fig-route is-accent" ${mB}/>
        <text x="150" y="212" text-anchor="middle" class="fig-label">Serrez la droite</text>`;
      caption = "Chenal étroit : naviguez sur le côté tribord du chenal.";
    }
    return `<svg viewBox="0 0 ${W} ${H}" class="svg-encounter" role="img" aria-label="${esc(caption)}">
      <defs>${arrowDefs(id)}</defs>
      <rect width="${W}" height="${H}" rx="12" class="fig-sea"/>
      ${body}
    </svg>`;
  }

  // ------------------------------------------------------------------
  // SECTEURS DES FEUX DE NAVIGATION
  // ------------------------------------------------------------------
  function sectorsSVG() {
    const cx = 150, cy = 150, R = 118;
    const pt = (deg, r = R) => { const a = ((deg - 90) * Math.PI) / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    const wedge = (a0, a1, r, cls) => { const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r); const large = (a1 - a0 + 360) % 360 > 180 ? 1 : 0; return `<path d="M${cx} ${cy} L${x0.toFixed(1)} ${y0.toFixed(1)} A${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" class="${cls}"/>`; };
    return `<svg viewBox="0 0 300 300" class="svg-sectors" role="img" aria-label="Secteurs des feux : tête de mât 225°, feux de côté 112,5° chacun, poupe 135°">
      <rect width="300" height="300" rx="14" class="fig-night"/>
      ${wedge(-112.5, 112.5, R, "fig-sector-white")}
      ${wedge(0, 112.5, R - 22, "fig-sector-green")}
      ${wedge(-112.5, 0, R - 22, "fig-sector-red")}
      ${wedge(112.5, 247.5, R - 6, "fig-sector-stern")}
      <path d="M${cx} ${cy - 30} C${cx + 12} ${cy - 16} ${cx + 13} ${cy + 8} ${cx + 10} ${cy + 26} L${cx - 10} ${cy + 26} C${cx - 13} ${cy + 8} ${cx - 12} ${cy - 16} ${cx} ${cy - 30} Z" fill="#e9eef7" stroke="#0d1420" stroke-width="1.5"/>
      <text x="${cx}" y="22" text-anchor="middle" class="fig-sector-label">Tête de mât · 225°</text>
      <text x="262" y="112" text-anchor="middle" class="fig-sector-label is-green">Tribord</text><text x="262" y="126" text-anchor="middle" class="fig-sector-label is-green">112,5°</text>
      <text x="38" y="112" text-anchor="middle" class="fig-sector-label is-red">Bâbord</text><text x="38" y="126" text-anchor="middle" class="fig-sector-label is-red">112,5°</text>
      <text x="${cx}" y="290" text-anchor="middle" class="fig-sector-label">Poupe · 135°</text>
    </svg>`;
  }

  // ------------------------------------------------------------------
  // ROSE DES CARDINALES
  // ------------------------------------------------------------------
  function cardinalRoseSVG() {
    const id = nextId("cr");
    const mini = (type, x, y, label, rh) => `<g transform="translate(${x - 24} ${y - 40}) scale(.4)">${markSVG(type).replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "")}</g>
      <text x="${x}" y="${y + 52}" text-anchor="middle" class="fig-rose-label">${label}</text>
      <text x="${x}" y="${y + 67}" text-anchor="middle" class="fig-rose-sub">${rh}</text>`;
    return `<svg viewBox="-6 0 352 370" class="svg-rose" role="img" aria-label="Position des quatre cardinales autour d’un danger">
      <rect width="340" height="360" rx="14" class="fig-sea"/>
      <g class="fig-rose-lines"><line x1="170" y1="60" x2="170" y2="300"/><line x1="50" y1="180" x2="290" y2="180"/>
      <line x1="85" y1="95" x2="255" y2="265"/><line x1="255" y1="95" x2="85" y2="265"/></g>
      <circle cx="170" cy="180" r="34" class="fig-danger-zone"/>
      <path d="M156 186 l6 -14 l6 6 l8 -12 l8 20 z" class="fig-rock"/>
      <text x="170" y="206" text-anchor="middle" class="fig-label-sub">danger</text>
      ${mini("card-n", 170, 62, "Nord", "Q / VQ continu")}
      ${mini("card-e", 292, 160, "Est", "Q(3) / VQ(3)")}
      ${mini("card-s", 170, 262, "Sud", "Q(6)+LFl")}
      ${mini("card-w", 48, 160, "Ouest", "Q(9) / VQ(9)")}
    </svg>`;
  }

  // ------------------------------------------------------------------
  // API
  // ------------------------------------------------------------------
  function render(spec) {
    if (!spec) return "";
    switch (spec.fig) {
      case "mark": return markSVG(spec.type, { light: spec.light === true || spec.light === "1", num: spec.num });
      case "rhythm": return rhythmSVG(spec.code, spec.color);
      case "lights": return lightsSVG(spec.rows);
      case "shapes": return shapesSVG(spec.shapes);
      case "flag": return flagSVG(spec.flag);
      case "sound": return soundSVG(spec.pattern);
      case "port": return portSVG(spec.lights, spec.flash === "occ" ? "occ" : spec.flash === true || spec.flash === "1");
      case "encounter": return encounterSVG(spec.case || spec.type);
      case "sectors": return sectorsSVG();
      case "cardinal-rose": return cardinalRoseSVG();
    }
    return "";
  }

  /** Remplace toutes les <figure class="fig" data-fig=...> du conteneur par leur dessin. */
  function hydrate(root) {
    if (!root) return;
    root.querySelectorAll("figure.fig[data-fig]:not([data-ready])").forEach((el) => {
      const d = el.dataset;
      const spec = { fig: d.fig, type: d.type, light: d.light, num: d.num, code: d.code, color: d.color, rows: d.rows, shapes: d.shapes, flag: d.flag, pattern: d.pattern, lights: d.lights, flash: d.flash, case: d.case };
      let svg = render(spec);
      if (!svg) return;
      if (d.neutral) svg = svg.replace(/aria-label="[^"]*"/, 'aria-label="Illustration de la question"');
      const cap = el.querySelector("figcaption");
      const holder = document.createElement("div");
      holder.className = "fig-art fig-" + d.fig;
      holder.innerHTML = svg;
      el.insertBefore(holder, el.firstChild);
      if (d.fig === "sound") {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "fig-play";
        b.setAttribute("aria-label", "Écouter le signal");
        b.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><span>Écouter</span>`;
        b.addEventListener("click", () => window.soundEngine && window.soundEngine.playPattern(d.pattern));
        holder.appendChild(b);
      }
      if (d.fig === "lights" && d.view && !cap) {
        const fc = document.createElement("figcaption");
        fc.textContent = d.view;
        el.appendChild(fc);
      }
      if (d.fig === "rhythm" && !cap && RHYTHMS[d.code]) {
        const fc = document.createElement("figcaption");
        fc.textContent = RHYTHMS[d.code].name + (d.color && LIGHT_NAMES[d.color] ? " — feu " + LIGHT_NAMES[d.color] : "");
        el.appendChild(fc);
      }
      el.dataset.ready = "1";
    });
  }

  window.Figures = { render, hydrate, markSVG, MARKS, RHYTHMS };
})();
