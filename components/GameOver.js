app.component('GameOver', {
    template: `
    <div class="game-over">
    <p class="game-over__text">Game Over</p>
    <button class="game-over__button" @click="startGame">Try Again</button>
    </div>`,
    
    methods: {
        startGame() {
            this.$emit('init')
        }
    }
})