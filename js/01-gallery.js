import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrap = document.querySelector('.gallery');

const makeGallery = (arr) => {
  const galleryMarkupArr = arr.map((el) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      alt="${el.description}"
      data-source="${el.original}"
    />
  </a>
</div>`;
  });
  return galleryMarkupArr;
};

galleryWrap.insertAdjacentHTML(
  'afterbegin',
  makeGallery(galleryItems).join('')
);

const showBigImg = (event) => {
  event.preventDefault();
  const { target } = event;
  basicLightbox.create(`<img src="${target.dataset.source}">`).show();
};

galleryWrap.addEventListener('click', showBigImg);
