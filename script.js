console.log("Hello World!");

function getComputerChoice() {
    let pcNumber = Math.floor(Math.random() * 100);
    let pcResult;

    if (pcNumber >= 0 && pcNumber < 34) {
        pcResult = 'rock';
    } else if (pcNumber > 33 && pcNumber < 67) {
        pcResult = 'paper';
    } else {
        pcResult = 'scissors';
    }

    console.log(pcNumber);
    console.log(pcResult);
}

getComputerChoice();