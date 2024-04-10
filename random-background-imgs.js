const images = [
  "/assets/img/background/snow-mountain.avif",
  "/assets/img/background/beach.avif",
  "/assets/img/background/jellyfish.avif",
  "/assets/img/background/lake.avif",
  "/assets/img/background/daisy.jpg",
  "/assets/img/background/rain.avif",
  "/assets/img/background/plant.avif",
  "/assets/img/background/mountain.avif",
  "/assets/img/background/fire.avif",
  "/assets/img/background/earth.avif",
]

function updateBackground(){
  const randomNumber = Math.floor(Math.random() * images.length);
  const newBackground = images[randomNumber];
  document.body.style.backgroundImage = `url(${newBackground})`;
}

updateBackground();
setInterval(updateBackground, 8000);
