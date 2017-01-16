import $ from "jquery";

class MobileMenu {
    constructor() {
        this.menuIcon = $("#nav-icon");
        this.mainNav = $(".main-nav");
        this.events();
    }

    events() {
        this.menuIcon.on("click", this.toggleMenu.bind(this));     
    }

    toggleMenu() {
        this.mainNav.toggleClass("main-nav--is-expanded");
		this.menuIcon.toggleClass("fa-bars fa-close");
    }
}

export default MobileMenu;