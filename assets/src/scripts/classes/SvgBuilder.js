export class SvgBuilder {

    #shapeSvg = {
        "square" : (c) => `<rect fill=${c} stroke="#000" stroke-width="1" width="150" height="150"/>`,
        "triangle": (c) => `<polygon  fill=${c}  stroke="#000" stroke-width="1" points="0 150 75 0 150 150 0 150"/>`,
        "rectangle" : (c) =>`<rect y="30" fill=${c}  stroke="#000" stroke-width="1" class="shape" width="150" height="90"/>`,
        "circle" : (c) => `<circle fill=${c}  stroke="#000" stroke-width="1" cx="75" cy="75" r="75"/>`,
    }
    #puzzleDate;
    #textSize;
    #textWeight;
    #textColor;
    #shapeSVG;
    #topText;
    #bottomText;
    #numberText;

    constructor(puzzleData) {
        this.#puzzleDate = puzzleData
    }

    getPuzzle() {
        this.#textSize = 21;
        this.#textWeight = 'normal';
        this.#textColor = this.#puzzleDate.colors['text'];


        this.#shapeSVG = this.#createShape(this.#puzzleDate.shape, this.#puzzleDate.colors['shape']);
        this.#topText = this.#createText(this.#puzzleDate.text[0].toUpperCase(), this.#textColor, this.#textSize, this.#textWeight, 31);
        this.#bottomText = this.#createText(this.#puzzleDate.text[1].toUpperCase(), this.#textColor, this.#textSize, this.#textWeight, 67);
        this.#numberText = this.#createText(this.#puzzleDate.number, this.#puzzleDate.colors['number'], 60, 100, 50, 'Arial, Helvetica');

        return this.#createSvg([this.#shapeSVG, this.#topText, this.#bottomText, this.#numberText]);
    }

    #createSvg(elements) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"> ${elements.join("\n")} </svg>`;
    }

    #createShape(shape, color) {
        return this.#shapeSvg[shape](color);
    }

    #createText(text, color, size, weight, y, font) {
        return `<text 
        stroke="black" 
        fill="${color}" 
        stroke-width="1" 
        style="font-size:${size}px;" 
        font-weight="${weight}" 
        font-family="${font || 'Archivo Black'}, sans-serif"
        x="50%" 
        y="${y}%" 
        dominant-baseline="middle" 
        text-anchor="middle"
    >
        ${text}
    </text> `
    }

}