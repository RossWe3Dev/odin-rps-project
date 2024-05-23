console.log("Let's play RPS!");


// get the computer choice between rock, paper or scissors

//* function to get a random integer between 0, 1 and 2, for a total of 3 choices
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    let pcNumber = getRandomInt(3);     //* Applied getRandomInt(3)
    let pcResult;

    if (pcNumber === 0) {
        pcResult = "rock";
    } else if (pcNumber === 1) {
        pcResult = "paper";
    } else {
        pcResult = "scissors";
    }

    console.log(`The computer chose '${pcResult}'`);
    return pcResult;
}

// getComputerChoice();


// get the user's choice
function getHumanChoice() {
    let humanInput = prompt("What would you like to pick? \n Select between rock, paper pr scissors")
    let humanResult = humanInput.toLowerCase();     //* Immediately convert it to lower case to print a nice looking message
    console.log(`You chose '${humanResult}'`);
    return humanResult;
}

// getHumanChoice();


// keep track of scores
let humanScore = 0;
let computerScore = 0;



// logic for one round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a Tie! You and the Computer chose the same option :|");

    } else if (humanChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                console.log("You lose :( Paper beats Rock!");
                computerScore = ++computerScore;
                break;

            case "scissors":
                console.log("You win :) Rock beats Scissors!");
                humanScore = ++humanScore;
                break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win :) Paper beats Rock!");
                humanScore = ++humanScore;
                break;

            case "scissors":
                console.log("You lose :( Scissors beat Paper!");
                computerScore = ++computerScore;
                break;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "paper":
                console.log("You win :) Scissors beat Paper!");
                humanScore = ++humanScore;
                break;

            case "rock":
                console.log("You lose :( Rock beats Scissors!");
                computerScore = ++computerScore;
                break;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Player score = ${humanScore} | Computer score = ${computerScore}`);
