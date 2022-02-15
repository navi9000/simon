export default class Game {
    constructor(difficulty) {
        this.difficulty = difficulty
        this.delay = this._setDelay()
        this.progression = []
        this.len = 0
        this.level = 1
        this.audios = [
            new Audio('audio/1.mp3'),
            new Audio('audio/2.mp3'),
            new Audio('audio/3.mp3'),
            new Audio('audio/4.mp3')
        ]
        this.highlightButtons = [false, false, false, false]
    }

    _setDelay() {
        switch (this.difficulty) {
            case 'easy': return this.delay = 1500
            case 'medium': return this.delay = 1000
            case 'hard': return this.delay = 400
            default: throw new Error('Something went wrong')
        }
    }

    generateRandomNumber() {
        this.progression.push(Math.floor(Math.random() * 4) + 1)
        this.len++
    }

    playElement(el) {
        this.audios[el - 1].play()
    }

    playProgression() {
        let i = 0
        let timer = setInterval(() => {
            this.playElement(this.progression[i])
            this.highlightButtons[this.progression[i] - 1] = true
            setTimeout(() => {
                this.highlightButtons[this.progression[i++] - 1] = false}, 200)
        }, this.delay)
        setTimeout(() => clearInterval(timer), this.delay * this.len + 1)
    }
}