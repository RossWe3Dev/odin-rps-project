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


// get the user's choice
function getHumanChoice() {
    let humanInput = prompt(`Round ${currentRound}\n\nWhat would you like to pick?\nSelect between ~ rock, paper or scissors ~`)
    if (!humanInput) {
        return;
    } else {
        let humanResult = humanInput.toLowerCase();     //* Immediately convert it to lower case to print a nice looking message
        if (humanResult === 'rock' || humanResult === 'paper' || humanResult === 'scissors') {
            return humanResult;
        } else return;
    }
}


// variables that keep track of scores and round number, starting from round 1
let humanScore = 0;
let computerScore = 0;

let currentRound = 1;

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

    console.log(`Round ${currentRound} \n\nPlayer chose: '${humanChoice}' - Computer chose: '${computerChoice}'`);
    console.log(`${roundResult}\n\nPlayer score = ${humanScore} | Computer score = ${computerScore}`);
    alert(`Player chose: '${humanChoice}' - Computer chose: '${computerChoice}'\n${roundResult}\n\nPlayer score = ${humanScore} | Computer score = ${computerScore}`);
}


// loop to call playRound 5 times and return the winner after
function playGame() {
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        if (!humanSelection) break;

        playRound(humanSelection, computerSelection);
        currentRound = ++currentRound;
    };

    displayWinner();

}

playGame();


// function that displays the winner or a 'Refresh page' message in case of misinput
function displayWinner() {
    if (currentRound > 5) {
        if (humanScore > computerScore) {
            console.log('\nCongratulations you won!');
            alert('Congratulations you won!');
        } else if (computerScore > humanScore) {
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