function deleteClassNoJs() {
  const elements = document.getElementsByClassName("no-js") || [];

  while (elements.length) {
    elements[0].classList.remove("no-js");
  }
}

function toggleMenu() {
  const navMain = document.querySelector(".page-header") || {};
  const toggleButton = document.querySelector('.main-nav__toggle') || {};

  toggleButton.onclick = function () {
    navMain.classList.toggle("page-header--menu-opened");
  }
}

deleteClassNoJs();
toggleMenu();

