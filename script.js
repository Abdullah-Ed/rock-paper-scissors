function getComputerChoice(){
  let computerChoice
  computerChoice = Math.floor(Math.random()* 3)



  if(computerChoice === 0){
    let Rock = computerChoice
    console.log('Rock')
  } else if (computerChoice === 1){
    let Paper = computerChoice
    console.log('Paper')
  } else{
    let Scissors = computerChoice
    console.log('Scissors')
  }
  console.log
  console.log(computerChoice)
  
}

getComputerChoice()