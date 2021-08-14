import {ParticleFunctionality} from "./ParticleFunctionality";

export class Particle {

    #canvas;
    #ctx;
    #particlesArray = [];

    constructor(canvas) {
        this.#canvas = canvas;
        this.#ctx = canvas.getContext('2d');

        this.#canvas.width = window.innerWidth;
        this.#canvas.height = window.innerHeight;

        this.#init();
        this.#animate();

        window.addEventListener('resize', this.#reset.bind(this));
    }

    #reset() {
        this.#canvas.width = innerWidth;
        this.#canvas.height = innerHeight;
    }

    #init() {
        this.#particlesArray = [];
        let numberOfParticles = (this.#canvas.height * this.#canvas.width) / 34000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 5) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = '#b0abbe';

            this.#particlesArray.push(new ParticleFunctionality(x, y, directionX, directionY, size, color));
        }
    }

    #animate() {
        setTimeout(() => {
            requestAnimationFrame(this.#animate.bind(this));
        }, 15)
        this.#ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < this.#particlesArray.length; i++) {
            this.#particlesArray[i].update();
        }
        this.#connect();
    }

    #connect() {
        let opacity = 1;
        for (let a = 0; a < this.#particlesArray.length; a++) {
            for (let b = a; b < this.#particlesArray.length; b++) {
                let distance = (( this.#particlesArray[a].x - this.#particlesArray[b].x) * (this.#particlesArray[a].x - this.#particlesArray[b].x)) + ((this.#particlesArray[a].y - this.#particlesArray[b].y) * (this.#particlesArray[a].y - this.#particlesArray[b].y));
                if (distance < (this.#canvas.width / 7) * (this.#canvas.height / 7)) {
                    opacity = 1 - (distance / 20000);
                    this.#ctx.strokeStyle = 'rgba(176, 171, 190,' + opacity + ')';
                    this.#ctx.lineWidth = 1;
                    this.#ctx.beginPath();
                    this.#ctx.moveTo(this.#particlesArray[a].x, this.#particlesArray[a].y);
                    this.#ctx.lineTo(this.#particlesArray[b].x, this.#particlesArray[b].y);
                    this.#ctx.stroke();
                }
            }
        }
    }
}