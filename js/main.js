let playerScore = 0;
let computerScore = 0;

/* RPS + Output Result */
const choices = document.querySelectorAll('.choice');
const results = document.getElementById('results');

/* Player + Computer Scores */
const computer = document.getElementById('computer');
const player = document.getElementById('player');

/* Pop up, Win/Lose Screen */
const closeButton = document.getElementById('close');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const p = popup.querySelector('p');

choices.forEach((button) =>{
    button.textContent = button.id;
    button.addEventListener('click', ()=> {
        results.textContent = playRound(button.id, getComputerChoice());
    });
});



function showPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'flex';
}

function hidePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';

    computerScore = 0; playerScore = 0;

    updateScore();
}

closeButton.addEventListener('click', hidePopup);

function updateScore(){
    computer.textContent = "Computer: " + computerScore;
    player.textContent = "Player: " + playerScore;
}
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

    updateScore();

    if(playerScore == 5){
        p.textContent = "You Won!";
        showPopup();
    }
    if(computerScore == 5){
        p.textContent = "You Lost."
        showPopup();
    }
    return output;

}

document.getElementById("footer").textContent = "Copyright © " + new Date().getFullYear() + " pwdcat";




