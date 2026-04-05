const scoreDisplay = document.getElementById("score");
let score = 0;

function addScore(){
  score++;
  scoreDisplay.textContent = score;
}
