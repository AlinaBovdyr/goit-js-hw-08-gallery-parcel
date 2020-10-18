import "./css/styles.css";
import galleryItems from './js/gallery-items';
import createGalleryMarkup from './js/gallery-markup'; 
import onGalleryContainerClick from './js/gallery-container';
import onModalClose from './js/modal-close';

const galleryContainer = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('.lightbox__image');
const backdrop = document.querySelector('.lightbox__overlay');

galleryContainer.insertAdjacentHTML(
  'afterbegin',
  createGalleryMarkup(galleryItems),
);

galleryContainer.addEventListener('click', onGalleryContainerClick);
backdrop.addEventListener('click', onModalClose);



