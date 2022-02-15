<template>
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
    </div>
</template>

<script>
export default {
    name: 'Settings',
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
}
</script>

<style lang="scss" scoped>
.settings {
    text-align: center;
    color: #c40c21;

    &__form {
        padding-top: 150px;
    }

    &__text {
        font-size: 4em;
        cursor: default;
    }

    &__label {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover,
        &:focus-within {
            text-decoration: underline;
        }
    }

    &__radio {
        transform: scale(0);
    }

    &__radio:checked + &__custom-radio {
        background-image: linear-gradient(to right bottom, #ffffff 0%, #c40c21 45%);
    }

    &__custom-radio {
        width: 22px;
        height: 22px;
        border-radius: 100px;
        border: 1px solid #c40c21;
        background-color: transparent;
        transform: translateX(-10px);
    }

    &__difficulty {
        font-size: 2em;
    }

    &__button {
        cursor: pointer;
        color: #c40c21;
        background-color: transparent;
        border: none;
        margin-top: 15px;
        font-size: 3em;
    }
}
</style>