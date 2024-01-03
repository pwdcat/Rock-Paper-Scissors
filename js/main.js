let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
const computer = document.getElementById('computer');
const player = document.getElementById('player');

buttons.forEach((button) =>{
    button.addEventListener('click', ()=> {
        results.textContent = playRound(button.id, getComputerChoice());
    });
});

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
    let output = '';
    switch(playerSelection.toUpperCase()){
        case "ROCK":
            if(computerSection == 'Paper'){
                computerScore++;
                output = "You Lose! Paper beats Rock"
            }
            else{
                playerScore++;
                output = "You Won! Rock beats Scissors"
            }
            break;
        case "PAPER":
            if(computerSection == 'Scissors'){
                computerScore++;
                output = "You Lose! Scissors beats Paper"
            }
            else{
                playerScore++;
                output = "You Won! Paper beats Rock"
            }
            break;
        case "SCISSORS":
            if(computerSection == 'Rock'){
                computerScore++;
                output = "You Lose! Rock beats Scissors"
            }
            else{
                playerScore++;
                output = "You Won! Scissors beats Paper"
            }
            break;
    }

    computer.textContent = computerScore;
    player.textContent = playerScore;
    return output;

}



