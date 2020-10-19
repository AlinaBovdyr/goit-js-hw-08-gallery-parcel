import "./css/styles.css";
import galleryItems from './js/gallery-items';
import createGalleryMarkup from './js/gallery-markup';
import onModalClose from './js/backdrop'; 
import onKeyPress from './js/key-press';


const galleryContainer = document.querySelector('.js-gallery');
const backdrop = document.querySelector('.lightbox__overlay');
const modal = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('.lightbox__image');

galleryContainer.insertAdjacentHTML(
  'afterbegin',
  createGalleryMarkup(galleryItems),
);

galleryContainer.addEventListener('click', onGalleryContainerClick);
backdrop.addEventListener('click', onModalClose);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const imageEl = event.target

  if (!imageEl.classList.contains('gallery__image')) {
    return
  }
  
  openModal();

  changeLightboxImgAttributes(imageEl);

  closeModal();
}

function openModal() {
  modal.classList.add("is-open");
  window.addEventListener('keydown', onKeyPress);
}

function closeModal() {
  closeModalBtn.addEventListener('click', onModalClose)
}

function changeLightboxImgAttributes(image) {
  const urlOriginal = image.dataset.source;
  const altAttribute = image.alt;
  lightboxImg.setAttribute('src', `${urlOriginal}`);
  lightboxImg.setAttribute('alt', `${altAttribute}`);
}
