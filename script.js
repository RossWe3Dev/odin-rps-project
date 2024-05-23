console.log("Hello World!");

// get the computer choice between rock, paper or scissors

//* function to get a random integer between 0, 1 and 2, for a total of 3 choices
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    let pcNumber = getRandomInt(3);   //* Applied getRandomInt(3)
    let pcResult;

    if (pcNumber === 0) {
        pcResult = 'rock';
    } else if (pcNumber === 1) {
        pcResult = 'paper';
    } else {
        pcResult = 'scissors';
    }

    console.log(pcNumber);
    console.log(`The computer chose '${pcResult}'`);
}

getComputerChoice();

// get the user's choice
function getHumanChoice() {
    let humanChoice = prompt("What would you like to pick? \n Select between rock, paper pr scissors")
    console.log(`You chose '${humanChoice}'`);
}

getHumanChoice();