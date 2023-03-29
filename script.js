function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let i = 0;
let h = 0;

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === null || playerSelection === undefined) {
    return "error";
  }

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    h++;
    return `You Lose! `;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    i++;
    return `You Win! `;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    h++;
    return `You Lose! `;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    i++;
    return `You Win! `;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    i++;
    return `You Win! `;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    h++;
    return `You lose! `;
  } else if (playerSelection === computerSelection) {
    return "Tie";
  } else {
    return "Choice does not exist";
  }
}

function helper() {
  console.log(`Wins: ${i}, Losses: ${h}`);
}

function game() {
  console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
  helper();
  console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
  helper();
  console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
  helper();
  console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
  helper();
  console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
  helper();

  if (i>h){
    console.log('You win the game')
  }else if (i<h){
    console.log('You lost the game')
  }else{
    console.log('no one won! try again')
  }
}

game();

