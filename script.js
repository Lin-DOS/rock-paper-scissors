const container = document.querySelector("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
rockButton.id = "rock";
paperButton.id = "paper"; 
scissorsButton.id = "scissors";
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
const buttonRef = document.querySelectorAll("button");

let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;
  switch (number) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

buttonRef.forEach((button) => {
  button.addEventListener("click", () => {
    const results = document.createElement("div");
    results.id = "results";
    container.appendChild(results);
    playGame(button.id);
  }) 
})

function winRound() {
  humanScore++;
  return document.getElementById("results").textContent = "You win!";
}

function loseRound() {
  computerScore++;
  return document.getElementById("results").textContent = "You lose!";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") loseRound();
    if (computerChoice === "scissors") winRound();
  }
  if (humanChoice === "paper") {
    if (computerChoice === "scissors") loseRound();
    if (computerChoice === "rock") winRound();
  }
  if (humanChoice === "scissors") {
    if (computerChoice === "rock") loseRound();
    if (computerChoice === "paper") winRound();
  }
  if (humanChoice === computerChoice)
    document.getElementById("results").textContent = "You tied!";
}

function playGame(humanChoice) {
  playRound(humanChoice, getComputerChoice());
  const scoreboard = document.createElement("div");
  scoreboard.append("Your score: " + humanScore + ". Computer's score: " + computerScore);
  container.appendChild(scoreboard);
}
