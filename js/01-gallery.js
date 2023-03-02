import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const imgs = createImg(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", imgs);

function createImg(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
    
}

galleryEl.addEventListener("click", addModalimg)

function addModalimg(event) {
    event.preventDefault();
    if (!event.target.src)
        return
    const instance = basicLightbox.create(`
       <img src = "${event.target.dataset.source}">
`)
  instance.show();

  document.addEventListener("keydown", (event)=> {
  if (event.code === "Escape") {
    instance.close();
  }
});
}








