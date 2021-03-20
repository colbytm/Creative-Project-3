<template>
  <div class="wrapper">
    <div class="players">
      <header>
        <h2>Players List</h2>
      </header>
      <div class="player" v-for="player in players" :key="player.id">
        <div class="row">
          <div class = "row-flex">
            <div class = "image">
              <img :src="'/images/players/'+player.image + '.png'">
            </div>
            <div class = "name">
              <h3 @click = playerPage(player)>{{player.name}}</h3>
            </div>
            <div class = "team">
              <p>{{player.team}}</p>
            </div>
            <div class = "add-to-team">
              <div class = "add-button">
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="image">
          <img :src="'/images/players/'+player.image">
        </div>
        <div class="price">

          <button @click = add(product) class="auto">Add to Cart</button>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    // add(product){
    //   this.$root.$data.cart.push(product);
    // }
    playerPage(product) {

    }
  },

  name: 'PlayerList',
  props: {
    players: Array
  }
}
</script>

<style scoped>

.wrapper {
  border: 2px solid black;
  margin-right: 100px;
}

header h2 {
  padding: 0 5px;
}

.row {
  padding: 0 5px;
  background-color: rgb(231, 231, 231);
}
.row-flex {
  display: flex;
  text-align: left;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
}

.name, .team {
  width: 200px;
  text-align: left;
}

.name:hover {
  text-decoration: underline;
  cursor: pointer;
}

.add-button {
  padding: 0 10px;
}

.add-button:hover {
  cursor: pointer;
}

.image img{
  width: 50px;
}

</style>