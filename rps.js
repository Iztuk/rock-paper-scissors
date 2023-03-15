// Rock Paper Scissors
let userScore = 0;
let computerScore = 0;
for(let i = 0; i < 5; i++){
    let userChoice = prompt("Rock, Paper, or Scissors?")
    userChoice = userChoice.toLowerCase();

    let computerChoice = Math.floor(Math.random() * 3);
    computerChoice = getComputerChoice(computerChoice);

    console.log("Computer: " + computerChoice);

    let score = playRound(userChoice, computerChoice);
    console.log(playRound(userChoice, computerChoice));

    if(score === "Computer wins!"){
        computerScore++;
    } else if(score === "User wins!"){
        userScore++;
    } else if(score === "It's a tie!"){
        i--;
    }
}
console.log("The final score is User: " + userScore + " to Computer: " + computerScore + ". ");

function getComputerChoice(computerChoice){
    if(computerChoice == 0){
        return "rock";
    } else if(computerChoice == 1){
        return "paper";
    } else if(computerChoice == 2){
        return "scissors";
    }
}

function playRound(userChoice, getComputerChoice){
    if((userChoice === "rock" && getComputerChoice === "paper") || 
    (userChoice === "paper" && getComputerChoice === "scissors") || 
    (userChoice === "scissors" && getComputerChoice === "rock")) {
        return "Computer wins!";
    } else if(userChoice === getComputerChoice) {
        return "It's a tie!";
    } else {
        return "User wins!";
    }
}