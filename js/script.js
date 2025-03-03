//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

//Hamburger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//Carousel
let currentIndex = 0;

function showSlide(index) {
  const carouselInner = document.querySelector(".carousel-inner");
  const totalItems = document.querySelectorAll(".carousel-item").length;

  // Handle wrap-around for infinite carousel
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }

  // Calculate the offset and apply the transform
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Optional: Auto-play the carousel
setInterval(nextSlide, 7000);

//Carousel Product
const carousel = document.getElementById("carousel-product");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const itemsProduct = document.querySelectorAll(".item-product");
let current = 0;

function moveCarousel(direction) {
  if (direction === "next") {
    current = (current + 1) % itemsProduct.length;
  } else if (direction === "prev") {
    current = (current - 1 + itemsProduct.length) % itemsProduct.length;
  }
  const offSet = -current * 100;
  carousel.style.transform = `translateX(${offSet}%)`;
}

nextBtn.addEventListener("click", () => moveCarousel("next"));
prevBtn.addEventListener("click", () => moveCarousel("prev"));

// setInterval(() => moveCarousel("next"), 3000);
