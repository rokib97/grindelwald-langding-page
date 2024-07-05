document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  document.getElementById("next").addEventListener("click", function () {
    // Increment current index
    currentIndex = (currentIndex + 1) % totalSlides;

    // Update slider to show current slide
    updateSlider();

    // Update button text to match current slide
    updateButton(currentIndex);
  });

  function updateSlider() {
    slides.forEach((slide, index) => {
      let position = index - currentIndex;
      if (position < 0) position += totalSlides;
      slide.style.left = `${position * 100}%`;
    });
  }

  function updateButton(currentIndex) {
    // Update button text based on current slide index
    const buttonText = slides[currentIndex].querySelector("h2").textContent;
    document.querySelector(".text-slider-logo h2").textContent = buttonText;
  }
});
