const URLactual = window.location;

const URLproyecto = [
    {
        id: 00,
        nombre: 'STATKRAFT',
        URL: 'http://127.0.0.1:5503/portfolio/item.html'
    },
    {
        id: 01,
        nombre: 'UCAL',
        URL: 'http://127.0.0.1:5503/portfolio/item3.html'
    },
    {
        id: 02,
        nombre: 'YAW',
        URL: 'http://127.0.0.1:5503/portfolio/item4.html'
    },
    {
        id: 03,
        nombre: 'OPEN',
        URL: 'http://127.0.0.1:5503/portfolio/item2.html'
    },
    {
        id: 04,
        nombre: 'OLIVOS DEL SUR',
        URL: 'http://127.0.0.1:5503/portfolio/item5.html'
    },
    {
        id: 05,
        nombre: 'CLASS & WORK',
        URL: 'http://127.0.0.1:5503/portfolio/item6.html'
    },
    {
        id: 06,
        nombre: 'LA TINKA',
        URL: 'http://127.0.0.1:5503/portfolio/item7.html'
    },
    {
        id: 07,
        nombre: 'NEO PROYECTS',
        URL: 'http://127.0.0.1:5503/portfolio/item8.html'
    }
];


document.body.addEventListener("mousemove", e => {
    gsap.to(".snake", {
        x : e.clientX,
        y : e.clientY,
        stagger : -0.05,
})
})

// document.body.addEventListener("mousemove", e => {
//     gsap.to(".cursor-eye", {
//         x : e.clientX,
//         y : e.clientY,
//         stagger : 0,
// })
// })

document.body.addEventListener("mousemove", e => {
    gsap.to(".ht-cursor", {
        x : e.clientX,
        y : e.clientY,
        // stagger : 0,
    })
})

/* Mostrar ver mas */

$( ".mostrarVermas" ).hover(function() {
    $( ".ht-cursor" ).addClass("mostrar");
  }, function() {
    $( ".ht-cursor" ).removeClass("mostrar");
  }
);

/* Ocultar snake */

$( ".gallery-container .gallery__item a" ).hover(function() {
    $( ".snake" ).hide( 0 );
  }, function() {
    $( ".snake" ).show( 1000 );
  }
);

$( "section.services .cards .card" ).hover(function() {
    $( ".snake" ).hide(0);
  }, function() {
    $( ".snake" ).show(0);
  }
);

window.addEventListener("load", () => {
    // document.querySelector(".main").classList.remove("hidden");
    // document.querySelector(".home").classList.add("active");
    /*  */
    document.querySelector(".loading").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".loading").style.display = "none";
    }, 600);
});


           
MyApp = {
    btnsiguiente: {
        init: function () {
            
$('.circulo').mouseleave(function(e){
    //   TweenMax.to(this, 0.3, {height: 150, width: 150});
      TweenMax.to('.circulo', 0.3,{scale:1, x: 0, y: 0});
    //   TweenMax.to('.circulo', 0.3,{translate:1, x: -150, y: -150});
    
    });
    
    $('.circulo').mouseenter(function(e){
    //   TweenMax.to(this, 0.3, {height: 200, width: 200});
    //   TweenMax.to('.circulo', 0.3,{scale:1.3});
    });
    
    $('.circulo').mousemove(function(e){   
      callParallax(e);
    });
    
    function callParallax(e){
      parallaxIt(e, '.circulo', 80);
      
    }
    
    function parallaxIt(e, target, movement){
      var $this = $('.circulo');
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
      
      TweenMax.to(target, 0.3, {
        x: (relX - $this.width()/2) / $this.width() * movement,
        y: (relY - $this.height()/2) / $this.height() * movement,
        ease: Power2.easeOut
      });
    }
        }
    },
    typeding: {
        init: function () {
            var typed = new Typed(".typing", {
                strings: ["marcas", "campañas", "experiencias"],
                typeSpeed: 100,
                backDelay: 5000,
                backSpeed: 100,
                loop: true
            });
            var typed = new Typed(".typing2", {
                strings: ["memorables", "que importan", "exitosas"],
                typeSpeed: 100,
                backDelay: 5000,
                backSpeed: 100,
                loop: true
            });

            // $("#equipo").hover(function () {
            //     $("#gif").css("display", "block");
            // }, function () {
            //     $("#gif").css("display", "none");
            // });
        }
    },

    categoria: {
        init: function () {
            const enlaces = document.querySelectorAll('#categorias a');
            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    evento.preventDefault();
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                    const categoria = evento.target.innerHTML;
                    if (categoria == "Todo") {
                        $(".gallery__item").show();
                    } else {
                        $(".gallery__item").not(`[data-categoria="${categoria}"]`).hide();
                        $(`.gallery__item[data-categoria="${categoria}"]`).show();
                    }
                })
            })
        }
    },

    celular: {
        init: function () {
            $('.b15__mouse').on('click', function(e){
                e.preventDefault();
                $(this).addClass('active')
            });
        }
    },
    flecha: {
        init: function () {
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
        }
    },
    loading: {
        init: function () {
            var totalAre = $('.loading .boxes .text p').length;
            setInterval(function(){                
                var actual = parseInt($('.loading .boxes .text p.active').index()) + parseInt(1);
                $('.loading .boxes .text p').removeClass('active');
                if(actual == totalAre ){
                    actual = 0;
                }
                $('.loading .boxes .text p').eq(actual).addClass('active');
            }, 250);
        }
    }
}

