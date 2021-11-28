import {Swiper, Navigation, Autoplay} from "swiper";

Swiper.use([Navigation, Autoplay]);

export class Slider {
    /**
     * @type {HTMLElement}
     */
    #element;

    /**
     * @type Object
     */
    #options;

    /**
     * @type {Swiper}
     */
    #instance;

    /**
     * @type {NodeListOf<Element>}
     */
    #sliderImageWrapper;

    /**
     * @type {{navigation: {nextEl: string, prevEl: string}, speed: number}}
     */
    #defaultOptions = {
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    /**
     * @param element
     * @param options
     */
    constructor(element, options = {}) {
        this.#element = element;
        this.#options = options;
    }

    init () {
        this.#initOnObserver();
    }

    #stopAutoplay () {
        this.#instance.el.addEventListener('mouseenter', ()=> {
            this.#instance.autoplay.stop();
        },false);
    }

    #startAutoplay () {
        this.#instance.el.addEventListener('mouseleave', ()=> {
            this.#instance.autoplay.start();
        },false);
    }

    #initOnObserver () {
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                this.#instance = new Swiper(this.#element, {...this.#defaultOptions, ...this.#options});
                this.#stopAutoplay();
                this.#startAutoplay();

                this.#sliderImageWrapper = document.querySelectorAll('[data-slider-image-wrapper]');
                this.#sliderImageWrapper.forEach((item, index) => {
                    if (index >= 3) {
                        item.style.opacity = '1';
                    }
                })
            }
        };
        const observer = new IntersectionObserver(onIntersection, {
            threshold: 0.25
        });
        observer.observe(this.#element);
    }
}