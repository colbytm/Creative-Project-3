let mock = [
    {
        id:25,
        name: "Joel Embiid",
        team: "Philadelphia 76ers",
        position: "Center",
        stats: {
            fieldGoal: 52.5,
            assists: 3.3,
            rebounds: 11.5,
            steals: 1.2
        },
        rating: 99,
        image: "Embiid"
    },
    {
        id:26,
        name: "Goran Dragic,",
        team: "Miami Heat",
        position: "Point Guard",
        stats: {
            fieldGoal: 43.6,
            assists: 4.9,
            rebounds: 3.3,
            steals: 0.6
        },
        rating: 82,
        image: "Dragic"
    },
    {
        id:27,
        name: "Alec Burks",
        team: "New York Knicks",
        position: "Shooting Guard",
        stats: {
            fieldGoal: 50,
            assists: 2.1,
            rebounds: 4.3,
            steals: 2
        },
        rating: 79,
        image: "Burks"
    },
    {
        id:28,
        name: "DeAndre Jordan",
        team: "Brooklyn Nets",
        position: "Center",
        stats: {
            fieldGoal: 76.7,
            assists: 5,
            rebounds: 7.5,
            steals: 2
        },
        rating: 99,
        image: "Jordan"
    },
    {
        id:29,
        name: "Trae Young",
        team: "Atlanta Hawks",
        position: "Point Guard",
        stats: {
            fieldGoal: 43.3,
            assists: 9.4,
            rebounds: 4.1,
            steals: 0.8
        },
        rating: 99,
        image: "Young"
    },
    {
        id:30,
        name: "Kevin Durant",
        team: "Brooklyn Nets",
        position: "Power Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Durant"
    },
    {
        id:31,
        name: "Kelly Olynyk",
        team: "Miami Heat",
        position: "Power Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Olynyk"
    },
    {
        id:32,
        name: "LaMelo Ball",
        team: "Charlotte Hornets",
        position: "Point Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Ball"
    },
    {
        id:33,
        name: "Bradley Beal",
        team: "Washington Bullets",
        position: "forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Beal"
    },
    {
        id:34,
        name: "Jeremy Lamb",
        team: "Indiana Pacers",
        position: "Shooting Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Lamb"
    },
    {
        id:35,
        name: "James Harden",
        team: "Brooklyn Nets",
        position: "Shooting Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Harden"
    },
    {
        id:36,
        name: "Jimmy Butler",
        team: "Miami Heat",
        position: "Small Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Butler"
    },
    {
        id:37,
        name: "Mason Plumlee",
        team: "Detroit Pistons",
        position: "Center",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Plumlee"
    },
    {
        id:38,
        name: "Brook Lopez",
        team: "Milwaukee Bucks",
        position: "Center",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Lopez"
    },
    {
        id:39,
        name: "Kemba Walker,",
        team: "Boston Celtics",
        position: "Point Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Walker"
    },
    {
        id:40,
        name: "Coby White",
        team: "Chicago Bulls",
        position: "Point Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "White"
    },
    {
        id:41,
        name: "Fred VanVleet",
        team: "Toronto Raptors",
        position: "Shooting Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "VanVleet"
    },
    {
        id:42,
        name: "Victor Oladipo",
        team: "Indiana Pacers",
        position: "Shooting Guard",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Oladipo"
    },
    {
        id:43,
        name: "Andre Iguodala",
        team: "Miami Heat",
        position: "Small Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Iguodala"
    },
    {
        id:44,
        name: "De'Andre Hunter",
        team: "Atlanta Hawks",
        position: "Small Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Hunter"
    },
    {
        id:45,
        name: "Yuta Watanabe",
        team: "Toronto Raptors",
        position: "Small Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Watanabe"
    },
    {
        id:46,
        name: "Nikola Vucevic",
        team: "Orlando Magic",
        position: "Center",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Vucevic"
    },
    {
        id:47,
        name: "Tristan Thompson",
        team: "Boston Celtics",
        position: "Center",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Thompson"
    },
    {
        id:48,
        name: "Taj Gibson",
        team: "New York Knicks",
        position: "Center",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Gibson"
    },
    {
        id:49,
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        position: "Power Forward",
        stats: {
            fieldGoal: 50,
            assists: 5,
            rebounds: 5,
            steals: 2
        },
        rating: 99,
        image: "Antetokounmpo"
    },
]

export default mock;