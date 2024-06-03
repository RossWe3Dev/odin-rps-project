console.log("LET'S PLAY RPS!");
// variables that keep track of scores and round number, starting from round 1
let playerScore = 0;
let computerScore = 0;

let currentRound = 1;

// set button and divs references
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const result = document.querySelector(".result");
const score = document.querySelector(".score");
score.innerHTML = 'Round 0<br>Player Score = 0 | Computer Score = 0';

//! EVENTS
rockBtn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound('rock', getComputerChoice());
        currentRound = ++currentRound;
    }
});

paperBtn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound('paper', getComputerChoice());
        currentRound = ++currentRound;
    }
});

scissorsBtn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound('scissors', getComputerChoice());
        currentRound = ++currentRound;
    }
});


//! FUNCTIONS AND LOGIC
// get the computer choice between rock, paper or scissors

//* function to get a random integer between 0 and max (excluded), for a total of max choices
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

    score.innerHTML = `Round ${currentRound}<br>Player Score = ${playerScore} | Computer Score = ${computerScore}`;
    result.innerHTML = `<i>Player chose: '${playerChoice}' - Computer chose: '${computerChoice}'</i><br><br>${roundResult}`;
    console.log(`Round ${currentRound} \n\nPlayer chose: '${playerChoice}' - Computer chose: '${computerChoice}'`);
    console.log(`${roundResult}\n\nPlayer score = ${playerScore} | Computer score = ${computerScore}`);

    displayWinner();
}


// function that displays the winner
function displayWinner() {
    if (playerScore === 5) {
        console.log('\nCongratulations you won!\n\nRefresh the page to play again');
        alert('Congratulations you won!\n\nRefresh the page to play again');
    } else if (computerScore === 5) {
        console.log('\nYou lost to a random algorithm!\n\nRefresh the page to play again\n\nBut at least if you are reading this you found the Easter Egg ;)');
        alert('You lost to a random algorithm!\n\nRefresh the page to play again');
    } else return;
}