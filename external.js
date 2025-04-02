let playerScore = 0
let computerScore = 0

rockButton = document.getElementById("rock")
paperButton = document.getElementById("paper")
scissorsButton = document.getElementById("scissors")

statusMessage = document.getElementById("status-message")

playerValue = document.getElementById("player-value")
computerValue = document.getElementById("computer-value")

rockButton.addEventListener("click", () => {
    console.log("rock")
    playRound("rock")
})
paperButton.addEventListener("click", () => {
    console.log("paper")
    playRound("paper")
})
scissorsButton.addEventListener("click", () => {
    console.log("scissors")
    playRound("scissors")
})



function playRound(humanChoice){

    if(playerScore == 5 || computerScore == 5){
        playerScore = 0
        computerScore = 0
    }

    const computerChoice = getComputerChoice()
    console.log(humanChoice, computerChoice)

    if(humanChoice == "rock"){
        switch (computerChoice){
            case "rock":
                statusMessage.innerText = "Draw!"
                break;
            case "paper":
                statusMessage.innerText = "Computer won that round!"
                computerScore += 1
                break;
            case "scissors":
                statusMessage.innerText = "You won that round!"
                playerScore += 1
                break;
        }
    }if(humanChoice == "paper"){
        switch (computerChoice){
            case "rock":
                statusMessage.innerText = "You won that round!"
                playerScore += 1
                break;
            case "paper":
                statusMessage.innerText = "Draw!"
                break;
            case "scissors":
                statusMessage.innerText = "Computer won that round!"
                computerScore += 1
                break;
        }
    }if(humanChoice == "scissors"){
        switch (computerChoice){
            case "rock":
                statusMessage.innerText = "Computer won that round!"
                computerScore += 1
                break;
            case "paper":
                statusMessage.innerText = "You won that round!"
                playerScore += 1
                break;
            case "scissors":
                statusMessage.innerText = "Draw!"
                break;
        }
    }
    playerValue.innerText = playerScore
    computerValue.innerText = computerScore

    if(playerScore == 5){
        statusMessage.innerText = "Player has won the game"
    }
    if(computerScore == 5){
        statusMessage.innerText = "Computer has won the game"
    }
}

function getHumanChoice(){
    choice = prompt("Rock, Paper, Scissors?")
    return choice.toLowerCase()
}

function getComputerChoice(){
    chocies = ["Rock", "Paper", "Scissors"]
    choice = chocies[Math.floor(Math.random() * 3)]
    return choice.toLowerCase()
}

function playGame(rounds){
    for(let i = 1; i <= rounds; i++){
        playRound()
    }
}


