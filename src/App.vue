<template>
  <div class="game-screen">
    <component
      :is="currentPage"
      :game="game"
      @init="changePage('Settings')"
      @set_difficulty="changePage('InGame', $event)"
      @game_over="changePage('GameOver')"
      @game_mounted="mountGame()"
      @level_complete="completeLevel()"
      ></component>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'
import Settings from './components/Settings.vue'
import InGame from './components/InGame.vue'
import GameOver from './components/GameOver.vue'
import Game from './assets/Game.js'

export default {
  name: 'App',
  components: {
    StartPage,
    Settings,
    InGame,
    GameOver
  },
      data() {
        return {
            currentPage: "StartPage",
            game: null
        }
    },
    methods: {
        changePage(pageName, attr = undefined) {
            if (attr !== null) {
                if (attr !== undefined) {
                    this.game = new Game(attr)
                }
                this.currentPage = pageName
            }
        },
        mountGame() {
          this.game.generateRandomNumber()
          this.game.playProgression()
          console.log(this.game.progression)
        },
        completeLevel() {
          this.game.level++
          this.game.generateRandomNumber()
          setTimeout(() => this.game.playProgression(), 1000)
          console.log(this.game.progression)
        }
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: Norican, cursive;
}

body {
    background-color: #222222;
}

li {
    list-style-type: none;
}

.game-screen {
    margin: 50px auto;
    border-radius: 20px;
    background-image: linear-gradient(180deg, #3967e6 0%, white 100%);
    max-width: 960px;
    min-height: 640px;
}
</style>
