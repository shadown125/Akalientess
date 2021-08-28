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

    constructor(hackingButton, numberContainer, textContainer, answerReveal, answerQuestion, revealedSubmittedText, loadingText, consoleContainer) {
        super();
        this.#hackingButton = hackingButton;
        this.#numberContainer = numberContainer;
        this.#textContainer = textContainer;
        this.#answerReveal = answerReveal;
        this.#answerQuestion = answerQuestion;
        this.#revealedSubmittedText = revealedSubmittedText;
        this.#loadingText = loadingText;
        this.#consoleContainer = consoleContainer;

        this.#hackingButton.addEventListener('click', this.#init.bind(this));
    }

    async #init() {

        this.#consoleContainer.classList.remove('hidden');
        this.#setInformationText('Establish connection with Network');
        await super.addDelay(0.8);
        this.#setInformationText('doing some HACKERMANS STUFF...');
        await super.addDelay(1);
        this.#setInformationText('ACCESS CODE FLAGGED');
        await super.addDelay(0.8);
        this.#setInformationText(' Requires human captcha input.....');
        await super.addDelay(0.8);

        this.#textContainer.classList.toggle('hidden');
        this.#numberContainer.classList.toggle('hidden');

        this.#answer = '';
        this.#submitted = '';
        this.#result = true;

        for (let i = 0; i < 4 && this.#result; i++) {
            [this.#submitted, this.#answer] = await super.doPuzzle();
            this.#result = (this.#submitted?.toLowerCase() === this.#answer);
        }

        this.#answerQuestion.classList.add('hidden');
        this.#numberContainer.classList.add('hidden');
        this.#textContainer.classList.remove('hidden');

        this.#setInformationText((this.#result) ? 'the system has been bypassed.' : "The system didn't accept your answers");

        this.#answerReveal.textContent = this.#answer;

        this.#revealedSubmittedText.textContent = (this.#result) ? 'Good job, indeed the' :
            ((this.#submitted == null) ?  "The time ran out," :
                `You wrote "${this.#submitted || ' '}"`);
    }

    #setInformationText(text){
        this.#loadingText.innerHTML = text;
    }
}