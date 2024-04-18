const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

//? Pick computer move

function pickcomputerMove() {
  const randomNumber = Math.random();
  let compMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = "scissor";
  }
  return compMove;
}

//? "function PlayGame"

function playGame(playerMove) {
  const compMove = pickcomputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (compMove === "rock") {
      result = "tie";
    } else if (compMove === "paper") {
      result = "You lose";
    } else if (compMove === "scissor") {
      result = "You Win";
    }
  }

  if (playerMove === "paper") {
    if (compMove === "rock") {
      result = "You Win";
    } else if (compMove === "paper") {
      result = "Tie";
    } else if (compMove === "scissor") {
      result = "You lose";
    }
  }

  if (playerMove === "scissor") {
    if (compMove === "rock") {
      result = "You lose";
    } else if (compMove === "paper") {
      result = "You win";
    } else if (compMove === "scissor") {
      result = "You tie";
    }
  }

  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result} `);
}

//? "function Rock"

function rock() {
  playGame("rock");
}

//? "function Paper"

function paper() {
  playGame("paper");
}

//? "function Scissor"

function scissor() {
  playGame("scissor");
}
