'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const button = $('launchBtn'), hero = document.querySelector('.hero');
  const overlay = $('countdownOverlay'), number = $('countdownNumber'), status = $('launchStatus');
  const soundButton = $('soundBtn');
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  let context, muted = false, busy = false, interrupted = false;
  const active = new Set(), buffers = new Map();
  const names = ['countdown', 'liftoff', 'ignition', 'propulsion'];
  // Embedded assets remove all audio network/path dependencies on GitHub Pages.
  const embedded = JSON.parse(document.getElementById('embeddedAudio').textContent);
  function audioBytes(name) {
    const binary = atob(embedded[name]);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }
  function stopAudio() {
    for (const source of active) { try { source.stop(); } catch {} }
    active.clear();
  }
  async function unlockAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    try {
      context ||= new AudioContext();
      // Resume synchronously from the click gesture, including iPhone Safari.
      const resumed = context.resume();
      const primer = context.createBufferSource();
      primer.buffer = context.createBuffer(1, 1, context.sampleRate);
      primer.connect(context.destination);
      primer.start();
      primer.onended = () => primer.disconnect();
      await resumed;
      await Promise.all(names.map(async name => {
        if (!buffers.has(name)) {
          const bytes = audioBytes(name);
          if (bytes) buffers.set(name, await context.decodeAudioData(bytes.slice(0)));
        }
      }));
      return context.state === 'running' && buffers.size === names.length;
    } catch { return false; }
  }
  function play(name) {
    if (muted || interrupted || !context || context.state !== 'running' || !buffers.has(name)) return;
    const source = context.createBufferSource(), gain = context.createGain();
    source.buffer = buffers.get(name); gain.gain.value = .85;
    source.connect(gain); gain.connect(context.destination); active.add(source);
    source.onended = () => { active.delete(source); source.disconnect(); gain.disconnect(); };
    source.start();
  }
  soundButton.addEventListener('click', () => {
    muted = !muted;
    if (muted) stopAudio();
    soundButton.setAttribute('aria-pressed', String(!muted));
    soundButton.textContent = muted ? 'Sonido desactivado' : 'Sonido activado';
  });
  async function count(value, go = false) {
    if (interrupted) return;
    number.textContent = value;
    number.classList.remove('pop', 'go');
    if (go) number.classList.add('go');
    void number.offsetWidth;
    number.classList.add('pop'); status.textContent = go ? '¡DESPEGUE!' : `Despegue en ${value}`;
    play(go ? 'liftoff' : 'countdown');
    await wait(go ? 700 : 1000);
  }
  button.addEventListener('click', async () => {
    if (busy) return;
    busy = true; interrupted = false; button.disabled = true; button.setAttribute('aria-busy', 'true');
    let audioReady = false;
    try {
      status.textContent = 'Preparando secuencia de despegue';
      audioReady = await unlockAudio();
      if (interrupted) return;
      overlay.classList.add('active'); overlay.setAttribute('aria-hidden', 'false');
      for (const value of ['3', '2', '1']) { await count(value); if (interrupted) return; }
      await count('¡DESPEGUE!', true);
      if (interrupted) return;
      overlay.classList.remove('active'); overlay.setAttribute('aria-hidden', 'true');
      status.textContent = '¡Motor principal activado!'; play('ignition');
      await wait(150);
      if (interrupted) return;
      play('propulsion'); hero.classList.add('is-launching');
      await wait(3350);
    } catch {
      status.textContent = 'La secuencia se ha detenido. Puedes volver a intentarlo.';
    } finally {
      stopAudio(); overlay.classList.remove('active'); overlay.setAttribute('aria-hidden', 'true');
      hero.classList.remove('is-launching'); button.disabled = false; button.removeAttribute('aria-busy'); busy = false;
      status.textContent = interrupted ? 'Secuencia interrumpida. Puedes iniciar otra vez.' :
        (!audioReady && !muted ? 'Secuencia completada. Audio no disponible en este navegador.' : 'Secuencia completada. Listos para repetir.');
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && busy) { interrupted = true; stopAudio(); overlay.classList.remove('active'); }
    if (!document.hidden) updateCountdown();
  });
  window.addEventListener('pagehide', () => { interrupted = true; stopAudio(); });
  const config = window.TECNOVA_CONFIG || {};
  // Date.parse only accepts our explicit timezone configuration, avoiding device-local interpretation.
  const target = /(?:Z|[+-]\d{2}:\d{2})$/.test(config.launchAt || '') ? Date.parse(config.launchAt) : NaN;
  const fields = ['timerDays', 'timerHours', 'timerMinutes', 'timerSeconds'].map($);
  let interval;
  function updateCountdown() {
    if (!Number.isFinite(target)) {
      fields.forEach(field => { field.textContent = '—'; });
      document.querySelector('.event-date').textContent = 'Fecha oficial pendiente de confirmación';
      return;
    }
    const seconds = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
    fields.forEach((field, i) => { field.textContent = String(values[i]).padStart(2, '0'); });
    $('timerFinished').hidden = target > Date.now();
    if (target <= Date.now()) clearInterval(interval);
  }
  if (Number.isFinite(target)) {
    const date = new Intl.DateTimeFormat('es-MX', {dateStyle:'long',timeStyle:'short',timeZone:config.timeZone || 'America/Mazatlan'}).format(target);
    document.querySelector('.event-date').textContent = `${date} · Hora de Sinaloa (UTC−7)`;
  }
  updateCountdown();
  if (target > Date.now()) interval = setInterval(updateCountdown, 1000);
})();
