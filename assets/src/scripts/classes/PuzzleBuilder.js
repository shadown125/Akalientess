export class PuzzleBuilder {

    #shapes = ["square", "triangle", "rectangle", "circle"];
    #colorable = ['background', 'text', 'number', 'shape'];

    #colors = {
        'black' : '#000000',
        'white' : '#FFFFFF',
        'blue' : '#1991F9',
        'red' : '#8C0C00',
        'yellow' : '#FFE335',
        'orange' : '#FF9900',
        'green' : '#46A04F',
        'purple' : '#A43AB5',
    }
    #questions = {
        'background color' : (d) => d.colors['background'],
        'text background color' : (d) => d.colors['text'],
        'number color' : (d) => d.colors['number'],
        'shape color' : (d) => d.colors['shape'],
        'color text' : (d) => d.text[0],
        'shape text' : (d) => d.text[1],
        'shape' : (d) => d.shape,
    }

    #generateSample(arr) {
        return arr[this.#generateRandomInt(arr.length)];
    }

    #generateRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateRandomPuzzle() {

        const shape = this.#generateSample(this.#shapes);
        const number = this.#generateRandomInt(9) + 1;

        const topText = this.#generateSample(Object.keys(this.#colors));
        const bottomText = this.#generateSample(this.#shapes);

        const colors = this.#colorable.reduce((obj, color) => {obj[color] = this.#generateSample(Object.keys(this.#colors)); return obj}, {});

        while(colors['text'] === colors['background']) {
            colors['text'] = this.#generateSample(Object.keys(this.#colors));
        }

        while(['background', 'text', 'number'].map(i => colors[i]).includes(colors['shape'])) {
            colors['shape'] = this.#generateSample(Object.keys(this.#colors));
        }

        return {
            'shape': shape,
            'number': number,
            'text': [topText, bottomText],
            'colors': colors,
        }
    }

    generateQuestionAndAnswer(nums, puzzles) {

        const positionOne = this.#generateRandomInt(nums.length);
        let tempPosTwo;
        do {tempPosTwo = this.#generateRandomInt(nums.length)} while(positionOne === tempPosTwo);
        const positionTwo = tempPosTwo;

        const firstQuestion = this.#generateSample(Object.keys(this.#questions));
        let tempSecondQuestion;
        do {tempSecondQuestion = this.#generateSample(Object.keys(this.#questions))} while(tempSecondQuestion === firstQuestion);
        const secondQuestion = tempSecondQuestion;

        const question =  `${firstQuestion} (${nums[positionOne]}) AND ${secondQuestion} (${nums[positionTwo]})`;
        const answer = this.#questions[firstQuestion](puzzles[positionOne]) + ' ' + this.#questions[secondQuestion](puzzles[positionTwo]);

        return [question, answer];
    }
}