console.log("LET'S PLAY RPS!");


// get the computer choice between rock, paper or scissors

//* function to get a random integer between 0, 1 and 2, for a total of 3 choices
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    let pcNumber = getRandomInt(3);
    let pcResult;

    if (pcNumber === 0) {
        pcResult = "rock";
    } else if (pcNumber === 1) {
        pcResult = "paper";
    } else {
        pcResult = "scissors";
    }

    return pcResult;
}


// get the player's choice
function getPlayerChoice() {
    let playerInput = prompt(`Round ${currentRound}\n\nWhat would you like to pick?\nSelect between ~ rock, paper or scissors ~`)
    if (!playerInput) {
        return;
    } else {
        let playerResult = playerInput.toLowerCase();     //* Immediately convert it to lower case to print a nice looking message
        if (playerResult === 'rock' || playerResult === 'paper' || playerResult === 'scissors') {
            return playerResult;
        } else return;
    }
}


// variables that keep track of scores and round number, starting from round 1
let playerScore = 0;
let computerScore = 0;

let currentRound = 1;

// logic for one round
function playRound(playerChoice, computerChoice) {
    let roundResult;

    if (playerChoice === computerChoice) {
        roundResult = "It's a Tie :| You and the Computer chose the same option.";

    } else if (playerChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                roundResult = "You lose :( Paper beats Rock!";
                computerScore = ++computerScore;
                break;

            case "scissors":
                roundResult = "You win :) Rock beats Scissors!";
                playerScore = ++playerScore;
                break;
        }
    } else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                roundResult = "You win :) Paper beats Rock!";
                playerScore = ++playerScore;
                break;

            case "scissors":
                roundResult = "You lose :( Scissors beat Paper!";
                computerScore = ++computerScore;
                break;
        }
    } else if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "paper":
                roundResult = "You win :) Scissors beat Paper!";
                playerScore = ++playerScore;
                break;

            case "rock":
                roundResult = "You lose :( Rock beats Scissors!";
                computerScore = ++computerScore;
                break;
        }
    }

    console.log(`Round ${currentRound} \n\nPlayer chose: '${playerChoice}' - Computer chose: '${computerChoice}'`);
    console.log(`${roundResult}\n\nPlayer score = ${playerScore} | Computer score = ${computerScore}`);
    alert(`Player chose: '${playerChoice}' - Computer chose: '${computerChoice}'\n${roundResult}\n\nPlayer score = ${playerScore} | Computer score = ${computerScore}`);
}


// loop to call playRound 5 times and return the winner after
function playGame() {
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        if (!playerSelection) break;

        playRound(playerSelection, computerSelection);
        currentRound = ++currentRound;
    };

    displayWinner();

}

playGame();


// function that displays the winner or a 'Refresh page' message in case of misinput
function displayWinner() {
    if (currentRound > 5) {
        if (playerScore > computerScore) {
            console.log('\nCongratulations you won!');
            alert('Congratulations you won!');
        } else if (computerScore > playerScore) {
            console.log('\nYou lost to a random algorithm!');
            alert('You lost to a random algorithm!');
        } else {
            console.log('\nPerfectly balanced, it\'s a tie!');
            alert('Perfectly balanced, it\'s a tie!');
        }
    } else {
        alert('Please refresh the page and choose a valid option between ~ rock, paper or scissors ~');
        console.log('Please refresh the page and choose a valid option between ~ rock, paper or scissors ~');
    };
}