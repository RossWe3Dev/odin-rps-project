console.log("Let's play RPS!");


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
    let humanResult = prompt("What would you like to pick? \n Select between rock, paper pr scissors")
    console.log(`You chose '${humanResult}'`);
}

getHumanChoice();


// keep track of scores
let humanScore = 0;
let computerScore = 0;

console.log(`Player score = ${humanScore} | Computer score = ${computerScore}`);


// logic for one round
function playRound(humanChoice, computerChoice) {

}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
