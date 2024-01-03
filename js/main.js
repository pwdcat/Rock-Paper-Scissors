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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{
    button.addEventListener('click', ()=> {
        console.log(playRound(button.id, getComputerChoice()));
    });
});

