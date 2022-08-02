//Função Scroll Active-Menu



// Função Hamburguer Menu-List

class MobileNavBar {
    constructor(mobMenu, navList, navLinks) {
        this.mobMenu = document.querySelector(mobMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        //console.log('do')
        this.navLinks.forEach((link, index) => {
            console.log()
            link.style.animation
                ? (link.style.animation = '')
                : (link.style.animation = `navLinkFade 0.35s ease forwards ${index / 7 + 0.2}s`)
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addEventClick() {
        this.mobMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobMenu) {
            this.addEventClick()
        }
        return this
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".menu-superior",
    ".menu-superior > li",
);

mobileNavBar.init()



// Função Active Hover Menu

const li = document.querySelectorAll(".links");

const sec = document.querySelectorAll("section");

function activeMenu() {

    let len = sec.length;

    while (--len && window.scrollY + 500 < sec[len].offsetTop) { }

    li.forEach(ltx => ltx.classList.remove("activeMenu"));

    li[len].classList.add("activeMenu");
}

//activeMenu();

window.addEventListener("scroll", activeMenu);

// Função Scroll-Hide Menu

const menu = document.querySelector(".div-menu");
const menuToggle = document.querySelector('ul.menu-superior');
const toggle = document.querySelector('div.mobile-menu')
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        menu.classList.add("nav--hidden");
        if (menuToggle.classList.contains('active') && toggle.classList.contains('active')) {
            console.log('Retirou')
            toggle.classList.add('active')
            menuToggle.classList.remove("active")
        }
    } else {
        if (!menuToggle.classList.contains('active')) {
        }
        menu.classList.remove("nav--hidden");
        if (menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active')
        }
        toggle.classList.remove('active')
    };
    lastScrollY = window.scrollY
});

//Carrouse Slide Comentary

(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var carousel = function () {
        $('.featured-carousel').owlCarousel({
            center: false,
            loop: false,
            arrow: true,
            autoplay: true,
            rewind:true,
            margin: 20,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: true,
            navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                825:{
                    items: 2
                },
                1300:{
                    items: 3
                },
            }
        });

    };
    carousel();
})(jQuery);

//Seção Serviço Mostrar

$(document).ready(function () {
    $('div#sec-winch img').mouseenter(function () {
        console.log('foi')
        $('div.service-show-winch').removeClass('d-none');
    });
    $('div#sec-winch img').mouseleave(function () {
        console.log('foi')
        $('div.service-show-winch').addClass('d-none');
    });

    $('div#sec-truck img').mouseenter(function () {
        console.log('foi')
        $('div.service-show-truck').removeClass('d-none');
    });
    $('div#sec-truck img').mouseleave(function () {
        console.log('foi')
        $('div.service-show-truck').addClass('d-none');
    });
});

