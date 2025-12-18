
const buttons = document.querySelectorAll("button")

  let humanScore = 0
  let computerScore = 0

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //playRound(button.textContent)
    //alert(playGame(button.textContent))
    //alert(button.textContent)

    let roundWinner = playRound(button.textContent)

    if (roundWinner.indexOf("win") > 0) {
      humanScore++;
    } else if (roundWinner.indexOf("loose") > 0) {
      computerScore++;
    }

    alert(humanScore + "  " + computerScore)

    if (humanScore === 5) {
      alert("Congrats YOU WIN")
      humanScore = 0
      computerScore = 0
    } else if (computerScore === 5) {
      alert("Sorry YOU LOOSE")
      humanScore = 0
      computerScore = 0
    }

  })
})

const playRound = (humanChoice) => {

  const getComputerChoice = () => {
    let computerHand = 0;
    let computerChoice = ""
    computerHand = Math.floor(Math.random() * 3) + 1;
    if (computerHand === 1) {
      computerChoice = "rock";
    } else if (computerHand === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors"
    }
    return computerChoice;
  }

  let computerChoice = getComputerChoice();

  humanChoice = humanChoice.toLowerCase();
  let score = "";
  if (humanChoice === computerChoice) {
    score = "Tie!"
  } else if ((humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "rock" && computerChoice === "scissors")) {
            score = `you win! ${humanChoice} beats ${computerChoice}`
  } else {
    score = `you loose! ${computerChoice} beats ${humanChoice}`;
  }
  //console.log(score);
  alert(score)
  return score;
}



const playGame = (humanChoice) => {



  // const getHumanChoice = () => {
  //   let result = prompt("Rock, Paper or Scissors?", "");
  //   return result;
  // }

  let computerChoice = getComputerChoice()



  let test = roundWinner(humanChoice, computerChoice)



  return test

  // let humanScore = 0;
  // let computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  //   let humanSelection = getHumanChoice()
  //   let computerSelection = getComputerChoice()
  //   roundWinner = playRound(humanSelection, computerSelection)
  //   if (roundWinner.indexOf("win") > 0) {
  //     humanScore++;
  //   } else if (roundWinner.indexOf("loose") > 0) {
  //     computerScore++;
  //   }
  //   console.log(`User: ${humanScore}, Computer: ${computerScore}`)
  //   alert(`User: ${humanScore}\nComputer: ${computerScore}`)
  // }

  // if (humanScore === computerScore) {
  //   alert(`It was a Tie. Good game though!\nUser: ${humanScore}\nComputer: ${computerScore}`)
  // } else if (humanScore > computerScore){
  //   alert(`Congrats! You are the winner!\nUser: ${humanScore}\nComputer: ${computerScore}`)
  // } else {
  //   alert(`Sorry! Not your game\nUser: ${humanScore}\nComputer: ${computerScore}`)
  // }
}

//playGame()