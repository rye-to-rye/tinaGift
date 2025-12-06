// 1) Images to show in the slideshow
const slideImages = [
  "slide1.JPG",
  "slide2.png",
  "slide3.jpg",
  "slide4.png",
  "slide5.jpg",
  "slide6.jpg",
  "slide7.png",
  "slide8.jpg",
  "slide9.jpg",
  "slide10.jpg",
  "slide11.png",
  "slide12.png",
  "slide13.png",
  "slide14.png",
  "slide15.PNG",
  "slide16.png"
];

// 2) Get the slideshow container inside .slide-show
const slideShowDiv = document.querySelector(".slide-show .slideshow-images");

if (!slideShowDiv) {
  console.error("No .slideshow-images found inside .slide-show");
} else {
  // 3) Create <img> elements for each slide
  slideImages.forEach((file, index) => {
    const img = document.createElement("img");
    img.src = `slideShow/${file}`;
    if (index === 0) img.classList.add("active"); // first image visible
    slideShowDiv.appendChild(img);
  });

  // 4) Slideshow state
  let currentIndex = 0;
  const imgs = document.querySelectorAll(".slide-show .slideshow-images img");
  const total = imgs.length;

  if (total === 0) {
    console.error("No images were loaded into the slideshow.");
  }

  function showSlide(i) {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[i].classList.add("active");
  }

  function nextSlide() {
    if (total === 0) return;
    currentIndex = (currentIndex + 1) % total;
    showSlide(currentIndex);
  }

  function prevSlide() {
    if (total === 0) return;
    currentIndex = (currentIndex - 1 + total) % total;
    showSlide(currentIndex);
  }

  // 5) Auto slideshow every 6 seconds
  let slideInterval = setInterval(nextSlide, 6000);

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
  }

  // 6) Button events
  const nextBtn = document.querySelector(".slide-show .slideshow-btn.right");
  const prevBtn = document.querySelector(".slide-show .slideshow-btn.left");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });
  } else {
    console.error("Right button (.slideshow-btn.right) not found");
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });
  } else {
    console.error("Left button (.slideshow-btn.left) not found");
  }
}