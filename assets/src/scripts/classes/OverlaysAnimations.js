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
                    entry.target.classList.add('overlay');
                    setTimeout(() => {
                        entry.target.classList.add('is-revealed');
                    }, 700)
                })
            }
        };

        const observer = new IntersectionObserver(onIntersection);

        observer.observe(item);
    }
}