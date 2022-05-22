const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0: return myArray[0];

        case 1: return myArray[1];

        case 2: return myArray[2];
    }
}
//console.log(computerPlay());


// function chooseRPS(button) {
//     const choice = document.querySelectorAll(`.button[data-code="${e.data-code}"]`);
//     if (!choice) return;
// }

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection == computerSelection) {
        return "Tie";
    }

    if (playerSelection != computerSelection) {
        if (playerSelection == "rock" & computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        }

        if (playerSelection == "scissors" & computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }

        if (playerSelection == "paper" & computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }

        if (playerSelection == "rock" & computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }

        if (playerSelection == "paper" & computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        }

        if (playerSelection == "scissors" & computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        }

    }
} 


function game() {
    let player = 0;
    let computer = 0;
    let listresult = [];

    let result = "Player: " + player.toString() + " Computer: " + computer.toString();
    return result
}
console.log(game());















    // for (let round = 0; round < 5; round++) {
    //     var playerSelection = "paper";
    //     //var playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    //     var computerSelection = computerPlay().toLowerCase();
    //     listresult = playRound(playerSelection, computerSelection).split(" ");

    //     console.log(listresult);

    //     if (listresult[1] == "Win!") {
    //         player += 1;
    //     }

    //     if (listresult[1] == "Lose!") {
    //         computer += 1;
    //     }

    //     listresult = [];
    // }