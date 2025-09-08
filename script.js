const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const header = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-item");

let current = 0;
let slideInterval;

// Show specific slide
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
};

const nextSlide = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

const prevSlide = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

next.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prev.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Auto Slide every 5 seconds
const startAutoSlide = () => {
  slideInterval = setInterval(nextSlide, 5000);
};

const resetAutoSlide = () => {
  clearInterval(slideInterval);
  startAutoSlide();
};

startAutoSlide();

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  navLinks.classList.toggle("show");
});

// Active link highlight
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
    navLinks.classList.remove("show");
    menuToggle.classList.remove("open");
  });
});
// SEARCH OVERLAY FUNCTIONALITY
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  document.getElementById("searchInput").focus();
});

closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchOverlay.classList.remove("active");
  }
});



// moderrn slider

