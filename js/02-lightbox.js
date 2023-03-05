import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const pictures = createImg(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", pictures);

function createImg(galleryItems) {
    return galleryItems.map(({preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    }).join("");
};

var lightbox = new SimpleLightbox('.gallery a',
    {
     captionsData: 'alt',
     captionDelay: 250,
     scrollZoom: false, });