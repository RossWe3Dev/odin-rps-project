console.log("LET'S PLAY RPS!");
// variables that keep track of scores and round number, starting from round 1
let playerScore = 0;
let computerScore = 0;

let currentRound = 0;

// dom nodes
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const result = document.querySelector(".result");
const score = document.querySelector(".score");
score.innerHTML = `Round ${currentRound}<br>Player Score = ${playerScore} | Computer Score = ${computerScore}`;

const gameOverPanel = document.querySelector(".game-over");
const gameOverMessage = document.querySelector(".game-result");
const resetBtn = document.querySelector(".reset");

//! EVENTS
rockBtn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        currentRound = ++currentRound;
        playRound('rock', getComputerChoice());
    }
});

paperBtn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        currentRound = ++currentRound;
        playRound('paper', getComputerChoice());
    }
});

scissorsBtn.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        currentRound = ++currentRound;
        playRound('scissors', getComputerChoice());
    }
});

resetBtn.addEventListener('click', () => {
    currentRound = 0;
    playerScore = 0;
    computerScore = 0;
    score.innerHTML = `Round ${currentRound}<br>Player Score = ${playerScore} | Computer Score = ${computerScore}`;
    result.innerHTML = `<p style="margin-top:1rem;">Never give up!</p>`;
    console.log("\nI GUESS YOU REALLY LIKE THIS GAME!");
    gameOverPanel.classList.add("hide");
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
        gameOverPanel.classList.remove("hide");
        console.log('\nCongratulations you won!\n\nRefresh the page to play again');
        gameOverMessage.textContent = 'Congratulations you won!';
    } else if (computerScore === 5) {
        gameOverPanel.classList.remove("hide");
        console.log('\nYou lost to a random algorithm!\n\nRefresh the page to play again\n\nBut at least if you are reading this you found the Easter Egg ;)');
        gameOverMessage.textContent = 'You lost to a random algorithm!'
    } else return;
}