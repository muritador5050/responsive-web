const elements = document.querySelectorAll('.nav__item');
const button = document.getElementById('btn');
const modal = document.getElementById('modal');
elements.forEach((element) => {
  element.addEventListener('click', () => (modal.style.display = 'block'));
});

button.addEventListener('click', () => (modal.style.display = 'block'));

function closed() {
  modal.style.display = 'none';
}
