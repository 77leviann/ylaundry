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

    // Corrected code starts here
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
