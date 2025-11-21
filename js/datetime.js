function getCalendarWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  document.getElementById('datetime').textContent = now.toLocaleDateString('de-DE', options) + ', ' + now.toLocaleTimeString('de-DE');
  document.getElementById('calendar-week').textContent = getCalendarWeek(now);
}

// Sofort laden + jede Minute aktualisieren
updateDateTime();
setInterval(updateDateTime, 60000);