if ($('.home').length > 0) {
    MyApp.typeding.init();
}
if ($('.portafolio-page').length > 0) {
    MyApp.categoria.init();
}

if ($('.b15__mobile__scroll').length > 0) {
    MyApp.celular.init();
}

if ($('#home').length > 0) {
    MyApp.flecha.init();
}

if ($('.btn-siguiente').length > 0) {
    MyApp.btnsiguiente.init();
}

if ($('.loading').length > 0) {
    MyApp.loading.init();
}



var interruptorid = document.getElementById('btnmas');

/* elementos de contacto en pantalla */
const nombre = document.querySelector("#full-name");
const telephone = document.querySelector("#telephone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const oculto = document.querySelector("#oculto");

/* elementos del contacto en pagina */
const nombre1 = document.querySelector("#full-name2");
const telephone1 = document.querySelector("#telephone2");
const email1 = document.querySelector("#email2");
const message1 = document.querySelector("#message2");
const oculto1 = document.querySelector("#oculto2");

var valornombre = 1;
var valortelefono = 1;
var valoremail = 1;
var valormensaje = 0;

var result = valornombre * valortelefono * valoremail * valormensaje;

var valornombre2 = 1;
var valortelefono2 = 1;
var valoremail2 = 1;
var valormensaje2 = 0;

var result2 = valornombre2 * valortelefono2 * valoremail2 * valormensaje2;

var vol = new Boolean(false);

document.addEventListener("click", function (e) {
    if (e.target.closest("form .button")) {
        localStorage.setItem('url-actual', `${URLactual}`);
    }
    if ($('section.thankspage .top a').length > 0) {
        var link = localStorage.getItem("url-actual");
        $('.top a').attr("href", link);
    }  
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
    // if (e.target.closest(".openinterna")) {
    //     document.querySelector(".portafolioInterna").classList.toggle("open");
    //     jQuery('body').addClass('scrollhidden');
    // }

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
            if (email.value.length === 0 || email.value.charAt(0).includes(" ")) {
                valortelefono = 0;
                if ($("#email.focus-visible")) {
                    email.classList.add("falto");
                }
            } else {
                valoremail = 1;
            }
            if (message.value.length === 0 || message.value.charAt(0).includes(" ")) {
                valormensaje = 0;
                if ($("#message.focus-visible")) {
                    message.classList.add("falto");
                }
            } else {
                valormensaje = 1;
            }
            result = valornombre * valortelefono * valoremail * valormensaje;
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
            if (email1.value.length === 0 || email1.value.charAt(0).includes(" ")) {
                valoremail2 = 0;
                if ($("#email2.focus-visible")) {
                    email1.classList.add("falto");
                }
            } else {
                valoremail2 = 1;
            }
            if (message1.value.length === 0 || message1.value.charAt(0).includes(" ")) {
                valormensaje2 = 0;
                if ($("#message2.focus-visible")) {
                    message1.classList.add("falto");
                }
            } else {
                valormensaje2 = 1;
            }
            result2 = valornombre2 * valortelefono2 * valoremail2 * valormensaje2;
            if (result2 === 1) {
                if (oculto2.value.length === 0) {
                    onSubmit();
                }
            }
        }
    }

    // if (e.target.closest("#vermasitems")) {
    //     if (vol == false) {
    //         document.querySelector(".mostrariten").style.display = "block";
    //         document.querySelector(".mostrariten1").style.display = "block";
    //         document.getElementById("btnmas").innerHTML = "Ver menos proyectos";
    //         vol = true;
    //     } else {
    //         document.querySelector(".mostrariten").style.display = "none";
    //         document.querySelector(".mostrariten1").style.display = "none";
    //         document.getElementById("btnmas").innerHTML = "Ver más proyectos";
    //         vol = false;
    //     }
    // }
})

function onSubmit(token) {
    document.getElementById("fs-frm").submit();
}

function onSubmit2(token) {
    document.getElementById("fs-frm2").submit();
}

$('.marquee-with-options').marquee({
    speed: 22000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
});

$('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplaySpeed: 4500,
    autoplayHoverPause: false,
    touchDrag: false,
    mouseDrag: false,
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

$('.siguienteProyecto').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 5500,
    autoplayHoverPause: false,
    autoplaySpeed: 5500,
    responsive: {      
        1920: {
            items: 1
        },  
        425:{
            items: 1
        },
        0:{
            items: 1
        }
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
        1920: {
            items: 5
        },  
        1230: {
            items: 4
        },
        1024: {
            items: 3
        },
        900: {
            items: 3
        },
        700: {
            items: 2
        },
        600: {
            items: 1.5
        },
        500: {
            items: 1.5
        },
        426: {
            items: 1.5
        },
        0:{
            items: 1.5
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