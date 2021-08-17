export class OverlaysAnimations {

    #rareOverlays;
    #secondOverlays;
    #loadingMask;

    constructor(rareOverlays, secondOverlays, loadingMask) {
        this.#rareOverlays = rareOverlays;
        this.#secondOverlays = secondOverlays;
        this.#loadingMask = loadingMask;

        this.#secondOverlays.forEach((item) => {
            this.#addSecondOverlayClass(item);
        });

        this.#rareOverlays.forEach((item) => {
            this.#addOverlayClass(item);
        });

        window.addEventListener('DOMContentLoaded', this.#removeLoadingMask.bind(this))
    }

    #addOverlayClass(item) {
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                entries.forEach((entry) => {
                    if (entry.target.classList.contains('link-project')) {
                        entry.target.classList.add('overlay-project');
                        entry.target.classList.add('is-revealed');
                    } else if (entry.target.classList.contains('mask') || entry.target.classList.contains('mask-about-me')) {
                        setTimeout(() => {
                            entry.target.classList.add('mask-revealed');
                        }, 750)
                    } else {
                        entry.target.classList.add('overlay');
                        setTimeout(() => {
                            entry.target.classList.add('is-revealed');
                        }, 1450)
                    }
                })
            }
        };

        const observer = new IntersectionObserver(onIntersection, {
            threshold: 0.25
        });

        observer.observe(item);
    }

    #addSecondOverlayClass(item) {
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                entries.forEach((entry) => {
                    entry.target.classList.add('is-revealed');
                })
            }
        };

        const observer = new IntersectionObserver(onIntersection, {
            threshold: 0.25
        });

        observer.observe(item);
    }

    #removeLoadingMask() {
        this.#loadingMask.classList.add('is-loaded')
    }
}