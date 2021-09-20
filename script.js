const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", mobileMenu)

function mobileMenu () {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
};


