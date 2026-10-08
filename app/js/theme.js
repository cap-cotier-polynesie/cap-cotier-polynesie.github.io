/**
 * Cap Côtier — gestion du thème (auto / clair / nuit).
 * Chargé dans <head> pour appliquer le thème avant le premier rendu.
 */
(function () {
  "use strict";
  const KEY = "pcm_theme_mode";
  const ORDER = ["auto", "light", "night"];
  const LABELS = { auto: "Thème automatique", light: "Thème clair", night: "Thème nuit" };
  const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  let mode = "auto";
  try {
    const saved = localStorage.getItem(KEY);
    if (ORDER.includes(saved)) mode = saved;
  } catch (e) { /* stockage indisponible */ }

  function apply() {
    const resolved = mode === "auto" ? (mq && mq.matches ? "night" : "light") : mode;
    const root = document.documentElement;
    root.setAttribute("data-theme", resolved);
    root.setAttribute("data-theme-setting", mode);
    const btn = document.getElementById("themeBtn");
    if (btn) {
      btn.setAttribute("aria-label", LABELS[mode] + " — changer");
      btn.title = LABELS[mode];
    }
  }

  function set(next) {
    if (!ORDER.includes(next)) return;
    mode = next;
    try { localStorage.setItem(KEY, mode); } catch (e) { /* ignore */ }
    apply();
  }

  if (mq) {
    const onChange = () => { if (mode === "auto") apply(); };
    mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
  }

  apply();
  document.addEventListener("DOMContentLoaded", () => {
    apply();
    const btn = document.getElementById("themeBtn");
    if (btn) btn.addEventListener("click", () => set(ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]));
  });

  window.themeManager = { set, get: () => mode };
})();
