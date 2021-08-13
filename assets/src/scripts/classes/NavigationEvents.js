export class NavigationEvents {
    #closeButton;
    #menuButton;
    #navigationContainer;
    #mobileContainerAnimation;

    constructor(closeButton, menuButton, navigationContainer, mobileContainerAnimation) {
        this.#closeButton = closeButton;
        this.#menuButton = menuButton;
        this.#navigationContainer = navigationContainer;
        this.#mobileContainerAnimation = mobileContainerAnimation;

        this.#closeButton.addEventListener('click', this.#addRemoveClass.bind(this));
        this.#menuButton.addEventListener('click', this.#addRemoveClass.bind(this));
    }

    #addRemoveClass() {
        if (this.#closeButton.classList.contains('is-active')) {
            this.#closeButton.classList.remove('is-active');
            this.#navigationContainer.classList.remove('is-active');
            this.#mobileContainerAnimation.classList.remove('is-active');
            return;
        }
        this.#navigationContainer.classList.add('is-active');
        this.#mobileContainerAnimation.classList.add('is-active');
        this.#closeButton.classList.add('is-active');
    }
}