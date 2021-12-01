import {Swiper, Navigation, Autoplay} from "swiper";

Swiper.use([Navigation, Autoplay]);

export class Slider {

    readonly #element;

    readonly #options;

    #instance!: object;

    #sliderImageWrapper!: NodeListOf<Element>;

    #defaultOptions: any = {
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

    constructor(element: any, options = {}) {
        this.#element = element;
        this.#options = options;
    }

    init () {
        this.#initOnObserver();
    }

    #stopAutoplay () {
        // @ts-ignore
        this.#instance.el.addEventListener('mouseenter', ()=> {
            // @ts-ignore
            this.#instance.autoplay.stop();
        },false);
    }

    #startAutoplay () {
        // @ts-ignore
        this.#instance.el.addEventListener('mouseleave', ()=> {
            // @ts-ignore
            this.#instance.autoplay.start();
        },false);
    }

    #initOnObserver () {
        // @ts-ignore
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                this.#instance = new Swiper(this.#element, {...this.#defaultOptions, ...this.#options});
                this.#stopAutoplay();
                this.#startAutoplay();

                this.#sliderImageWrapper = document.querySelectorAll('[data-slider-image-wrapper]');
                this.#sliderImageWrapper.forEach((item, index) => {
                    if (index >= 3) {
                        // @ts-ignore
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