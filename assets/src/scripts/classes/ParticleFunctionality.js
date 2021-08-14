export class ParticleFunctionality {

    constructor(x, y, directionX, directionY, size, color) {
        this.canvas = document.querySelector('[data-canvas]');
        this.ctx = this.canvas.getContext('2d');

        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;

        this.mouse = {
            x: null,
            y: null,
            radius: (this.canvas.height / 180) * (this.canvas.width / 180)
        }

        window.addEventListener('mousemove', this.mouseMovement.bind(this));
        window.addEventListener('mouseout', this.#resetMouseCoordinate.bind(this));

        window.addEventListener('resize', this.#reset.bind(this));
    }

    #resetMouseCoordinate() {
        this.mouse.x = undefined;
        this.mouse.y = undefined;
    }

    #reset() {
        this.mouse.radius = (this.canvas.height / 180) * (this.canvas.width / 180)
    }

    mouseMovement(event) {
        this.mouse.x = event.x;
        this.mouse.y = event.y;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update() {
        if (this.x > this.canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let dx = this.mouse.x - this.x;
        let dy = this.mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.mouse.radius + this.size) {
            if (this.mouse.x < this.x && this.x < this.canvas.width - this.size * 10) {
                this.x += 10;
            }
            if (this.mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (this.mouse.y < this.y && this.y < this.canvas.height - this.size * 10) {
                this.y += 10;
            }
            if (this.mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}