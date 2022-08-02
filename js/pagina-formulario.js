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

//Evento some menu

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

// Enviar E-Mail
function SendEmail(e) {
    var params = {
        to_name: 'Marcio Domingues',
        from_name: document.getElementById('name-form').value,
        service: document.getElementById('service-form').value,
        email_id: document.getElementById('email_id').value,
        tel: document.getElementById('tel').value,
        message: document.getElementById('message').value,
        reply_to: 'marcio.dominguez@hotmail.com'
    }
    console.log(params.email_id)
    if (params.email_id != '' || params.from_name != '' || params.tel != '') {
        console.log(params.tel)
        emailjs.send("service_lfgrifr", "template_8itnpoc", params).then(function (response) {
            window.alert('SUCCESS!', response.status);
        }, function (error) {
            window.alert('FAILED...', error)
        });
    }else{
        window.alert('Digite os campos obrigatórios...')
    }
}
$('button#send').click(function (e) {
    e.preventDefault();
    SendEmail()
});


