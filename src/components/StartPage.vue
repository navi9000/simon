<template>
    <div class="start-page">
        <h1 class="start-page__header">Simon the Game</h1>
        <transition name="title">
            <template v-if="active">
                <button class="start-page__button" @click="startGame">Start</button>
            </template>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'StartPage',
    data() {
        return {
            active: false
        }
    },
    methods: {
        startGame() {
            setTimeout(() => this.$emit('init'), 1000)
        }
    },
    emits: {
        init: null
    },
    mounted() {
        setTimeout(() => this.active = true, 8000)

    }
}
</script>

<style scoped lang="scss">
.start-page {
    position: relative;

    &__header {
        position: absolute;
        top: 175px;
        left: 75px;
        font-size: 6em;
        color: #c40c21;
        cursor: default;
        text-align: initial;
        white-space: nowrap;
        overflow: hidden;
        width: 7.5em;
        text-decoration: underline;
        transform-origin: top left;
        transform: rotate(-14deg);
        animation: drawText 5s steps(60, end), underlineText 8s;
    }

    &__button {
        position: absolute;
        top: 375px;
        right: 175px;
        cursor: pointer;
        font-family: Norican, cursive;
        color: #c40c21;
        background-color: transparent;
        border: none;
        font-size: 4em;

        &:hover {
            text-decoration: underline;
        }
    }
}

@keyframes drawText {
    from {
        width: 0;
    }
}

@keyframes underlineText {
    0% {
        text-decoration: none;
    }
    75% {
        text-decoration: none;
    }
}

.title-enter-from {
    opacity: 0;
}

.title-enter-active {
    transition: opacity 1s ease;
}

.title-enter-to {
    opacity: 1;
}
</style>