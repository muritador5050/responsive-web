const elements = document.querySelectorAll('.nav__item');
const modal = document.getElementById('modal');
elements.forEach((element) => {
  element.addEventListener('click', () => (modal.style.display = 'block'));
});

// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };

function closed() {
  modal.style.display = 'none';
}
