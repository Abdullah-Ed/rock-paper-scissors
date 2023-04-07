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
let result
function gameRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === paper) {
    computerScore++;
    return result =`You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === rock && computerSelection === scissors) {
    playerScore++;
    return result = `You Win! ${playerSelection}  beats ${computerSelection}`;
  } else if (playerSelection === scissors && computerSelection === rock) {
    computerScore++;
    return result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === scissors && computerSelection === paper) {
    playerScore++;
    return result = `You Win! ${playerSelection}  beats ${computerSelection}`;
  } else if (playerSelection === paper && computerSelection === rock) {
    playerScore++;
    return result = `You Win! ${playerSelection}  beats ${computerSelection}`;
  } else if (playerSelection === paper && computerSelection === scissors) {
    computerScore++;
    return result = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return result = "Tie";
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

const currentScore = document.querySelector('.current-score')
const currentResult = document.querySelector('.result')
const gameWinner = document.querySelector('.winner')


function helper() {
  currentScore.textContent =`Wins: ${playerScore}, Losses: ${computerScore}`;
  currentResult.textContent= result

  if(playerScore === 5){
    gameWinner.textContent = 'you won reload, the page to try again'
    disableButtons()
  }else if (computerScore === 5){
    gameWinner.textContent ='you lost reload, the page to try again'
    disableButtons()
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
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

