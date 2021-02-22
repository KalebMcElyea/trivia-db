
export default class Music {
    constructor(data) {
        this.category = data.category
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers

    }

    get Template() {

        return /*html*/`
        <div class="gameCard p-2 box-shadow card text-center col-6 justify-content-center mt-4">
            
           <i class="cardBG">Question:</i>
           <br>
           <b>${this.question}</b>
            <hr>
            <i class="fa fa-music music-2 pt-1" aria-hidden="true"></i>
            <i>Correct Answer:</i><b>
            <br>
            ${this.correct_answer}</b>
            <hr>
            <i class="fa fa-music music-NC pt-1" data-toggle="collapse" aria-hidden="true"></i>
            <i class="NC">Incorrect Answers: </i><b class="NC">
            <br>
            ${this.incorrect_answers}</b>
        </div>
        `
    }
}