// first slider js implementation
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./assets/images/slide1.png",
    "./assets/images/slide2.png",
    "./assets/images/slide3.png",
  ];
  let currentImageIndex = 0;
  const button = document.getElementById("next");
  const imageElements = document.querySelectorAll(".slider .slide img");

  button.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].src = images[(currentImageIndex + i) % images.length];
    }
  });
});
