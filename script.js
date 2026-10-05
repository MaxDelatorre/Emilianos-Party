const RSVP_URL = 'https://forms.gle/cbqYe2kCu7XR4RSLA';
 
if (RSVP_URL) document.getElementById('rsvp-link').href = RSVP_URL;
 
// ── COUNTDOWN ───────────────────────────────────────────────
// Update the time once you know it (24-hour format)
const PARTY_DATE = new Date('November 21, 2026 18:00:00');
 
function updateCountdown() {
  const diff = PARTY_DATE - new Date();
  const pad = (n) => String(n).padStart(2, '0');
 
  if (diff <= 0) {
    ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
      document.getElementById(id).textContent = '00';
    });
    return;
  }
 
  document.getElementById('days').textContent    = pad(Math.floor(diff / 86400000));
  document.getElementById('hours').textContent   = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById('minutes').textContent = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById('seconds').textContent = pad(Math.floor((diff % 60000) / 1000));
}
 
updateCountdown();
setInterval(updateCountdown, 1000);
 
// ── FLOATING "18"s ──────────────────────────────────────────
const floaters = document.getElementById('floaters');
for (let i = 0; i < 14; i++) {
  const el = document.createElement('span');
  el.className = 'floater';
  el.textContent = '18';
  el.style.left = Math.random() * 100 + '%';
  el.style.fontSize = (2 + Math.random() * 5) + 'rem';
  el.style.setProperty('--dur', (14 + Math.random() * 14) + 's');
  el.style.setProperty('--delay', (-Math.random() * 20) + 's');
  el.style.setProperty('--rot', (Math.random() * 60 - 30) + 'deg');
  floaters.appendChild(el);
}
 
