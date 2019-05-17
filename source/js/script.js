"use strict";

(function () {
  const elements = document.getElementsByClassName("no-js") || [];

  while (elements.length) {
    elements[0].classList.remove("no-js");
  }
}());

function toggleMenu() {
  const navMain = document.querySelector(".page-header") || {classList: []};
  const toggleButton = document.querySelector('.page-header__toggle') || {};

  toggleButton.onclick = function () {
    navMain.classList.toggle("page-header--menu-opened");
  }
}

function defineModalActions() {

  const modal = document.querySelector('.modal--add-to-cart');
  const modalOverlay = document.querySelector('.modal__overlay');
  const openModalButtons = document.querySelectorAll(".open-add-to-cart-modal-js");

  if (!modal || !modalOverlay) return;

  Array.prototype.forEach.call(openModalButtons || [], function (button) {
    button.addEventListener('click', function () {
      showModal();
    });
  });

  modalOverlay.onclick = function () {
    closeModal();
  };

  const showModal = function () {
    modalOverlay.classList.add('modal__overlay--show');
    modal.classList.add('modal--show');
  };

  const closeModal = function () {
    modalOverlay.classList.remove("modal__overlay--show");
    modal.classList.remove("modal--show");
  };

  document.querySelector("form").addEventListener("submit", function (event) {
    closeModal();
    event.preventDefault();
  });
}

defineModalActions();
toggleMenu();
