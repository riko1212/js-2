import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWrap = document.querySelector('.gallery');

const makeGallery = (arr) => {
  const galleryMarkupArr = arr.map((el) => {
    return `<a class="gallery__item" href="${el.original}">
              <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
            </a>`;
  });
  return galleryMarkupArr;
};
galleryWrap.insertAdjacentHTML(
  'afterbegin',
  makeGallery(galleryItems).join('')
);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
