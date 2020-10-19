import "./css/styles.css";
import galleryItems from './js/gallery-items';
import createGalleryMarkup from './js/gallery-markup';
import onGalleryContainerClick from './js/modal';
import onModalClose from './js/backdrop'; 


const galleryContainer = document.querySelector('.js-gallery');

galleryContainer.insertAdjacentHTML(
  'afterbegin',
  createGalleryMarkup(galleryItems),
);

galleryContainer.addEventListener('click', onGalleryContainerClick);
backdrop.addEventListener('click', onModalClose);



