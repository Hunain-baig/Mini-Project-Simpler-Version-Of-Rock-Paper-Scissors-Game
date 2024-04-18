const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

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
      result = "tie";
    } else if (compMove === "scissor") {
      result = "You lose";
    }
  }

  if (playerMove === "scissor") {
    if (compMove === "rock") {
      result = "You lose";
    } else if (compMove === "paper") {
      result = "You Win";
    } else if (compMove === "scissor") {
      result = "tie";
    }
  }
  
  //? update score:

  if (result === "You Win") {
    score.wins += 1;
  }
   else if (result === "You lose") {
     score.losses += 1;
    } 
  else if (result === "tie") {
    score.ties += 1;
  }

  alert(` You picked ${playerMove}. Computer picked ${compMove}. ${result} 
  Wins : ${score.wins} , losses : ${score.losses} , ties : ${score.ties}`);
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

  //? function reset:
  
  function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
  }