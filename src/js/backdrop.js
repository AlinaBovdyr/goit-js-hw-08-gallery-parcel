const backdrop = document.querySelector('.lightbox__overlay');
const modal = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

export default function onModalClose() {
  window.removeEventListener('keydown', onKeyPress);
  modal.classList.remove("is-open");
  lightboxImg.setAttribute('src', '');
  lightboxImg.setAttribute('alt', '');
}

function onKeyPress(event) {
  if (event.key === 'Escape') {
    onModalClose();
  }

  const galleryImages = Array.from(galleryContainer.children).map(galleryItem => {
    return galleryItem.children[0].children[0];
  });
    
  const currentImage = galleryImages.find(galleryImage => {
    if (galleryImage.dataset.source === lightboxImg.getAttribute('src')) {
      return galleryImage
    }
  });
    
  const currentIndex = galleryImages.indexOf(currentImage);
  const lastImageNum = galleryImages.length - 1;
  
  if (event.key === 'ArrowRight') {
    if (currentIndex === lastImageNum) {
      return lightboxImg.setAttribute('src', galleryImages[0].dataset.source); 
    }
    lightboxImg.setAttribute('src', galleryImages[currentIndex + 1].dataset.source);
  } else if (event.key === 'ArrowLeft') {
    if (currentIndex === 0) {
     return lightboxImg.setAttribute('src', galleryImages[lastImageNum].dataset.source);
    }
    lightboxImg.setAttribute('src', galleryImages[currentIndex - 1].dataset.source);
  }
}

