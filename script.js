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
    } else if (playerSelection == "paper") {
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
    } else if (playerSelection == "rock") {
      return "Player Wins";
    } else {
      return "Tie";
    }
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function displayScore() {
    console.log(
      "Player score: " + playerScore + " || Computer Score: " + computerScore,
    );
  }

  while (playerScore < 5 && computerScore < 5) {
    let round = playRound();
    if (round == "Player Wins") {
      playerScore = playerScore + 1;
      displayScore();
    } else if (round == "Player Loses") {
      computerScore = computerScore + 1;
      displayScore();
    } else {
      displayScore();
    }
  }
  if (computerScore == 5) {
    console.log("Computer wins the match");
  } else {
    console.log("Player wins the match");
  }
}
