var cart = null;
var menu = true;

function toggleNavbar() {
    var navbar = document.getElementById("navbarSupportedContent");
    navbar.classList.toggle("show");
    document.querySelector(".navbar-toggler").classList.toggle("collapsed");
}

function handleScroll() {
    var header = document.getElementById('header');
    if (window.scrollY > 170) {
        header.classList.add('is-sticky');
    } else {
        header.classList.remove('is-sticky');
    }
}

document.addEventListener('scroll', handleScroll);