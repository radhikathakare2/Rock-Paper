let userScore=0;
let computerScore=0;

const moves = document.querySelectorAll(".moves");
const Uscore = document.querySelector("#userScore");
const Cscore = document.querySelector("#computerScore");
const result = document.querySelector(".msgBox");
const restartBtn = document.querySelector(".restart");

const pym =document.querySelector("#pym");

const genCompMove = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random()*3);
    console.log(options[randomChoice]);
    return options[randomChoice];
}

const play = (userChoice) => {
    const compChoice = genCompMove();
    
    if(userChoice===compChoice){
        draw(userChoice, compChoice);
        result.style.backgroundColor = "rgba(237, 179, 5, 0.998)";
    }else{
        result.style.backgroundColor = "";
    }

    checkRock(userChoice, compChoice);
    checkPaper(userChoice, compChoice);
    checkScissors(userChoice, compChoice);
}

function checkRock(userChoice, compChoice){
    if(userChoice=="Rock" && compChoice=="Paper"){
        Cscore.innerHTML=++computerScore;
        Uscore.innerHTML = userScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU LOST! <br> ${compChoice} beats ${userChoice}`;
        restartBtn.style.display = 'block';
        result.style.backgroundColor = "Red";
    }else if(userChoice=="Rock" && compChoice=="Scissors"){
        Uscore.innerHTML=++userScore;
        Cscore.innerHTML = computerScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU WIN! <br> ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        restartBtn.style.display = 'block';
    }
}

function checkPaper(userChoice, compChoice){
    if(userChoice=="Paper" && compChoice=="Rock"){
        Uscore.innerHTML=++userScore;
        Cscore.innerHTML = computerScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU WIN! <br> ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        restartBtn.style.display = 'block';
    }
    else if(userChoice=="Paper" && compChoice=="Scissors"){
        Cscore.innerHTML=++computerScore;
        Uscore.innerHTML = userScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU LOST! <br>  ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "Red";
        restartBtn.style.display = 'block';
    }
}
function checkScissors(userChoice, compChoice){
    if(userChoice=="Scissors" && compChoice=="Paper"){
        Uscore.innerHTML=++userScore;
        Cscore.innerHTML = computerScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU WIN! <br> ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        restartBtn.style.display = 'block';
    }else if(userChoice=="Scissors" && compChoice=="Rock"){
        Cscore.innerHTML = ++computerScore;
        Uscore.innerHTML = userScore;

        result.style.display = 'flex';
        result.style.alignItems = 'center';
        result.style.justifyContent = 'center';
        result.innerHTML = `YOU LOST! <br> ${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "Red";
        restartBtn.style.display = 'block';

    }  
}

moves.forEach((move) => {
    move.addEventListener("click", () => {
        pym.style.animation = "none";
        result.style.animation = "pulse 1.5s 2 ease-in-out;"
        const userChoice = move.getAttribute("id");
        play(userChoice);
    })
})

function draw(userChoice, compChoice){
    result.style.display = 'flex';
    result.style.alignItems = 'center';
    result.style.justifyContent = 'center';
    result.innerHTML = "Draw!";
    restartBtn.style.display = 'block';
}

restartBtn.addEventListener("click", () => {
    Cscore.innerHTML = ``;
    Uscore.innerHTML = ``;
    result.style.display = 'none';
    restartBtn.style.display = 'none';
    pym.style.animation = "pulse 1.5s infinite ease-in-out";
    userScore=0;
    computerScore=0;
})