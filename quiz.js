var mtScore = 0
var enScore = 0

var numQuestions = 0

var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');

var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');

var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');

var result = document.getElementById('result');

var restart = document.getElementById('restart')
  
q1a1.addEventListener("click", mt);
q1a2.addEventListener("click", en);

q2a1.addEventListener("click", en);
q2a2.addEventListener("click", mt);

q3a1.addEventListener("click", mt);
q3a2.addEventListener("click", en);

restart.addEventListener("click", reset);

function mt(){
  mtScore += 1
  numQuestions += 1

  console.log("Math score = " + mtScore + ", questions answered = " + numQuestions)

  if (numQuestions == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function en(){
  enScore += 1
  numQuestions += 1

  console.log("English score = " + enScore + ", questions answered = " + numQuestions)
  
  if (numQuestions == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if(mtScore >= 2) {
    console.log("Your School Subject is Math!");
    result.innerHTML = "Your School Subject is Math!"
  } else if(enScore >= 2) {
    console.log("Your School Subject is English!")
    result.innerHTML = "Your School Subject is English!"
  }
}

function reset(){
  result.innerHTML = "Your School Subject is..."
  mtScore = 0
  enScore = 0
  numQuestions = 0
  console.log("mtScore, enScore, numQuestions: " + mtScore + ", " + enScore + ", " + numQuestions)
}
