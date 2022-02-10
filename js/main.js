var typed = new Typed(".typing", {
    strings: ["experiencias", "contenidos", "------"],
    typeSpeed: 100,
    backDelay: 2000,
    backSpeed: 100,
    loop: true
});
var typed = new Typed(".typing2", {
    strings: ["memorables", "impactantes", "virales"],
    typeSpeed: 100,
    backDelay: 2000,
    backSpeed: 100,
    loop: true
});

document.addEventListener("click", function (e) {
    if (e.target.closest(".menubtn")) {
        document.querySelector(".menupage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".brandingbtn")) {
        document.querySelector(".branding").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".marketingbtn")) {
        document.querySelector(".marketing").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".disenowebbtn")) {
        document.querySelector(".disenoWeb").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".contacto-page")) {
        document.querySelector(".pagecontact").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
    /* cerrar */
    if (e.target.closest(".cerrarr")) {
        document.querySelector(".menupage").classList.toggle("open");
        // jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closebranding")) {
        document.querySelector(".branding").classList.toggle("open");
        // jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closemarketing")) {
        document.querySelector(".marketing").classList.toggle("open");
        // jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closedisenoweb")) {
        document.querySelector(".disenoWeb").classList.toggle("open");
        // jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".close-contact")) {
        document.querySelector(".pagecontact").classList.toggle("open");
        // jQuery('body').removeClass('scrollhidden');
    }
})

$('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 3
        },
        600: {
            items: 4
        },
        800: {
            items: 4
        },
        1200: {
            items: 6
        },
    }
})