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
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".brandingbtn")) {
        document.querySelector(".branding").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".marketingbtn")) {
        document.querySelector(".marketing").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".disenowebbtn")) {
        document.querySelector(".disenoWeb").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".contacto-page")) {
        document.querySelector(".pagecontact").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".openinterna")) {
        document.querySelector(".portafolioInterna").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }

    /* cerrar */
    if (e.target.closest(".cerrarr")) {
        document.querySelector(".menupage").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closebranding")) {
        document.querySelector(".branding").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closemarketing")) {
        document.querySelector(".marketing").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closedisenoweb")) {
        document.querySelector(".disenoWeb").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".close-contact")) {
        document.querySelector(".pagecontact").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".closeinterna")) {
        document.querySelector(".portafolioInterna").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
})

gsap
    .timeline({
        repeat: -1,
        // default: {
        //     duration: 6,
        // }
    })
    .to('.flecha', {
        duration: 1,
        ease: "none",
        y: 30,
        ease: "power1.inOut"
    })
    .to('.flecha', {
        duration: 1,
        ease: "none",
        y: 0,
        ease: "power1.inOut"
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
            items: 3
        },
        800: {
            items: 3.5
        },
        1200: {
            items: 6
        },
    }
})
$('.footer-info').owlCarousel({
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
            items: 2
        },
        600: {
            items: 2.6
        },
        800: {
            items: 3
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})

$(document).ready(function () {
    $('.slider-clientes2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        // responsive: [
        //     {
        //         breakpoint: 426,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 651,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
});