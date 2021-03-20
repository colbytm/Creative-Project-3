<template>
    <div class = "wrapper">
        <div class="play">
            <header class = "play-header" >
                <h1>Play</h1>
            </header>
        </div>
        <div class = "play-flex">
            <div class = "user-team">
                <h1>Your Dream Team</h1>
                <p>Steph Curry</p>
                <p>Anthony Davis</p>
                <p>Donovan Mitchell</p>
                <p>Kawhi Leanoard</p>
                <p>Giannis Antetokounmpo</p>
            </div>
            <div class = "random-team">
                <h1>Generated Dream Team</h1>
                <p>Steph Curry</p>
                <p>Anthony Davis</p>
                <p>Donovan Mitchell</p>
                <p>Kawhi Leanoard</p>
                <p>Giannis Antetokounmpo</p>
            </div>
        </div>
        <div class="play-winner">
            <header class = "winner-header" >
                <h1>Results</h1>
            </header>
            <p>Winner! Congrats, your dream team won the championship!</p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src



</script>

<style scoped>

.play-header h1 {
    font-size: 50px;
}

.play-flex {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.user-team, .random-team {
    border: 2px solid black;
    padding-left: 30px;
    padding-right: 30px;
    width: 30%;
}

.user-team h1, .random-team h1{
    text-align: center;
}

.user-team, .random-team p {
    text-align: left;
}

.play-winner {
    margin-top: 50px;
}



</style>