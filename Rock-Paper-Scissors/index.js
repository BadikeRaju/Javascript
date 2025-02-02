const choices=["👊","✋","✌️"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playGame(playerchoice){
    const computerChoice=choices[Math.floor(Math.random()*choices.length)];
    let result="";
    if(playerchoice===computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case "👊":
                result=(computerChoice==="✌️")?"YOU WIN!":"YOU LOSE!";
                break;
            case "✋":
                result=(computerChoice==="👊")?"YOU WIN!":"YOU LOSE!";
                break;
            case "✌️":
                result=(computerChoice==="✋")?"YOU WIN!":"YOU LOSE!";
                break;
        }
    }    
    playerDisplay.innerHTML=`PLAYER: ${playerchoice}`;
    computerDisplay.innerHTML=`COMPUTER: ${computerChoice}`;
    resultDisplay.innerHTML=result;

    resultDisplay.classList.remove("greenText","redText");
    switch(result){
        case "YOU WIN!":
            resultDisplay.style.color="green";
            playerScore++;
            playerScoreDisplay.innerHTML=playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.style.color="red";
            computerScore++;
            computerScoreDisplay.innerHTML=computerScore;
            break;
        default:
            resultDisplay.style.color="hsl(206, 44.30%, 41.60%)";
            break;
    }
}