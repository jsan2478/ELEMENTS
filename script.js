const hamburgerIcon = document.querySelector('.hamburger-image');
const navBar = document.querySelector('.navbar');

hamburgerIcon.addEventListener('click', () => {
  navBar.classList.toggle('hidden');
});
