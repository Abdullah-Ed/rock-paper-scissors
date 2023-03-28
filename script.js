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

function gameRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  } else if(playerSelection === 'paper' && computerSelection === 'rock'){
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
  }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }else{
    console.log('Tie')
  }
}

let playerSelection = 'rock';
let computerSelection = getComputerChoice();

console.log(`Computer chose: ${computerSelection}`);
gameRound(playerSelection, computerSelection);