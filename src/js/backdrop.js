import onKeyPress from './key-press';

const modal = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

export default function onModalClose() {
  window.removeEventListener('keydown', onKeyPress);
  modal.classList.remove("is-open");
  lightboxImg.setAttribute('src', '');
  lightboxImg.setAttribute('alt', '');
}



