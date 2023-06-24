
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


// Products Details Image Slides
$(document).ready(function () {
    var owl = $(".products-details-image-slides");
    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        items: 1,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });
});

// Get references to the tab elements
const tabs = document.querySelectorAll('#tabs li');

// Get references to the tab content elements
const tabContents = document.querySelectorAll('.content');

// Add click event listeners to the tabs
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and add it to the clicked tab
        tabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');

        // Hide all tab content and display the corresponding content for the clicked tab
        tabContents.forEach((content) => content.classList.remove('show'));
        tabContents[index].classList.add('show');
    });
});

// Initialize the accordion
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll("[data-accordion-component='AccordionItem']");

    accordionItems.forEach(function (item) {
        const button = item.querySelector(".accordion__button");
        const panel = item.querySelector(".accordion__panel");

        button.addEventListener("click", function () {
            const expanded = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", !expanded);
            panel.hidden = expanded;
        });
    });
});
