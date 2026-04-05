let answer =
Math.floor(Math.random()*10)+1;

function check(){
  let userGuess =
    document
    .getElementById("guess")
    .value;
  if(userGuess == answer){
    document
    .getElementById("result")
    .innerText = "Correct";
  }
    
else if(userGuess > answer){
  document
  .getElementById("result")
  .innerText = "Too high";
}
else{
  document
  .getElementById("result")
  .innerText = "Too low";
}
}
