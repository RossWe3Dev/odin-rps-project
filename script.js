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


// get the user's choice
function getHumanChoice() {
    let humanInput = prompt("What would you like to pick? \n \nSelect between rock, paper or scissors")
    let humanResult = humanInput.toLowerCase();     //* Immediately convert it to lower case to print a nice looking message
    console.log(`You chose '${humanResult}'`);
    return humanResult;
}


// variables to keep track of scores
let humanScore = 0;
let computerScore = 0;


// logic for one round
function playRound(humanChoice, computerChoice) {
    let roundResult;

    if (humanChoice === computerChoice) {
        roundResult = "It's a Tie :| You and the Computer chose the same option.";

    } else if (humanChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                roundResult = "You lose :( Paper beats Rock!";
                computerScore = ++computerScore;
                break;

            case "scissors":
                roundResult = "You win :) Rock beats Scissors!";
                humanScore = ++humanScore;
                break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                roundResult = "You win :) Paper beats Rock!";
                humanScore = ++humanScore;
                break;

            case "scissors":
                roundResult = "You lose :( Scissors beat Paper!";
                computerScore = ++computerScore;
                break;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "paper":
                roundResult = "You win :) Scissors beat Paper!";
                humanScore = ++humanScore;
                break;

            case "rock":
                roundResult = "You lose :( Rock beats Scissors!";
                computerScore = ++computerScore;
                break;
        }
    }

    console.log(`${roundResult} \n \nPlayer score = ${humanScore} | Computer score = ${computerScore}`);
    alert(`${roundResult} \n \nPlayer score = ${humanScore} | Computer score = ${computerScore}`);
}


// logic for the whole game -> who's the first to win 5 rounds
function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(`Round 1 player: '${humanSelection}' pc: '${computerSelection}'`);
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Round 2 player: '${humanSelection}' pc: '${computerSelection}'`);
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Round 3 player: '${humanSelection}' pc: '${computerSelection}'`);
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Round 4 player: '${humanSelection}' pc: '${computerSelection}'`);
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Round 5 player: '${humanSelection}' pc: '${computerSelection}'`);
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log('Congratulations you won!');
        alert('Congratulations you won!');
    } else if (computerScore > humanScore) {
        console.log('You lost to a random algorithm!');
        alert('You lost to a random algorithm!');
    } else {
        console.log('Perfectly balanced, it\'s a tie!');
        alert('Perfectly balanced, it\'s a tie!');
    }
}

playGame();


/* function playGameWithLoops() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let finalRound = 5;
    for (let i = 0; i < finalRound; i++) {
        playRound(humanSelection, computerSelection);
        console.log(`Player score = ${humanScore} | Computer score = ${computerScore}`);
    }
} */