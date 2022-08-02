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