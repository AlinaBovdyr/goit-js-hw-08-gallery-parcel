const modal = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('.lightbox__image');

export default function onGalleryContainerClick(event) {
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


