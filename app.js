//?  Rules Of Rock Paper Scissors
//*  Rock beats scissors
//*  paper beats rock
//*  Scissor beats paper

//? Strategy for javascript
//* 1-Think about what steps we need
//* 2-Convert those steps into code

//? Steps:
//* 1-Computer randomly select a move
//* 2-Compare the moves to get the result
//* 3-Display the reult in popup

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

//? "function Rock"

function rock() {
  const randomNumber = Math.random();
  let compMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = "scissor";
  }

  let result = "";

  if (compMove === "rock") {
    result = "tie";
  } else if (compMove === "paper") {
    result = "You lose";
  } else if (compMove === "scissor") {
    result = "You Win";
  }

  alert(`You picked rock. Computer picked ${compMove}. ${result} `);
}

//? "function Paper"

function paper() {
  const randomNumber = Math.random();
  let compMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = "scissor";
  }

  let result = "";

  if (compMove === "rock") {
    result = "You Win";
  } else if (compMove === "paper") {
    result = "Tie";
  } else if (compMove === "scissor") {
    result = "You lose";
  }

  alert(`You picked paper. Computer picked ${compMove}. ${result} `);
}

//? "function Scissor"

function scissor() {
  const randomNumber = Math.random();
  let compMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = "scissor";
  }

  let result = "";

  if (compMove === "rock") {
    result = "You lose";
  } else if (compMove === "paper") {
    result = "You win";
  } else if (compMove === "scissor") {
    result = "You tie";
  }

  alert(`You picked scissors. Computer picked ${compMove}. ${result} `);
}
