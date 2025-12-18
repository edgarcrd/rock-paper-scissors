
const buttons = document.querySelectorAll("button")

  let humanScore = 0
  let computerScore = 0

buttons.forEach((button) => {

  button.addEventListener("click", () => {
    const result = document.querySelector("#result");
    result.replaceChildren();

    let roundWinner = playRound(button.textContent)

    if (roundWinner.indexOf("win") > 0) {
      humanScore++;
    } else if (roundWinner.indexOf("loose") > 0) {
      computerScore++;
    }

    const winner = document.createElement("div");
    winner.classList.add("winner")
    winner.textContent = roundWinner

    result.appendChild(winner)

    const score = document.createElement("div");
    score.classList.add("score")
    score.textContent = "SCORE:                  " +
                        "You - " + humanScore + "         " +
                        "PC - " + computerScore

    result.appendChild(score)

    //alert(humanScore + "  " + computerScore)

    const final = document.createElement("div");
    final.classList.add("final")



    if (humanScore === 5) {
      final.textContent = "Congrats! YOU WIN"
      result.appendChild(final)
      //alert("Congrats YOU WIN")
      humanScore = 0
      computerScore = 0
    } else if (computerScore === 5) {
      final.textContent = "Sorry. YOU LOOSE"
      result.appendChild(final)
      //alert("Sorry YOU LOOSE")
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
  //alert(score)
  return score;
}