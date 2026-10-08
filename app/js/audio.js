/**
 * Cap Côtier — sons et retour haptique.
 * Synthèse Web Audio uniquement (aucun fichier audio), dont la lecture des signaux sonores
 * maritimes (sons brefs ~1 s, sons prolongés ~4 à 6 s, raccourcis ici pour l'écoute).
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.hapticsEnabled = true;
    this.volume = 0.6;
    this.hornTimer = null;
    try {
      const s = localStorage.getItem("pcm_sound_enabled");
      if (s !== null) this.enabled = s === "true";
      const h = localStorage.getItem("pcm_haptics_enabled");
      if (h !== null) this.hapticsEnabled = h === "true";
      const v = localStorage.getItem("pcm_sound_volume");
      if (v !== null && !isNaN(parseFloat(v))) this.volume = Math.max(0, Math.min(1, parseFloat(v)));
    } catch (e) { /* stockage indisponible */ }
  }

  save() {
    try {
      localStorage.setItem("pcm_sound_enabled", String(this.enabled));
      localStorage.setItem("pcm_haptics_enabled", String(this.hapticsEnabled));
      localStorage.setItem("pcm_sound_volume", String(this.volume));
    } catch (e) { /* ignore */ }
  }

  setEnabled(v) { this.enabled = !!v; this.save(); }
  setHapticsEnabled(v) { this.hapticsEnabled = !!v; this.save(); }
  setVolume(v) { this.volume = Math.max(0, Math.min(1, parseFloat(v) || 0)); this.save(); }

  context() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      this.ctx = new AC();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  vibrate(pattern) {
    if (!this.hapticsEnabled || !navigator.vibrate) return;
    try { navigator.vibrate(pattern); } catch (e) { /* ignore */ }
  }

  tone(freqs, start, dur, type = "triangle", gain = 0.22) {
    const ctx = this.ctx;
    if (gain * this.volume < 0.0005) return; // volume nul : rien à jouer (une rampe vers 0 lèverait une erreur)
    freqs.forEach((f) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, start);
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(gain * this.volume, start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      o.connect(g).connect(ctx.destination);
      o.start(start);
      o.stop(start + dur + 0.05);
    });
  }

  playSuccess() {
    this.vibrate(18);
    if (!this.enabled || this.volume <= 0 || !this.context()) return;
    const t = this.ctx.currentTime;
    this.tone([659.25], t, 0.18);
    this.tone([987.77], t + 0.09, 0.32);
  }

  playError() {
    this.vibrate([40, 40, 40]);
    if (!this.enabled || this.volume <= 0 || !this.context()) return;
    const t = this.ctx.currentTime;
    this.tone([196, 207.65], t, 0.32, "sine", 0.2);
  }

  playFanfare() {
    if (!this.enabled || this.volume <= 0 || !this.context()) return;
    const t = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone([f], t + i * 0.11, 0.5, "triangle", 0.18));
  }

  /** Corne de brume : un son entre `start` et `start + dur`. */
  horn(start, dur) {
    const ctx = this.ctx;
    if (this.volume < 0.002) return;
    const g = ctx.createGain();
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 420;
    lp.Q.value = 2;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(0.32 * this.volume, start + 0.08);
    g.gain.setValueAtTime(0.32 * this.volume, start + dur - 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    [[155, "sawtooth"], [156.5, "square"], [310, "triangle"]].forEach(([f, type]) => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = f;
      o.connect(lp);
      o.start(start);
      o.stop(start + dur + 0.05);
    });
    lp.connect(g).connect(ctx.destination);
  }

  /** Joue un motif « . » (bref) / « - » (prolongé). Les durées sont réduites pour l'écoute (0,6 s / 2,2 s). */
  playPattern(pattern) {
    if (this.volume <= 0 || !this.context()) return;
    let t = this.ctx.currentTime + 0.05;
    for (const ch of String(pattern || "")) {
      if (ch !== "." && ch !== "-") continue;
      const d = ch === "-" ? 2.2 : 0.6;
      this.horn(t, d);
      t += d + 0.45;
    }
  }
}

window.soundEngine = new SoundEngine();
