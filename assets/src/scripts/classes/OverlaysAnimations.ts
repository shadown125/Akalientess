export class OverlaysAnimations {

    #rareOverlays;
    #secondOverlays;
    #loadingMask;

    // @ts-ignore
    constructor(rareOverlays, secondOverlays, loadingMask) {
        this.#rareOverlays = rareOverlays;
        this.#secondOverlays = secondOverlays;
        this.#loadingMask = loadingMask;
// @ts-ignore
        this.#secondOverlays.forEach((item) => {
            this.#addSecondOverlayClass(item);
        });
// @ts-ignore
        this.#rareOverlays.forEach((item) => {
            this.#addOverlayClass(item);
        });

        window.addEventListener('DOMContentLoaded', this.#removeLoadingMask.bind(this))
    }
// @ts-ignore
    #addOverlayClass(item) {
        // @ts-ignore
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                // @ts-ignore
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
// @ts-ignore
    #addSecondOverlayClass(item) {
        // @ts-ignore
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                // @ts-ignore
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