const myArray = ["rock", "paper", "scissors"];
const body = document.body;
const btn = document.querySelectorAll('button');
var playResult = document.createElement('p');
var roundResult;

var playerScore = 0;
var computerScore = 0;
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');


function getPlayersChoice() {

    btn.forEach((button) => {
        button.addEventListener('click', function bfunc()  {
            roundResult = playRound(button.id, computerPlay());
            addText(roundResult);
            ScoreBoard(roundResult);
        })
    });
}


function computerPlay() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0: return myArray[0];

        case 1: return myArray[1];

        case 2: return myArray[2];
    }
}


function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == computerSelection) {
        console.log("Tie");
        result = "Tie";
    }

    if (playerSelection != computerSelection) {
        if (playerSelection == "rock" & computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
            result = "You Win! Rock beats Scissors";
        }

        if (playerSelection == "scissors" & computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            result = "You Lose! Rock beats Scissors";
        }

        if (playerSelection == "paper" & computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
            result = "You Win! Paper beats Rock";
        }

        if (playerSelection == "rock" & computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            result = "You Lose! Paper beats Rock";
        }

        if (playerSelection == "paper" & computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            result = "You Lose! Scissors beats Paper";
        }

        if (playerSelection == "scissors" & computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
            result = "You Win! Scissors beats Paper";
        }

    }
    return result;
}



function game() {

    getPlayersChoice();
}
game();

function addText(text) {
    playResult.remove();
    playResult = document.createElement('p');
    body.append(playResult);
    playResult.innerText = text;
    playResult.style.color = "whitesmoke";
    playResult.style.textAlign = "center";
    playResult.style.fontSize = "1.5em";

}

function ScoreBoard(result) {

    let splittedList = [];
    splittedList = result.split(" ");

    if (splittedList[1] == "Win!") {
        playerScore += 1;
        player.innerText = playerScore;
    }

    if (splittedList[1] == "Lose!") {
        computerScore += 1;
        computer.innerText = computerScore;
    }

    if (splittedList[0] == "Tie") {
        player.innerText = playerScore;
        computer.innerText = computerScore;
    }

    if (playerScore == 5 && computerScore < 5) {
        playResult.innerText = 'Congrats! You Win!';  
        gameOver();  
    }
    if ((playerScore < 5 && computerScore == 5)) {
        playResult.innerText = 'Game Over! You Lose!';
        gameOver();  
    }

}

function gameOver() {
    playerScore = 0;
    computerScore = 0;
}