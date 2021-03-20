<template>
    <div class = "wrapper">
        <div class="player-info">
            <header class = "player-header" >
                <h1>Player Info</h1>
            </header>
        </div>
        <div class = "info-flex">
            <div class = "player-img">
                <img src = "/Images/Players/Antetokounmpo.png">
            </div>
            <div class = "player-details">
                <div class = "player-name">
                    <p>Giannis Antetokounmpo</p>
                </div>
                <div class = "player-team">
                    <p>Milwaukee Bucks</p>
                </div>
            </div>
        </div>
        <div class = "stats-flex">
            <div class = "stats-FG">
                <p>FG%</p>
                <p>56.3%</p>
            </div> 
            <div class = "stats-AST">
                <p>AST</p>
                <p>6.2</p>
            </div>
            <div class = "stats-REB">
                <p>REB</p>
                <p>11.8</p>
            </div>  
            <div class = "stats-STL">
                <p>STL</p>
                <p>1.3</p>
            </div> 
            <div class = "stats-rating">
                <p>RATING</p>
                <p>98</p>
            </div> 
        </div>
    </div>
</template>

<script>
// @ is an alias to /src



</script>

<style scoped>

.player-header h1 {
    font-size: 50px;
}

.info-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgb(173, 171, 171);
    border-radius: 10px;
    padding: 20px;
}

.stats-flex {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.player-name {
    font-size: 45px;
}

.player-team {
    font-size: 32px;
}

.stats-flex {
    border: 2px solid black;
}




</style>