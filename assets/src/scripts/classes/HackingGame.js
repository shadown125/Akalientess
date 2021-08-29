import { PuzzleHandler } from './PuzzleHandler.js'

export class HackingGame extends PuzzleHandler {

    #submitted;
    #answer;
    #result = true;
    #hackingButton;
    #numberContainer;
    #textContainer;
    #answerReveal;
    #answerQuestion;
    #revealedSubmittedText;
    #loadingText;
    #consoleContainer;
    #countdown;
    #inputElement;
    #answerBoxDescription;
    #startInput;
    #consoleInputContainer;
    #box = document.querySelector('[data-box]');
    #console;
    #answerInputLabel = document.querySelector('[data-answer-input-label]');
    #updated = false;
    #asciiArt;

    constructor(hackingButton, numberContainer, textContainer, answerReveal, answerQuestion, revealedSubmittedText, loadingText, consoleContainer, countdown, inputElement, answerBoxDescription, console, asciiArt) {
        super();
        this.#hackingButton = hackingButton;
        this.#numberContainer = numberContainer;
        this.#textContainer = textContainer;
        this.#answerReveal = answerReveal;
        this.#answerQuestion = answerQuestion;
        this.#revealedSubmittedText = revealedSubmittedText;
        this.#loadingText = loadingText;
        this.#consoleContainer = consoleContainer;
        this.#countdown = countdown;
        this.#inputElement = inputElement;
        this.#answerBoxDescription = answerBoxDescription;
        this.#console = console;
        this.#asciiArt = asciiArt;

        this.#hackingButton.addEventListener('click', this.#consoleStart.bind(this));
    }

