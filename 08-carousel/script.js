const imageContainer = document.querySelector(".image-container")
const IMAGES_COUNT = document.querySelectorAll("#imgs img").length

let idx = 0
setInterval(() => {
  if (++idx >= IMAGES_COUNT) idx = 0
  imageContainer.style.transform = `translateX(${-idx * 500}px)`;
}, 2000);
