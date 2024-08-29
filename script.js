try {
    prompt = require('prompt-sync')();
} catch (err) {
    err.messsage;
}

let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3 - 1 + 1) + 1;
    switch (number) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win!");
            humanScore++;
        }
        if (computerChoice === "paper") {
            console.log("You lose!");
            computerScore++;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win!");
            humanScore++;
        }
        if (computerChoice === "scissors") {
            conplayGamesole.log("You lose!");
            computerScore++;
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You win!");
            humanScore++;
        }
        if (computerChoice === "paper") {
            console.log("You lose!");
            computerScore++;
        }
    }
    if (humanChoice === computerChoice) {
        console.log("You tied!");
    }
}

function playGame() {
    let counter = 0;
    while (counter < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        counter++;
        console.log(humanScore, computerScore);
    }
    if (humanScore > computerScore) {
        console.log("A winner is you!");
    }
    else if (humanScore < computerScore) {
        console.log("The computer won.");
    }
    else {
        console.log("Neither you or the computer won.");
    }
}

playGame();