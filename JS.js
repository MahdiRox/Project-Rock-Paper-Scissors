const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const space = document.querySelector(".space");
const Score = document.querySelector(".score");
const Winner = document.querySelector(".whoWin");
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else return "scissors";
}
let humanScore = 0;
let botScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    let p = document.createElement("p");
    p.innerText = "You Win! rock beats scissors";
    humanScore++;
    space.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    let p = document.createElement("p");
    p.innerText = "You Lose! rock beats scissors";
    space.appendChild(p);
    botScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    let p = document.createElement("p");
    p.innerText = "You Lose! scissors beats paper";
    space.appendChild(p);
    botScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    let p = document.createElement("p");
    p.innerText = "You Win! scissors beats paper";
    space.appendChild(p);
    humanScore++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    let p = document.createElement("p");
    p.innerText = "You Lose! paper beats rock";
    space.appendChild(p);
    botScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    let p = document.createElement("p");
    p.innerText = "You Win! paper beats rock";
    space.appendChild(p);
    humanScore++;
  } else {
    let p = document.createElement("p");
    p.innerText = "Draw!";
    space.appendChild(p);
  }
  let P = document.createElement("p");
  P.innerText = `your Score is: ${humanScore} computer score is: ${botScore}`;
  Score.appendChild(P);
  if (humanScore > botScore && humanScore === 5) {
    let result = document.createElement("p");
    result.innerText = "Congrats! You Win the game";
    Winner.appendChild(result);
  } else if (botScore > humanScore && botScore === 5) {
    let result = document.createElement("p");
    result.innerText = "you Lost the game!";
    Winner.appendChild(result);
  }
}

rock.addEventListener("click", function name(params) {
  computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

scissors.addEventListener("click", function name(params) {
  computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

paper.addEventListener("click", function name(params) {
  computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

// if (space.includes("Win") === true) {
//   userScore++;
//   console.log(`user score is ${userScore}`);
// } else if (space.includes("Lose") === true) {
//   computerScore++;
//   console.log(`computer score is ${computerScore} `);
// }

// function game() {
//   let userScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let userAnswer = prompt();
//     let computerSelection = getComputerChoice();
//     let round = playRound(userAnswer, computerSelection);
//     if (round.includes("Win") === true) {
//       console.log(round);
//       userScore++;
//       console.log(`user score is ${userScore}`);
//     } else if (round.includes("Lose") === true) {
//       console.log(round);
//       computerScore++;
//       console.log(`computer score is ${computerScore} `);
//     } else {
//       console.log("It's A Draw!");
//     }
//   }
//   if (userScore > computerScore) {
//     console.log("You Won!");
//   } else if (computerScore > userScore) {
//     console.log("You Lost");
//   } else console.log("Draw!");
// }

// game()
