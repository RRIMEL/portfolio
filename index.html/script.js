// AOS Animation
AOS.init({
  duration: 1000,
  once: true,
});

// Typing Animation
const typed = new Typed("#typing", {
  strings: [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Enthusiast",
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Dark Light Mode
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

let lightMode = false;

themeToggle.addEventListener("click", () => {
  lightMode = !lightMode;

  if (lightMode) {
    body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove("light-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Particle Background
const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 80; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = Math.random() * 5 + 5 + "s";
  particle.style.opacity = Math.random();

  particlesContainer.appendChild(particle);
}