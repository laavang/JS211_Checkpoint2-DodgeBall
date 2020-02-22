
// GUI-related code removed for js testing

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];



class player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skillSet;
        this.placeBorn = placeBorn;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}
class blueTeammate extends player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot) {
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
        this.color = color;
        this.mascot = mascot;
    }
}
class redTeammate extends player {
    constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, color, mascot) {
        super(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
        this.color = color;
        this.mascot = mascot;
    }
}



const makePlayer = (id) => {

    let selectedPlayer;
    for (let i = 0; i < arrOfPeople.length; i++) {
        if (arrOfPeople[i].id === id) {
            selectedPlayer = arrOfPeople[i];
        }
    }

    const unassignedPlayer = new player(selectedPlayer.id, selectedPlayer.name, selectedPlayer.age, selectedPlayer.skillSet, selectedPlayer.placeBorn);
    listOfPlayers.push(unassignedPlayer);

}

const assignRedTeammate = (id) => {

    let selectedPlayer;
    for (let i = 0; i < arrOfPeople.length; i++) {
        if (arrOfPeople[i].id === id) {
            selectedPlayer = arrOfPeople[i];
        }
    }

    const assignedPlayer = new redTeammate(selectedPlayer.id, selectedPlayer.name, selectedPlayer.age, selectedPlayer.skillSet, selectedPlayer.placeBorn, null, null, null, null, null, "red", "bulls");
    redTeam.push(assignedPlayer);

}

const assignBlueTeammate = (id) => {

    let selectedPlayer;
    for (let i = 0; i < arrOfPeople.length; i++) {
        if (arrOfPeople[i].id === id) {
            selectedPlayer = arrOfPeople[i];
        }
    };

    const assignedPlayer = new blueTeammate(selectedPlayer.id, selectedPlayer.name, selectedPlayer.age, selectedPlayer.skillSet, selectedPlayer.placeBorn, null, null, null, null, null, "blue", "bluedevils");
    blueTeam.push(assignedPlayer);

}



// Tests
if (typeof describe === 'function') {


    // person becomes a player

    describe('makePlayer()', () => {
        it('create a player', () => {
            makePlayer(2);
            assert.equal(listOfPlayers[0].id, 2);
            const testPlayer = new player(99, "Testy McTesterson", 29, "Acroyoga", "St. Charles, IL");
            assert.equal(testPlayer.age, 29);

        });
        it('add player to listOfPlayers', () => {
            assert.equal(listOfPlayers.length, 1);
        });
    });

    // player becomes a teammate - red team

    describe('assignBlueTeammate()', () => {
        it('make a new teammate', () => {
            makePlayer(2);
            assignBlueTeammate(2);
            assert.equal(blueTeam[0].id, 2);
            const testBlueTeamPlayer = new blueTeammate(99, "Testy McTesterson", 29, "Acroyoga", "St. Charles, IL", null, null, null, null, null, "blue", "bluedevils");
            assert.equal(testBlueTeamPlayer.color, "blue");

        });
        it('add teammate to blueTeam', () => {
            assert.equal(blueTeam.length, 1);
        });
    });

    // player becomes a teammate - red team

    describe('assignRedTeammate()', () => {
        it('make a new teammate', () => {
            makePlayer(2);
            assignRedTeammate(2);
            assert.equal(redTeam[0].id, 2);
            const testRedTeamPlayer = new redTeammate(99, "Testy McTesterson", 29, "Acroyoga", "St. Charles, IL", null, null, null, null, null, "red", "bulls");
            assert.equal(testRedTeamPlayer.color, "red");

        });
        it('add teammate to redTeam', () => {
            assert.equal(redTeam.length, 1);
        });
    });

} else {
    getPrompt();
}



