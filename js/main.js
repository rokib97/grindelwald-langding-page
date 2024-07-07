// first slider script here
const uniqueSlides = document.querySelectorAll(".slide img");
const nextUniqueButton = document.getElementById("nextUnique");

nextUniqueButton.addEventListener("click", () => {
  const firstSlideSrc = uniqueSlides[0].src;

  for (let i = 0; i < uniqueSlides.length - 1; i++) {
    uniqueSlides[i].src = uniqueSlides[i + 1].src;
  }

  uniqueSlides[uniqueSlides.length - 1].src = firstSlideSrc;
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
