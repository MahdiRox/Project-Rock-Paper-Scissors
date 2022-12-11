function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! scissors beats paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! paper beats rock";
  } else return "draw!";
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userAnswer = prompt();
    let computerSelection = getComputerChoice();
    let round = playRound(userAnswer, computerSelection);
    if (round.includes("Win") === true) {
      console.log(round);
      userScore++;
      console.log(`user score is ${userScore}`);
    } else if (round.includes("Lose") === true) {
      console.log(round);
      computerScore++;
      console.log(`computer score is ${computerScore} `);
    } else {
      console.log("It's A Draw!");
    }
  }
  if (userScore > computerScore) {
    console.log("You Won!");
  } else if (computerScore > userScore) {
    console.log("You Lost");
  } else console.log("Draw!");
}

game();
