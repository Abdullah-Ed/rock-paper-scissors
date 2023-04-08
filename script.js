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
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', function() {
  gameRound('rock', getComputerChoice());
  helper();
});

paperBtn.addEventListener('click', function() {
  gameRound('paper', getComputerChoice());
  helper();
});

scissorsBtn.addEventListener('click', function() {
  gameRound('scissors', getComputerChoice());
  helper();
});

const currentScore = document.querySelector('.current-score')
const currentResult = document.querySelector('.result')
const gameWinner = document.querySelector('.winner')


function helper() {
  currentScore.textContent =`Wins: ${playerScore}, Losses: ${computerScore}`;
  currentResult.textContent= result

  if(playerScore === 5){
    gameWinner.textContent = 'You won! Reload the page to try again'
    disableButtons()
  }else if (computerScore === 5){
    gameWinner.textContent ='You lost! Reload the page to try again'
    disableButtons() 
  }
}



function disableButtons() {
  rockBtn.classList.add('disabled');
  paperBtn.classList.add('disabled');
  scissorsBtn.classList.add('disabled');

  // disable image buttons
  const images = document.querySelectorAll('.img');
  images.forEach(img => {
    img.style.pointerEvents = 'none';
  });
}


