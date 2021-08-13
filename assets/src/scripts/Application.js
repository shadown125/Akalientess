import {NavigationEvents} from "./classes/NavigationEvents";

export default class Application {
    constructor() {
        this.#initNavigationEvents();
    }

    #initNavigationEvents() {
        const closeButton = document.querySelector('[data-button-close]');
        const menuButton = document.querySelector('[data-button-menu]');
        const navigationContainer = document.querySelector('[data-navigation-container]');
        const mobileContainerAnimation = document.querySelector('[data-mobile-container-animation]');

        new NavigationEvents(closeButton, menuButton, navigationContainer, mobileContainerAnimation);
    }
}