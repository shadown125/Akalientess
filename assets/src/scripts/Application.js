import {NavigationEvents} from "./classes/NavigationEvents";
import {OverlaysAnimations} from "./classes/OverlaysAnimations";
import {Particle} from "./classes/Particle";
import {HackingGame} from "./classes/HackingGame";

export default class Application {
    constructor() {
        this.#initNavigationEvents();
        this.#initOverlaysAnimations();
        this.#initParticle();
        this.#initHackingGame();
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
        const secondOverlays = document.querySelectorAll('[data-second-overlay]');
        const loadingMask = document.querySelector('[data-loading-mask]');

        new OverlaysAnimations(rareOverlays, secondOverlays, loadingMask);
    }
    #initParticle() {
        const canvas = document.querySelector('[data-canvas]');

        new Particle(canvas);
    }
    #initHackingGame() {
        const hackingButton = document.querySelector('[data-hacking-button]');
        const numberContainer = document.querySelector('[data-number-container]');
        const textContainer = document.querySelector('[data-text-container]');
        const answerReveal = document.querySelector('[data-answer-reveal]');
        const answerQuestion = document.querySelector('[data-answer-question]');
        const revealedSubmittedText = document.querySelector('[data-revealed-submitted-text]');
        const loadingText = document.querySelector('[data-loading-text]');
        const consoleContainer = document.querySelector('[data-console-container]');
        const countdown = document.querySelector('[data-answer-countdown]');
        const inputElement = document.querySelector('[data-answer-input]');
        const answerBoxDescription = document.querySelector('[data-answer-box-description]');
        const console = document.querySelector('[data-console]');
        const asciiArt = document.querySelector('[data-ascii-art]');

        new HackingGame(
            hackingButton,
            numberContainer,
            textContainer,
            answerReveal,
            answerQuestion,
            revealedSubmittedText,
            loadingText,
            consoleContainer,
            countdown,
            inputElement,
            answerBoxDescription,
            console,
            asciiArt
        );
    }
}
