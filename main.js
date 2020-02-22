


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



const listPeopleChoices = () => {
    document.getElementById("generate-people").remove();
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        li.setAttribute("id", `person-${person.id}`)
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function () { makePlayer(person.id) })
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
    })
}

const makePlayer = (id) => {
    document.getElementById(`person-${id}`).remove()

    let selectedPlayer;
    for (let i = 0; i < arrOfPeople.length; i++) {
        if (arrOfPeople[i].id === id) {
            selectedPlayer = arrOfPeople[i];
        }
    }

    const unassignedPlayer = new player(selectedPlayer.id, selectedPlayer.name, selectedPlayer.age, selectedPlayer.skillSet, selectedPlayer.placeBorn);
    listOfPlayers.push(unassignedPlayer);

    const listElement = document.getElementById("players");
    const li = document.createElement("li");
    li.setAttribute("id", `person-${selectedPlayer.id}`)

    const buttonAssignRed = document.createElement("button");
    buttonAssignRed.innerHTML = "Assign to Red Team";
    buttonAssignRed.setAttribute("id", "red-button");
    buttonAssignRed.addEventListener('click', function () { assignRedTeammate(id) });

    const buttonAssignBlue = document.createElement("button");
    buttonAssignBlue.innerHTML = "Assign to Blue Team";
    buttonAssignBlue.setAttribute("id", "blue-button");
    buttonAssignBlue.addEventListener('click', function () { assignBlueTeammate(id) });


    li.appendChild(buttonAssignRed);
    li.appendChild(buttonAssignBlue);
    li.appendChild(document.createTextNode(selectedPlayer.name + " - " + selectedPlayer.skillSet));

    listElement.append(li);

}

const assignRedTeammate = (id) => {
    document.getElementById(`person-${id}`).remove();

    let selectedPlayer;
    for (let i = 0; i < arrOfPeople.length; i++) {
        if (arrOfPeople[i].id === id) {
            selectedPlayer = arrOfPeople[i];
        }
    }

    const assignedPlayer = new redTeammate(selectedPlayer.id, selectedPlayer.name, selectedPlayer.age, selectedPlayer.skillSet, selectedPlayer.placeBorn, null, null, null, null, null, "red", "bulls");
    redTeam.push(assignedPlayer);

    const listElement = document.getElementById("red");
    const li = document.createElement("li");
    li.setAttribute("id", `person-${selectedPlayer.id}`)
    li.appendChild(document.createTextNode(selectedPlayer.name + " - " + selectedPlayer.skillSet));
    listElement.append(li);
}

const assignBlueTeammate = (id) => {
    document.getElementById(`person-${id}`).remove()

    let selectedPlayer;
    for (let i = 0; i < arrOfPeople.length; i++) {
        if (arrOfPeople[i].id === id) {
            selectedPlayer = arrOfPeople[i];
        }
    };

    const assignedPlayer = new blueTeammate(selectedPlayer.id, selectedPlayer.name, selectedPlayer.age, selectedPlayer.skillSet, selectedPlayer.placeBorn, null, null, null, null, null, "blue", "bluedevils");
    blueTeam.push(assignedPlayer);

    const listElement = document.getElementById("blue");
    const li = document.createElement("li");
    li.setAttribute("id", `person-${selectedPlayer.id}`)
    li.appendChild(document.createTextNode(selectedPlayer.name + " - " + selectedPlayer.skillSet));
    listElement.append(li);

}



