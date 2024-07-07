// first slider script here
document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./assets/images/slide1.png",
    "./assets/images/slide2.png",
    "./assets/images/slide3.png",
  ];
  let currentImageIndex = 0;
  const button = document.getElementById("next");
  const imageElements = document.querySelectorAll(".slider .slide img");

  const changeSlide = () => {
    console.log("object");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].src = images[(currentImageIndex + i) % images.length];
    }
  };

  button.addEventListener("click", changeSlide);

  // Set interval to change slide every 5 seconds
  setInterval(changeSlide, 5000);
});

// second slider script here
const slider = document.querySelector(".unique-slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
prevBtn.addEventListener("click", () => {
  slider.style.transition = "none";
  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  slider.style.transform = "translateX(-378px)";
  requestAnimationFrame(() => {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = "translateX(0)";
  });
});

nextBtn.addEventListener("click", () => {
  slider.style.transition = "none";
  slider.appendChild(slider.firstElementChild);
  slider.style.transform = "translateX(378px)";
  requestAnimationFrame(() => {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = "translateX(0)";
  });
});
