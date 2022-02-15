<template>
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
</template>

<script>
export default {
    name: 'InGame',
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
                    this.progressionStep = 0
                    this.$emit('level_complete')
                }
            }
        }
    },

    mounted() {
        this.$emit('game_mounted')
    }
}
</script>

<style lang="scss" scoped>
.ingame {
    display: grid;
    grid-template-columns: 640px auto;
    height: 640px;

    &__top-row {
        height: 150px;
        margin-top: 168px;
        margin-left: 168px;
    }

    &__bottom-row {
        margin-left: 168px;
    }

    &__button {
        width: 150px;
        height: 150px;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0.7;

        &:hover,
        &_play {
            opacity: 1;
        }

        &_red {
            background-color: red;
            border-top-left-radius: 50%;
        }

        &_yellow {
            background-color: yellow;
            border-top-right-radius: 50%;
        }

        &_green {
            background-color: green;
            border-bottom-right-radius: 50%;
        }

        &_blue {
            background-color: blue;
            border-bottom-left-radius: 50%;
        }
    }

    &__aside {
        background-color: #bbb;
        height: 100%;
    }
}
</style>