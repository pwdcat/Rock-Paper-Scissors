function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    switch(num){
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}

function playRound(playerSelection, computerSection){
    if(playerSelection.toUpperCase() == computerSection.toUpperCase())
        return "You Tied!"

    switch(playerSelection.toUpperCase()){
        case "ROCK":
            if(computerSection == 'Paper'){
                return "You Lose! Paper beats Rock"
            }
            else{
                return "You Won! Rock beats Scissors"
            }
        case "PAPER":
            if(computerSection == 'Scissors'){
                return "You Lose! Scissors beats Paper"
            }
            else{
                return "You Won! Paper beats Rock"
            }
        case "SCISSORS":
            if(computerSection == 'Rock'){
                return "You Lose! Rock beats Scissors"
            }
            else{
                return "You Won! Scissors beats Paper"
            }
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper, or Scissors")
        let computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection))
    }
}