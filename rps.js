const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const resetBtn = document.querySelector(".resetBtn");

let userScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", e => {
    if(userScore === 5 || computerScore === 5){
        if(userScore === 5){
            document.getElementById("winner").innerHTML = "User Wins!";
            return;
        } else if(computerScore === 5){
            document.getElementById("winner").innerHTML = "Computer Wins!";
            return;
        }
    }
    let userChoice = "Rock"
    let computerChoice = getComputerChoice();
    document.getElementById("choices").innerHTML = "User: " + userChoice + " Computer: " + computerChoice;
    let score = playRound(userChoice, computerChoice);
    document.getElementById("roundResult").innerHTML = score;
    if(score === "User wins!"){
        userScore++;
        document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    } else if(score === "Computer wins!"){
        computerScore++;
        document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    }
})

paperBtn.addEventListener("click", e => {
    if(userScore === 5 || computerScore === 5){
        if(userScore === 5){
            document.getElementById("winner").innerHTML = "User Wins!";
            return;
        } else if(computerScore === 5){
            document.getElementById("winner").innerHTML = "Computer Wins!";
            return;
        }
    }
    userChoice = "Paper"
    let computerChoice = getComputerChoice();
    document.getElementById("choices").innerHTML = "User: " + userChoice + " Computer: " + computerChoice;
    let score = playRound(userChoice, computerChoice);
    document.getElementById("roundResult").innerHTML = score;
    if(score === "User wins!"){
        userScore++;
        document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    } else if(score === "Computer wins!"){
        computerScore++;
        document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    }
})

scissorsBtn.addEventListener("click", e => {
    if(userScore === 5 || computerScore === 5){
        if(userScore === 5){
            document.getElementById("winner").innerHTML = "User Wins!";
            return;
        } else if(computerScore === 5){
            document.getElementById("winner").innerHTML = "Computer Wins!";
            return;
        }
    }
    userChoice = "Scissors"
    let computerChoice = getComputerChoice();
    document.getElementById("choices").innerHTML = "User: " + userChoice + " Computer: " + computerChoice;
    let score = playRound(userChoice, computerChoice);
    document.getElementById("roundResult").innerHTML = score;
    if(score === "User wins!"){
        userScore++;
        document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    } else if(score === "Computer wins!"){
        computerScore++;
        document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    }
})

resetBtn.addEventListener("click", e => {
    userScore = 0;
    computerScore = 0;
    document.getElementById("score").innerHTML = "User: " + userScore + " Computer: " + computerScore;
    document.getElementById("winner").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("roundResult").innerHTML = "";
})

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return "Rock";
    } else if(computerChoice === 1){
        return "Paper";
    } else if(computerChoice === 2){
        return "Scissors";
    }
}

function playRound(userChoice, computerChoice){
    if((userChoice === "Rock" && computerChoice === "Paper") || 
    (userChoice === "Paper" && computerChoice === "Scissors") || 
    (userChoice === "Scissors" && computerChoice === "Rock")) {
        return "Computer wins!";
    } else if(userChoice === computerChoice) {
        return "It's a tie!";
    } else {
        return "User wins!";
    }
}