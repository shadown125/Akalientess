import { PuzzleBuilder } from './PuzzleBuilder.js'
import { SvgBuilder } from './SvgBuilder.js'

export class PuzzleHandler {

    #progressBar = document.querySelector('[data-answer-progress-bar]');
    #inputElement = document.querySelector('[data-answer-input]');
    #puzzleTime = 10;
    #puzzleAmount = 4;
    #numberContainer = document.querySelector('[data-number-container]');
    #answerQuestion = document.querySelector('[data-answer-question]');

    addDelay(seconds) {
        return new Promise(res => setTimeout(res, seconds * 1000));
    }

    #shuffleArray(arr) {
        return arr.map((a) => ({sort: Math.random(), value: a})).sort((a, b) => a.sort - b.sort).map((a) => a.value);
    }

    async doPuzzle(){
        this.#answerQuestion.classList.add('hidden');
        this.#numberContainer.innerHTML = '';

        const squares = [...Array(this.#puzzleAmount).keys()].map(i => {
            let square = document.createElement('div');
            square.id = `square-${i+1}`;
            square.className = 'square';
            this.#numberContainer.appendChild(square);
            return square
        })
        const puzzles = [...Array(this.#puzzleAmount)].map(_ => new PuzzleBuilder().generateRandomPuzzle());

        const nums = this.#shuffleArray([...Array(this.#puzzleAmount)].map((v, i) => i+1));
        await this.#displayNumbers(nums);

        this.#answerQuestion.classList.remove('hidden');
        this.#inputElement.value = '';
        this.#inputElement.focus();

        this.#progressBar.style.transition = ``;
        this.#progressBar.classList.remove('progress-bar-shrink');
        await this.addDelay(0.1);
        this.#progressBar.style.transition = `width ${this.#puzzleTime*1000}ms linear`;
        this.#progressBar.classList.add('progress-bar-shrink');

        squares.forEach((square, i) => square.style.backgroundColor = puzzles[i].colors['background']);
        squares.forEach((square, i)  => square.innerHTML = new SvgBuilder(puzzles[i]).getPuzzle());

        const [question, answer] = new PuzzleBuilder().generateQuestionAndAnswer(nums, puzzles);
        this.#answerQuestion.textContent = question.toUpperCase();

        return new Promise(async (resolve) => {

            this.#inputElement.addEventListener("keyup", (event) => {
                if (event.keyCode === 13) {
                    resolve([this.#inputElement.value, answer]);
                }
            });

            await this.addDelay(this.#puzzleTime);
            resolve([null, answer]);
        });
    }

    async #displayNumbers(numbers) {
        numbers.forEach((n, i) => document.querySelector('#square-' + (i+1)).innerHTML = `<div class="big-numbers can-shrink" id="num-${i+1}">${n}</div>`);

        await this.addDelay(1.5);
        numbers.forEach(n => document.querySelector('#num-' + (n)).classList.add('number-shrink'));
        await this.addDelay(1.5);
    }
}