<template>
    <div class="game-over">
        <p class="game-over__text">Game Over</p>
        <button class="game-over__button" @click="startGame">Try Again</button>
    </div>
</template>

<script>
export default {
    methods: {
        startGame() {
            this.$emit('init')
        }
    }
}
</script>

<style lang="scss" scoped>
.game-over {
    text-align: center;
    color: #c40c21;
    padding-top: 200px;

    &__text {
        font-size: 4em;
        cursor: default;
    }
    &__button {
        cursor: pointer;
        color: #c40c21;
        background-color: transparent;
        border: none;
        margin-top: 15px;
        font-size: 3em;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>