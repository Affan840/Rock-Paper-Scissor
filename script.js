let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let compScore = document.querySelector(".compScore");
let yourScore = document.querySelector(".yourScore");
let s = 0, c = 0
let gencompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * 3);
    return options[num];
}
let showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        s++;
        yourScore.innerText = `${s}`;
    }
    else {
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        c++;
        compScore.innerText = `${c}`;

    }
}
let playGame = (userChoice) => {
    let compChoice = gencompChoice();
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
let gameDraw = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "grey";
};