    #inputListening() {
        if (this.#startInput.value.toLowerCase() === 'exit') {
            this.#textContainer.classList.toggle('hidden');
            this.#consoleInputContainer = document.querySelectorAll('[data-console-input-container]');
            this.#consoleInputContainer.forEach((item) => {
                item.remove();
            })
            this.#answerInputLabel.classList.add('hidden');
            this.#answerQuestion.classList.add('hidden');
            this.#numberContainer.classList.add('hidden');
            this.#countdown.classList.add('hidden');
            this.#inputElement.classList.add('hidden');
            this.#answerBoxDescription.classList.remove('hidden');
            this.#answerReveal.classList.remove('hidden');
            this.#textContainer.classList.remove('hidden');
            this.#revealedSubmittedText.remove('hidden');
            this.#consoleContainer.classList.add('hidden');
            this.#console.classList.remove('is-active');
        } else if (this.#startInput.value.toLowerCase() === 'hack') {
            if (this.#updated === true) {
                this.#disableAndSaveInputValue();
                this.#hackProgress();
            } else {
                this.#disableAndSaveInputValue();
                this.#box.innerHTML += `<div class="console-text console-text--red" data-console-input-container>
                The software version is outdated! Use 'update' to update
                </div>`
                this.#newLineConsole();
            }
        } else if (this.#startInput.value.toLowerCase() === 'help') {
            this.#disableAndSaveInputValue();
            this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                If you are in console and wanna more data from AkaLientesS then maybe try to type 'hack'? :D
            </div>`
            this.#newLineConsole();
        } else if (this.#startInput.value.toLowerCase() === 'update') {
            this.#disableAndSaveInputValue();
            this.#updateTerminal();
        } else {
            this.#disableAndSaveInputValue();
            this.#newLineConsole();
        }
    }

    async #hackProgress() {
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Breaking the connection cipher...
            </div>`
        await super.addDelay(4.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Attempt number #1...
            </div>`
        await super.addDelay(4.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Attempt number #2...
            </div>`
        await super.addDelay(2.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                The cipher is broken, connecting to the terminal...
            </div>`
        await super.addDelay(7);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Initiating the program 5U5_1MP...
            </div>`
        this.#textContainer.classList.toggle('hidden');
        this.#consoleInputContainer = document.querySelectorAll('[data-console-input-container]');
        this.#consoleInputContainer.forEach((item) => {
            item.remove();
        })
        this.#asciiArt.classList.add('hidden');
        await super.addDelay(3);
        this.#init();
    }

    #disableAndSaveInputValue() {
        this.#startInput.setAttribute('value', this.#startInput.value);
        this.#startInput.disabled = true;
        this.#startInput.removeAttribute("data-start-input");
    }

    async #updateTerminal() {
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Upgrading to 'penguin 1.32'...
            </div>`
        await super.addDelay(2.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Update: Importing the latest libraries...
            </div>`
        await super.addDelay(1.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Update: Patching bugs...
            </div>`
        await super.addDelay(3.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Update: Downloading new modules...
            </div>`
        await super.addDelay(2.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Update: Final touches...
            </div>`
        await super.addDelay(1.5);
        this.#box.innerHTML += `<div class="console-text" data-console-input-container>
                Successfully upgraded to 'penguin 1.32'!!
            </div>`
        await super.addDelay(1);
        this.#newLineConsole();
        this.#updated = true;
    }

    #newLineConsole() {
        this.#box.innerHTML += `<div class="console-input-container" data-console-input-container>
                <div>server@AkaLientesS:~$ </div>
                <input type="text" class="input start-input" data-start-input>
            </div>`
        this.#startInput = document.querySelector('[data-start-input]');
        this.#startInput.addEventListener('change', this.#inputListening.bind(this));
        this.#startInput.focus();
    }

    async #consoleStart() {
        this.#box.innerHTML += `<div class="console-text console-text--intro" data-console-input-container>
                Correctly initialized the program on the computer. You are now connected to AkaLientesS.
            </div>`
        this.#box.innerHTML += `<div class="console-text console-text--intro" data-console-input-container>
                If you want to exit, type 'exit' in the console.
            </div>`
        this.#box.innerHTML += `<div class="console-input-container" data-console-input-container>
                <div>server@AkaLientesS:~$ </div>
                <input type="text" class="input start-input" data-start-input>
            </div>`
        this.#startInput = document.querySelector('[data-start-input]');
        this.#startInput.addEventListener('change', this.#inputListening.bind(this));

        this.#asciiArt.classList.remove('hidden');
        this.#updated = false;
        this.#revealedSubmittedText.classList.add('hidden');
        this.#answerReveal.classList.add('hidden');
        this.#answerBoxDescription.classList.add('hidden');
        this.#textContainer.classList.toggle('hidden');
        this.#consoleContainer.classList.remove('hidden');
        this.#console.classList.add('is-active');
    }

    async #init() {
        this.#numberContainer.classList.toggle('hidden');
        this.#textContainer.classList.toggle('hidden');
        this.#answer = '';
        this.#submitted = '';
        this.#result = true;

        await super.addDelay(1);
        for (let i = 0; i < 3 && this.#result; i++) {
            [this.#submitted, this.#answer] = await super.doPuzzle();
            this.#result = (this.#submitted?.toLowerCase() === this.#answer);
        }

        this.#answerInputLabel.classList.add('hidden');
        this.#answerQuestion.classList.add('hidden');
        this.#numberContainer.classList.add('hidden');
        this.#countdown.classList.add('hidden');
        this.#inputElement.classList.add('hidden');
        this.#answerBoxDescription.classList.remove('hidden');
        this.#answerReveal.classList.remove('hidden');
        this.#textContainer.classList.remove('hidden');
        this.#revealedSubmittedText.remove('hidden');

        this.#setInformationText((this.#result) ? 'Access Granted' : "The system didn't accept your answers");

        if(!this.#result) {
            this.#answerReveal.textContent = "The answer was: " + this.#answer;
        }

        this.#revealedSubmittedText.textContent = (this.#result) ? 'Good job, indeed the' :
            ((this.#submitted == null) ?  "The time ran out," :
                `You wrote "${this.#submitted || ' '}"`);

        await super.addDelay(4.9);
        this.#consoleContainer.classList.add('hidden');
        this.#console.classList.remove('is-active');
    }

    #setInformationText(text){
        this.#loadingText.innerHTML = text;
    }
}