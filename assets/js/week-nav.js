(() => {
  const match = location.pathname.match(/tuan-(\d{2})\.html$/i);
  if (!match) return;

  const week = Number(match[1]);
  const pad = number => String(number).padStart(2, '0');
  const options = Array.from({ length: 35 }, (_, index) => {
    const number = index + 1;
    return `<option value="${number}" ${number === week ? 'selected' : ''}>Tuần ${number}</option>`;
  }).join('');
  const nav = document.createElement('nav');
  nav.className = 'week-switcher';
  nav.setAttribute('aria-label', 'Chuyển đổi tuần học');
  nav.innerHTML = `
    ${week > 1 ? `<a href="tuan-${pad(week - 1)}.html" aria-label="Mở lab tuần ${week - 1}">← Tuần ${week - 1}</a>` : '<span aria-hidden="true"></span>'}
    <label class="week-picker-label">
      <span class="visually-hidden">Chọn tuần học</span>
      <select class="week-picker" aria-label="Chọn tuần học">${options}</select>
    </label>
    ${week < 35 ? `<a href="tuan-${pad(week + 1)}.html" aria-label="Mở lab tuần ${week + 1}">Tuần ${week + 1} →</a>` : '<span aria-hidden="true"></span>'}
  `;
  nav.querySelector('.week-picker').addEventListener('change', event => {
    location.href = `tuan-${pad(Number(event.target.value))}.html`;
  });
  document.body.append(nav);
})();
