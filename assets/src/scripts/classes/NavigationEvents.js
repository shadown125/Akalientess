export class NavigationEvents {
    #closeButton;
    #menuButton;
    #navigationContainer;
    #mobileContainerAnimation;
    #navLinks;
    #contactButton;
    #contactSection;

    /**
     * @type {NodeListOf<Element>}
     */
    #sections;

    constructor(closeButton, menuButton, navigationContainer, mobileContainerAnimation, navLinks, contactButton, contactSection, sections) {
        this.#closeButton = closeButton;
        this.#menuButton = menuButton;
        this.#navigationContainer = navigationContainer;
        this.#mobileContainerAnimation = mobileContainerAnimation;
        this.#navLinks = navLinks;
        this.#contactButton = contactButton;
        this.#contactSection = contactSection;
        this.#sections = sections;

        this.#sections.forEach((section) => {
            this.#observeActiveSection(section);
        })

        this.#contactButton.forEach((item) => {
            item.addEventListener('click', this.#contactEvent.bind(this));
        });
        this.#navLinks.forEach((item) => {
            item.addEventListener('click', this.#addRemoveClass.bind(this));
        })
        this.#closeButton.addEventListener('click', this.#addRemoveClass.bind(this));
        this.#menuButton.addEventListener('click', this.#addRemoveClass.bind(this));
    }

    #observeActiveSection(section) {
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.#removeIsActiveClass();
                        this.#addIsActiveClassOnCurrentSection(entry);
                    }
                })
            }
        };

        const observer = new IntersectionObserver(onIntersection, {
            threshold: 0.25
        });

        observer.observe(section);
    }

    /**
     * @param entry
     */
    #addIsActiveClassOnCurrentSection (entry) {
        this.#navLinks.forEach((link) => {
            if (link.href) {
                if (entry.target.id === link.href.split('#')[1]) {
                    link.classList.add('is-active');
                }
            }
        })
    }

    #removeIsActiveClass () {
        this.#navLinks.forEach((link) => {
            if (link.classList.contains('is-active')) {
                link.classList.remove('is-active');
            }
        })
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

    #contactEvent() {
        if (this.#contactSection.classList.contains('is-active')) {
            this.#contactSection.classList.remove('is-active');
            this.#contactButton.forEach((item) => {
                item.classList.remove('is-active');
            })
            return;
        }
        this.#contactSection.classList.add('is-active');
        this.#contactButton.forEach((item) => {
            item.classList.add('is-active');
        })
    }
}