export class NavigationEvents {
    #closeButton;
    #menuButton;
    #navigationContainer;

    constructor(closeButton, menuButton, navigationContainer) {
        this.#closeButton = closeButton;
        this.#menuButton = menuButton;
        this.#navigationContainer = navigationContainer;

        this.#closeButton.addEventListener('click', this.#addRemoveClass.bind(this));
        this.#menuButton.addEventListener('click', this.#addRemoveClass.bind(this));
    }

    #addRemoveClass() {
        if (this.#closeButton.classList.contains('is-active')) {
            this.#closeButton.classList.remove('is-active');
            this.#navigationContainer.classList.remove('is-active');
            return;
        }
        this.#navigationContainer.classList.add('is-active');
        this.#closeButton.classList.add('is-active');
    }
}