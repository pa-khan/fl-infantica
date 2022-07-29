let header = document.getElementById('header'),
  ham = document.getElementById('ham'),
  classIsActive = 'is-active',
  headerItems = header.querySelectorAll('.header__item'),
  headerItemCurrent = null;


ham.addEventListener('click', () => {
  header.classList.toggle(classIsActive);
  ham.classList.toggle(classIsActive);
});

headerItems.forEach((headerItem) => {
  headerItem.addEventListener('click', () => {
    if (headerItemCurrent) {
      headerItemCurrent.classList.remove(classIsActive);
    }

    headerItemCurrent = headerItem;
    headerItemCurrent.classList.add(classIsActive);
  });
});

document.addEventListener('click', (e) => {
  if (headerItemCurrent && !e.target.closest('.header__item.is-active')) {
    headerItemCurrent.classList.remove(classIsActive);
    headerItemCurrent = null;
  }
});