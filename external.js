let playerScore = 0
let computerScore = 0

function playRound(){
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()

    console.log(humanChoice, computerChoice)
    playerScore += 1
    computerScore += 1

    if(humanChoice == "rock"){
        switch (computerChoice){
            case "rock":
                break;
            case "paper":
                computerScore += 1
                break;
        }
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

playRound()