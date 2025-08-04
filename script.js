window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about");
  if (!aboutSection) return;

  const rect = aboutSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight - 150;

  aboutSection.classList.toggle("change", isVisible);
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
}

if (slides.length > 0) {
  showSlide(currentSlide);
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    setTimeout(() => {
      this.reset();
    }, 3000); 
  });
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
  });
}
