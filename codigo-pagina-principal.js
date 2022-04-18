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

    while (--len && window.scrollY + 300 < sec[len].offsetTop) { }

    li.forEach(ltx => ltx.classList.remove("activeMenu"));

    li[len].classList.add("activeMenu");
}

activeMenu();

window.addEventListener("scroll", activeMenu);

// Função Scroll-Hide Menu

const menu = document.querySelector(".div-menu");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        menu.classList.add("nav--hidden");
    } else {
        menu.classList.remove("nav--hidden");
    };
    lastScrollY = window.scrollY
});


// Função mouseOn-imagem


class ImgService {
    constructor(serviceImg, divMsg) {
        this.serviceImg = document.querySelector(serviceImg);
        this.divMsg = document.querySelector(divMsg)
    }
    mouseOn() {
        this.serviceImg.addEventListener('mouseover',() => {
            this.divMsg.classList.add('msg-serv')
        });
    }
    mouseOut() {
        this.serviceImg.addEventListener('mouseout',()=>{
            this.divMsg.classList.remove('msg-serv')
        })
    }
}

const imgWinch = new ImgService('#img-guincho','.msg-guincho');
const imgTruck = new ImgService('#img-caminhao','.msg-caminhao');
imgWinch.mouseOn();
imgWinch.mouseOut()
imgTruck.mouseOn();
imgTruck.mouseOut()
