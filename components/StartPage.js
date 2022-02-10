app.component('StartPage', {
    template: `
    <div class="start-page">
    <h1 class="start-page__header">Simon the Game</h1>
    <transition name="title">
    <template v-if="active">
    <button class="start-page__button" @click="startGame">Start</button>
    </template>
    </transition>
    </div>
    `,
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
})