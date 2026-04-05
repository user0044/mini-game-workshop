const result = document.getElementById("result");

function check(answer) {
  if (answer === "a") {
    result.textContent = "Correct";
  } 
  else {
    result.textContent = "Incorrect";
  }
}
