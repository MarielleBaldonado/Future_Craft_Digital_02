
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
$(document).ready(function () {
    $("#tabs li").click(function () {
        var tabId = $(this).attr("id");
        $(".content").removeClass("show"); // Hide all content sections
        $("#" + tabId + "_content").addClass("show"); // Show the corresponding content section

        $("#tabs li").removeClass("active").addClass("inactive"); // Update tab classes
        $(this).removeClass("inactive").addClass("active");
    });

    // Set the initial active tab
    $("#tabs li.active").click();
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
