app.component('InGame', {
    template: `
    <div class="ingame">
    <div class="ingame__gamefield">
    <div class="ingame__top-row">
    <button :class="{ingame__button: true, ingame__button_red: true, ingame__button_play: game.highlightButtons[0]}" id="btn-1" @click="check(1)"></button>
    <button :class="{ingame__button: true, ingame__button_yellow: true, ingame__button_play: game.highlightButtons[1]}" id="btn-2" @click="check(2)"></button>
    </div>
    <div class="ingame__bottom-row">
    <button :class="{ingame__button: true, ingame__button_blue: true, ingame__button_play: game.highlightButtons[3]}" id="btn-4" @click="check(4)"></button>
    <button :class="{ingame__button: true, ingame__button_green: true, ingame__button_play: game.highlightButtons[2]}" id="btn-3" @click="check(3)"></button>
    </div>
    </div>
    <div class="ingame__aside">
    <p><strong>Level: </strong>{{game.level}}</p>
    </div>
    </div>
    `,

    data() {
        return {
            progressionStep: 0
        }
    },

    props: {
        game: {
            type: Object,
            required: true
        }
    },

    methods: {
        check(value) {
            this.game.playElement(value)
            if (value != this.game.progression[this.progressionStep]) {
                this.$emit('game_over')
            } else {
                this.progressionStep++
                if (this.progressionStep == this.game.len) {
                    this.levelComplete()
                }
            }
        },

        levelComplete() {
            this.game.level++
            this.progressionStep = 0
            this.game.generateRandomNumber()
            setTimeout(() => this.game.playProgression(), 1000)
            console.log(this.game.progression)
        }
    },

    mounted() {
        this.game.generateRandomNumber()
        this.game.playProgression()
        console.log(this.game.progression)
    }
})