const prompt = require('prompt-sync')();
let computerChoice;
let userChoice;
let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3 - 1 + 1) + 1;
    switch (number) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
        }
}

function wonOrLost() {
    if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win!");
        }
        if (computerChoice === "paper") {
            console.log("You lose!");
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win!");
        }
        if (computerChoice === "scissors") {
            console.log("You lose!");
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You win!");
        }
        if (computerChoice === "paper") {
            console.log("You lose!");
        }
    }

    if (userChoice === computerChoice) {
        console.log("You drawed!");
    }
}

function startGame() {
    getComputerChoice();
    userChoice = prompt("Please enter rock, paper, or scissors: ");
    console.log("Computer chose " + computerChoice + ". You chose " + userChoice + ".");
    wonOrLost();
    // startGame();
}

startGame();