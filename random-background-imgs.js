const images = [
  "/assets/img/background/black.jpg",
  "/assets/img/background/branch.jpg",
  "/assets/img/background/fog.jpg",
  "/assets/img/background/forest.jpg",
  "/assets/img/background/rain.jpg",
  "/assets/img/background/wood.jpg",
]

function updateBackground(){
  const randomNumber = Math.floor(Math.random() * images.length);
  const newBackground = images[randomNumber];
  document.body.style.backgroundImage = `url(${newBackground})`;
}

updateBackground();
setInterval(updateBackground, 8000);
