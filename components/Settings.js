app.component('Settings', {
    template: `
    <div class="settings">
    <form class="settings__form" @submit.prevent ="submitDifficulty">
    <p class="settings__text">Choose difficulty level</p>

    <label for="difficulty1" class="settings__label">
    <input class="settings__radio" type="radio" name="difficulty" @change="setDifficulty('easy')" id="difficulty1">
    <div class="settings__custom-radio"></div>
    <div class="settings__difficulty">Easy</div>
    </label>

    
    <label for="difficulty2" class="settings__label">
    <input class="settings__radio" type="radio" name="difficulty" @change="setDifficulty('medium')" id="difficulty2">
    <div class="settings__custom-radio"></div>
    <div class="settings__difficulty">Medium</div>
    </label>

    <label for="difficulty3" class="settings__label">
    <input class="settings__radio" type="radio" name="difficulty" @change="setDifficulty('hard')" id="difficulty3">
    <div class="settings__custom-radio"></div>
    <div class="settings__difficulty">Hard</div>
    </label>

    <button class="settings__button" type="submit">OK</button>
    </form>
    </div>`,

    data() {
        return {
            difficultyLevel: null
        }
    },

    methods: {
        setDifficulty(value) {
            this.difficultyLevel = value
        },
        submitDifficulty() {
            this.$emit('set_difficulty', this.difficultyLevel)
        }
    },
    emits: {
        set_difficulty: value => {
            if (!value) {
                console.warn('Invalid emit')
                return false
            }
            else return true
        }
    }
})