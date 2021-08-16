import {NavigationEvents} from "./classes/NavigationEvents";
import {OverlaysAnimations} from "./classes/OverlaysAnimations";
import {Particle} from "./classes/Particle";

export default class Application {
    constructor() {
        this.#initNavigationEvents();
        this.#initOverlaysAnimations();
        this.#initParticle();
    }

    #initNavigationEvents() {
        const closeButton = document.querySelector('[data-button-close]');
        const menuButton = document.querySelector('[data-button-menu]');
        const navigationContainer = document.querySelector('[data-navigation-container]');
        const mobileContainerAnimation = document.querySelector('[data-mobile-container-animation]');
        const navLinks = document.querySelectorAll('[data-nav-link]');
        const navContactButton = document.querySelectorAll('[data-nav-contact]');
        const contactSection = document.querySelector('[data-contact-section]');

        new NavigationEvents(closeButton,
            menuButton,
            navigationContainer,
            mobileContainerAnimation,
            navLinks,
            navContactButton,
            contactSection
        );
    }
    #initOverlaysAnimations() {
        const rareOverlays = document.querySelectorAll('[data-overlay]');

        new OverlaysAnimations(rareOverlays);
    }
    #initParticle() {
        const canvas = document.querySelector('[data-canvas]');

        new Particle(canvas);
    }
}
