// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach(element => {
    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = element.original;
    const image = document.createElement("img");
    image.classList.add('gallery__image');
    image.src = element.preview;
    image.setAttribute('title', element.description);
    image.alt = element.description;

    linkEl.append(image);
	items.push(linkEl)
})
gallery.append(...items);

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})

