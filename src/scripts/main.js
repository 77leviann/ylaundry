document.addEventListener('DOMContentLoaded', function () {
    const servicesLink = document.querySelector('a[href="#services"]');
    const cardsContainer = document.querySelector('.card');

    servicesLink.addEventListener('click', function (event) {
        event.preventDefault();
        cardsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    const aboutLink = document.querySelector('a[href="#about"]');
    const ownerContainer = document.querySelector('.owner-info');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();
        ownerContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


    const menuIcon = document.querySelector(".app-bar__menu");
    const navList = document.querySelector(".nav-list");
    const mainContent = document.querySelector("main");

    const navItems = document.querySelectorAll(".nav-item a");

    mainContent.addEventListener("click", () => {
        navList.classList.remove("active");
    });

    navItems.forEach((navItem) => {
        navItem.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 3000); 
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

