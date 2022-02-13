const app = Vue.createApp({
    template: `<div class="game-screen">
    <component :is="currentGamePage" :game="game" @init="changePage(1)" @set_difficulty="changePage(2, $event)" @game_over="changePage(3)"></component>
        </div>`,

    data() {
        return {
            pageIndex: 0,
            game: null
        }
    },
    methods: {
        changePage(index, attr = undefined) {
            if (attr !== null) {
                if (attr !== undefined) {
                    this.game = new Game(attr)
                }
                this.pageIndex = index
            }
        }
    },
    computed: {
        currentGamePage() {
            switch (this.pageIndex) {
                case 0: return 'StartPage'
                case 1: return 'Settings'
                case 2: return 'InGame'
                case 3: return 'GameOver'
            }
        }
    },
})