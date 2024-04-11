let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound() {
  let getPlayerChoice = prompt("Choose one: (rock, paper, scissors)");
  let playerSelection = getPlayerChoice.toLowerCase();
  let computerSelection = getComputerChoice();
  console.log("Computer Chooses " + computerSelection);
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      return "Tie";
    } else if (playerSelection == paper) {
      return "Player Wins";
    } else {
      return "Player Loses";
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "paper") {
      return "Tie";
    } else if ((playerSelection = "rock")) {
      return "Player Loses";
    } else {
      return "Player Wins";
    }
  } else {
    if (playerSelection == "paper") {
      return "Player Loses";
    } else if (playerSelection == "Rock") {
      return "Player Wins";
    } else {
      return "Tie";
    }
  }
}
