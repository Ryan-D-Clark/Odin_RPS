let playerScore = 0
let computerScore = 0

function playRound(){
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    console.log(humanChoice, computerChoice)

    if(humanChoice == "rock"){
        switch (computerChoice){
            case "rock":
                break;
            case "paper":
                computerScore += 1
                break;
            case "scissors":
                playerScore += 1
                break;
        }
    }if(humanChoice == "paper"){
        switch (computerChoice){
            case "rock":
                playerScore += 1
                break;
            case "paper":
                break;
            case "scissors":
                computerScore += 1
                break;
        }
    }if(humanChoice == "scissors"){
        switch (computerChoice){
            case "rock":
                computerScore += 1
                break;
            case "paper":
                playerScore += 1
                break;
            case "scissors":
                break;
        }
    }
    console.log("Human", humanChoice, playerScore, "Computer", computerChoice, computerScore)

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

playGame(5)