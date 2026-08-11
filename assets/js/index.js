const search = document.querySelector('#weekSearch');
const cards = [...document.querySelectorAll('.week')];
const empty = document.querySelector('#emptyState');
search.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase('vi');
  let visible = 0;
  cards.forEach(card => {
    const match = card.textContent.toLocaleLowerCase('vi').includes(query);
    card.hidden = !match;
    if (match) visible++;
  });
  empty.style.display = visible ? 'none' : 'block';
});
