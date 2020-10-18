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

export function openModal() {
  modal.classList.add("is-open");
  window.addEventListener('keydown', onKeyPress);
}

export function closeModal() {
  closeModalBtn.addEventListener('click', onModalClose)
}

export function changeLightboxImgAttributes(image) {
  const urlOriginal = image.dataset.source;
  const altAttribute = image.alt;
  lightboxImg.setAttribute('src', `${urlOriginal}`);
  lightboxImg.setAttribute('alt', `${altAttribute}`);
}