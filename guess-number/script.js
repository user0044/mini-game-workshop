const result = document.getElementById("result");
const guessInput = document.getElementById("guess");
const answer = Math.floor(Math.random() * 10) + 1;

function check() {
  const userGuess = Number(guessInput.value);
  if (userGuess === answer) {
    result.textContent = "Correct";
  } 
  else if (userGuess > answer) {
    result.textContent = "Too high";
  } 
  else {
    result.textContent = "Too low";
  }
}
