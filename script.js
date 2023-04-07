const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return rock;
  } else if (randomNumber === 1) {
    return paper;
  } else {
    return scissors;
  }
}


let playerScore = 0;
let computerScore = 0;

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === paper) {
    computerScore++;
    return `You Lose! `;
  } else if (playerSelection === rock && computerSelection === scissors) {
    playerScore++;
    return `You Win! `;
  } else if (playerSelection === scissors && computerSelection === rock) {
    computerScore++;
    return `You Lose! `;
  } else if (playerSelection === scissors && computerSelection === paper) {
    playerScore++;
    return `You Win! `;
  } else if (playerSelection === paper && computerSelection === rock) {
    playerScore++;
    return `You Win! `;
  } else if (playerSelection === paper && computerSelection === scissors) {
    computerScore++;
    return `You lose! `;
  } else if (playerSelection === computerSelection) {
    return "Tie";
  } else {
    return "Choice does not exist";
  }
}

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
  gameRound(rock, getComputerChoice());
  helper();
});

const paperBtn= document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
  gameRound(paper, getComputerChoice());
  helper();
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
  gameRound(scissors, getComputerChoice());
  helper();
});

function helper() {
  console.log(`Wins: ${playerScore}, Losses: ${computerScore}`);
}



//  function game() {
//   console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
//   helper();
//   console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
//   helper();
//   console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
//   helper();
//   console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
//   helper();
//   console.log(gameRound(prompt('Rock Paper Scissors'), getComputerChoice()));
//   helper();

//    if (playerScore>computerScore){
//      console.log('You win the game')
//    }else if (playerScore<computerScore){
//      console.log('You lost the game')
//    }else{
//      console.log('no one won! try again')
//    }
//  }

// game();

