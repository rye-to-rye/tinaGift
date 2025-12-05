// FLOATING PARTICLES
const container = document.getElementById("float-container");
const icons = ["heart.png", "sparkle.png", "star.png", "flower.png"];

function makeIcon() {
  const img = document.createElement("img");
  const choice = icons[Math.floor(Math.random() * icons.length)];

  img.src = "Images/" + choice;
  img.classList.add("floating-icon");
  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = (4 + Math.random() * 3) + "s";

  container.appendChild(img);

  setTimeout(() => img.remove(), 7000);
}

setInterval(makeIcon, 500);


// FLUSH WAVE ON CLICK
const floatContainer = document.getElementById("float-container");

document.querySelectorAll(".interactive-icons img").forEach(icon => {
  icon.addEventListener("click", () => triggerFlush(icon.src));
});

function triggerFlush(iconSrc) {
  const count = 14 + Math.floor(Math.random() * 8);

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = iconSrc;
    img.classList.add("flush-icon");

    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = (1.1 + Math.random() * 0.5) + "s";

    floatContainer.appendChild(img);

    setTimeout(() => img.remove(), 2000);
  }
}



// GET ELEMENTS
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.querySelector(".login-submit");

const errorOverlay = document.getElementById("error-overlay");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim().toLowerCase();
  const age = parseInt(ageInput.value.trim());

  const nameCorrect = (name === "martina");
  const ageCorrect = (age === 20);

  if (!nameCorrect || !ageCorrect) {
    showError();
  } else {
    window.location.href = "collage.html";
  }
});

// ERROR POPUP FUNCTION
function showError() {
  errorOverlay.style.opacity = "1";
  errorOverlay.style.pointerEvents = "auto";

  setTimeout(() => {
    errorOverlay.style.opacity = "0";
    errorOverlay.style.pointerEvents = "none";
  }, 2000);
}

// FLOWER BURST under TINA
// LARGE FLOWER BURST IN FRONT OF TINA
// Infinite gentle flower stream
// Start flower stream after 10 seconds
setTimeout(() => {
  const stream = document.querySelector(".tina-flower-stream");

  setInterval(() => {
    const img = document.createElement("img");
    img.src = "Images/flower.png";
    img.classList.add("tina-flower");

    // Random horizontal spread under TINA
    img.style.left = (Math.random() * 450) + "px";

    // Slight variation in speed
    img.style.animationDuration = (4.5 + Math.random() * 1.5) + "s";

    stream.appendChild(img);

    // Remove after animation
    setTimeout(() => img.remove(), 6000);

  }, 350); // Gentle spawn rate (0.35s)
}, 10000); // Delay before stream begins (10 sec)






