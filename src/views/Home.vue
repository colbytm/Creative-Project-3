<template>
  <div class="home">
    <div class = "header-instructs">
      <header class = "welcome-header" >
        <h1>Wecome to the NBA Dream Team Creator</h1>
      </header>
      <ol>
        <li>Choose 5 players from the list below and add them to your team</li>
        <li>Click on the player in the player in the "Players List" to see their stats</li>
        <li>When you think you have the best team click "Play" to face off against a randomly generated team</li>
        <li>You can modify your team anytime by removing them from the "Current Team" list</li>
      </ol>
    </div>
    <div class = "search">
      <input v-model="searchText" id = "search" placeholder="Player's Name" />
    </div>
    <div class = "player-flex">
      <div class = "player-list">
        <PlayerList :players="players" />
      </div>
      <div class = "team-list">
        <div class = "team-list-wrap">
          <header class = "team-header">
            <h1>Current Team</h1>
          </header>
          <div class = "team-player-list">
            <p>Steph Curry</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PlayerList from "../components/PlayerList.vue";
export default {
  name: 'Home',
  components: {
    PlayerList
  },
  data(){
    return{
      searchText: '',
    }
  },
  computed: {
    players(){
      return this.$root.$data.players.filter(player => player.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>



<style scoped>

.header-instructs {
  width: max-content;
  margin: 0 auto;
  line-height: 1.6;
}

.search {
  margin-top: 75px;
  text-align: center;
}

.search input {
  padding: 10px;
  border-radius: 5px;
}

#search {
  margin-right: 15px;
  outline: none;
  border: 1px solid black;
  width: 50%;
}

.player-flex {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
}

.player-list {
  flex-basis: 70%;
}

.team-list {
  flex-basis: 30%;
}

.team-list-wrap {
  min-height: 500px;
}

.team-list-wrap{
  border: 2px solid black;
}

.team-header {
  text-align: center;
  border-bottom: 2px solid black;
}

.team-player-list {
  padding: 15px;
}
</style>