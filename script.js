console.log("Hello Edgar")

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

const getHumanChoice = () => {
  let result = prompt("Enter your choice", "");
  return result;
}

//console.log(getHumanChoice())
//console.log(getComputerChoice());

let humanScore = 0
let computerScore = 0

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  let score = "";
  if (humanChoice === computerChoice) {
    score = "Tie"
  } else if ((humanChoice === "scissors" && computerChoice === "paper") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "rock" && computerChoice === "scissors")) {
            score = `you win! ${humanChoice} beats ${computerChoice}`
  } else {
    score = `you loose! ${computerChoice} beats ${humanChoice}`;
  }
  return score;
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(humanSelection)
console.log(computerSelection)

console.log(playRound(humanSelection, computerSelection))

