// js/datetime.js
function getWeek(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}
function update() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleString('de-DE');
  document.getElementById('calendar-week').textContent = getWeek(now);
}
update();
setInterval(update, 60000);
