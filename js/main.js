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


var interruptorid = document.getElementById('btnmas');

/* elementos de contacto en pantalla */
const nombre = document.querySelector("#full-name");
const telephone = document.querySelector("#telephone");
const message = document.querySelector("#message");
const oculto = document.querySelector("#oculto");

/* elementos del contacto en pagina */
const nombre1 = document.querySelector("#full-name2");
const telephone1 = document.querySelector("#telephone2");
const message1 = document.querySelector("#message2");
const oculto1 = document.querySelector("#oculto2");

var valornombre = 1;
var valortelefono = 1;
var valormensaje = 0;

var result = valornombre * valortelefono * valormensaje;

var valornombre2 = 1;
var valortelefono2 = 1;
var valormensaje2 = 0;

var result2 = valornombre2 * valortelefono2 * valormensaje2;

var vol = new Boolean(false);

document.addEventListener("click", function (e) {
    if (e.target.closest(".menubtn")) {
        document.querySelector(".menupage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
        document.querySelector("body").classList.toggle("scrollhidden");
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

    if (e.target.closest(".btnform1")) {
        if (result === 0) {
            e.preventDefault();
            if (nombre.value.length === 0 || nombre.value.charAt(0).includes(" ")) {
                valornombre = 0;
                if ($("#full-name.focus-visible")) {
                    nombre.classList.add("falto");
                }
            } else {
                valornombre = 1;
            }
            if (telephone.value.length === 0 || telephone.value.charAt(0).includes(" ")) {
                valortelefono = 0;
                if ($("#telephone.focus-visible")) {
                    telephone.classList.add("falto");
                }
            } else {
                valortelefono = 1;
            }
            if (message.value.length === 0 || message.value.charAt(0).includes(" ")) {
                valormensaje = 0;
                if ($("#message.focus-visible")) {
                    message.classList.add("falto");
                }
            } else {
                valormensaje = 1;
            }
            result = valornombre * valortelefono * valormensaje;
            if (result === 1) {
                if (oculto.value.length === 0) {
                    onSubmit2();
                }
            }
        }
    }

    if (e.target.closest(".btnform2")) {
        if (result2 === 0) {
            e.preventDefault();
            if (nombre1.value.length === 0 || nombre1.value.charAt(0).includes(" ")) {
                valornombre2 = 0;
                if ($("#full-name2.focus-visible")) {
                    nombre1.classList.add("falto");
                }
            } else {
                valornombre2 = 1;
            }
            if (telephone1.value.length === 0 || telephone1.value.charAt(0).includes(" ")) {
                valortelefono2 = 0;
                if ($("#telephone2.focus-visible")) {
                    telephone1.classList.add("falto");
                }
            } else {
                valortelefono2 = 1;
            }
            if (message1.value.length === 0 || message1.value.charAt(0).includes(" ")) {
                valormensaje2 = 0;
                if ($("#telephone2.focus-visible")) {
                    message1.classList.add("falto");
                }
            } else {
                valormensaje2 = 1;
            }
            result2 = valornombre2 * valortelefono2 * valormensaje2;
            if (result2 === 1) {
                if (oculto2.value.length === 0) {
                    onSubmit();
                }
            }
        }
    }

    if (e.target.closest("#vermasitems")) {
        if (vol == false) {
            document.querySelector(".mostrariten").style.display = "block";
            document.querySelector(".mostrariten1").style.display = "block";
            document.getElementById("btnmas").innerHTML = "Ver menos proyectos";
            vol = true;
        } else {
            document.querySelector(".mostrariten").style.display = "none";
            document.querySelector(".mostrariten1").style.display = "none";
            document.getElementById("btnmas").innerHTML = "Ver más proyectos";
            vol = false;
        }

    }
})

function onSubmit(token) {
    document.getElementById("fs-frm").submit();
}

function onSubmit2(token) {
    document.getElementById("fs-frm2").submit();
}

gsap
    .timeline({
        repeat: -1,
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
    autoplayHoverPause: false,
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
    autoplayHoverPause: false,
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
    });
});