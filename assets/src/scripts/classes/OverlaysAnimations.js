export class OverlaysAnimations {

    #rareOverlays;

    constructor(rareOverlays) {
        this.#rareOverlays = rareOverlays;

        this.#rareOverlays.forEach((item) => {
            this.#addOverlayClass(item);
        })
    }

    #addOverlayClass(item) {
        const onIntersection = (entries) => {
            if(entries[0]['intersectionRatio'] !== 0) {
                entries.forEach((entry) => {
                    if (entry.target.classList.contains('link-project')) {
                        entry.target.classList.add('overlay-project');
                        entry.target.classList.add('is-revealed');
                    } else if (entry.target.classList.contains('mask')) {
                        entry.target.classList.add('mask-revealed');
                    } else {
                        entry.target.classList.add('overlay');
                        setTimeout(() => {
                            entry.target.classList.add('is-revealed');
                        }, 700)
                    }
                })
            }
        };

        const observer = new IntersectionObserver(onIntersection, {
            threshold: 0.5
        });

        observer.observe(item);
    }
}