console.log("Hello World!");

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
    console.log(pcResult);
}

getComputerChoice();