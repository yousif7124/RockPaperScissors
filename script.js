let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

let ch = document.querySelectorAll(".choice");
let playerChoice;
for (let element = 0; element < ch.length; element++) {
  let pChoice = ch[element];
  pChoice.onclick = () => {
    playerChoice = pChoice.querySelector("span").textContent.toLowerCase();
  };
}

let pScore = document.querySelector("#playerScore");
let cScore = document.querySelector("#computerScore");

const lock = document.querySelector("#lockIn");
lock.addEventListener("click", calculateScore);
const resultText = document.querySelector("#result");
let result;

function playRound() {
  let computerSelection = getComputerChoice();
  let cChoice = document.querySelector("#compChoice");
  cChoice.innerText = "Computer Chooses " + computerSelection;
  if (computerSelection == "rock") {
    if (playerChoice == "rock") {
      result = "Tie";
    } else if (playerChoice == "paper") {
      result = "Player Wins";
    } else {
      result = "Player Loses";
    }
  } else if (computerSelection == "paper") {
    if (playerChoice == "paper") {
      result = "Tie";
    } else if ((playerChoice = "rock")) {
      result = "Player Loses";
    } else {
      result = "Player Wins";
    }
  } else {
    if (playerChoice == "paper") {
      result = "Player Loses";
    } else if (playerChoice == "rock") {
      result = "Player Wins";
    } else {
      result = "Tie";
    }
  }
}

function displayResult() {
  playRound();
  resultText.textContent = `${result}`;
}

function displayScore() {
  pScore.textContent = "Your Score: " + playerScore;
  cScore.textContent = "Computer Score: " + computerScore;
}

function calculateScore() {
  displayResult();
  if (result == "Player Wins") {
    playerScore = playerScore + 1;
    displayScore();
  } else if (result == "Player Loses") {
    computerScore = computerScore + 1;
    displayScore();
  } else {
    displayScore();
  }
  if (computerScore == 5) {
    console.log("Computer wins the match!");
  } else if (playerScore == 5) {
    console.log("Player wins the match!");
  }
}
