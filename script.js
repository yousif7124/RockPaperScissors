let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.round(Math.random() * 3);
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

const lock = document.querySelector("#lockIn");
lock.addEventListener("click", playRound);

function playRound() {
  let computerSelection = getComputerChoice();
  console.log("Computer Chooses " + computerSelection);
  if (computerSelection == "rock") {
    if (playerChoice == "rock") {
      return "Tie";
    } else if (playerChoice == "paper") {
      return "Player Wins";
    } else {
      return "Player Loses";
    }
  } else if (computerSelection == "paper") {
    if (playerChoice == "paper") {
      return "Tie";
    } else if ((playerChoice = "rock")) {
      return "Player Loses";
    } else {
      return "Player Wins";
    }
  } else {
    if (playerChoice == "paper") {
      return "Player Loses";
    } else if (playerChoice == "rock") {
      return "Player Wins";
    } else {
      return "Tie";
    }
  }
}

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;

function displayScore() {
  console.log(
    "Player score: " + playerScore + " || Computer Score: " + computerScore,
  );
}

//   while (playerScore < 5 && computerScore < 5) {
//     let round = playRound();
//     if (round == "Player Wins") {
//       playerScore = playerScore + 1;
//       displayScore();
//     } else if (round == "Player Loses") {
//       computerScore = computerScore + 1;
//       displayScore();
//     } else {
//       displayScore();
//     }
//   }
//   if (computerScore == 5) {
//     console.log("Computer wins the match");
//   } else {
//     console.log("Player wins the match");
//   }
// }
