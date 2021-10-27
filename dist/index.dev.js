"use strict";

var secondsRemaining = '50';
var score = '0';
var timerDisplay = document.getElementById("timer-heading");
var expectedResponse = 'Yes';

var handleTimerStart = function handleTimerStart() {
  startGame();
  var timerHandler = setInterval(function () {
    if (secondsRemaining === 0) {
      clearInterval(timerHandler);
      stopGame();
    }

    timerDisplay.innerHTML = secondsRemaining;
    secondsRemaining--;
  }, 1000);
};

var handleOkResponse = function handleOkResponse() {
  // if (document.getElementById('ok-button').innerHTML == 'Yes') score++;
  if (document.getElementById('ok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
};

var handleNokResponse = function handleNokResponse() {
  //if (document.getElementById('nok-button').innerHTML == 'No') score--;
  if (document.getElementById('nok-button').innerHTML === expectedResponse) score--;
  document.getElementById('score-button').innerHTML = score;
};

var startGame = function startGame() {
  expectedResponse = 'Yes'; // for (let i=0; i<=5000; i++) {
  //     expectedResponse = 'Yes'
  //     console.log("I am starting" + " "+i);

  handlerOne = setInterval(changeColorTwo, 3000);
  console.log();
  changeCourse(expectedResponse); //  i++;
};

var changeCourse = function changeCourse() {
  expectedResponse = 'No';
  changeColorOne();
};

var stopGame = function stopGame() {
  alert("Your score" + " " + score);
  document.getElementsByClassName('final-score').innerHTML = "Your Final Score is : ".concat(score);
  score = 0; // secondsRemaining = 1;
  // handleTimerStart();
};

var changeColorOne = function changeColorOne() {
  document.getElementById('circle').style.color = "rgb(129, 26, 26)";
  document.getElementById('path1').style.color = "rgb(153, 93, 93)";
  document.getElementById('path2').style.color = "rgb(39, 5, 5)";
  document.getElementById('path3').style.color = "brown";
  document.getElementById('polygon').style.color = "rgb(129, 26, 26)";
}; // handlerOne = setInterval(changeColorOne, 6000);


var changeColorTwo = function changeColorTwo() {
  document.getElementById('circle').style.color = "hsl(120, 100%, 50%);";
  document.getElementById('path1').style.color = "hsl(120, 100%, 75%)";
  document.getElementById('path2').style.color = "hsl(120, 100%, 25%)";
  document.getElementById('path3').style.color = "hsl(120, 60%, 70%)";
  ;
  document.getElementById('polygon').style.color = "hsl(120, 60%, 70%)";
}; // handlerTwo = setInterval(changeColorTwo, 12000);