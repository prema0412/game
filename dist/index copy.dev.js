"use strict";

var secondsRemaining = '50';
var score = '0';
var timerDisplay = document.getElementById("timer-heading");
var circle = document.getElementById('circle');
var path1 = document.getElementById('path1');
var path2 = document.getElementById('path2');
var path3 = document.getElementById('path3');
var polygon = document.getElementById('polygon');
var image = document.getElementsByClassName('target__img');
var expectedResponse = 'Yes';

var handleTimerStart = function handleTimerStart() {
  startGame();
  var timerHandler = setInterval(function () {
    if (secondsRemaining == '0') {
      clearInterval(timerHandler);
      stopGame();
    }

    timerDisplay.innerHTML = secondsRemaining;
    secondsRemaining--;
  }, 1000);
};

var handleOkResponse = function handleOkResponse() {
  console.log("I am in Ok" + " " + expectedResponse); // if (document.getElementById('ok-button').innerHTML == 'Yes') score++;

  if (document.getElementById('ok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
};

var handleNokResponse = function handleNokResponse() {
  console.log("I am in nOk" + " " + expectedResponse); //if (document.getElementById('nok-button').innerHTML == 'No') score--;

  if (document.getElementById('nok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
};

var startGame = function startGame() {
  expectedResponse = 'Yes';
  handlerOne = setInterval(function () {
    console.log(timerDisplay.innerHTML);
    expectedResponse = 'Yes';
    console.log(expectedResponse);
    changeColor(red, green, orange, blue, yellow, red);
    changeColor(green, red, blue, yellow, red, green);
    changeColor(yellow, blue, red, green, orange, yellow);
  }, 1000);
}; //   handlerTwo = setInterval(() => {
//     console.log(timerDisplay.innerHTML);
//     if (timerDisplay.innerHTML >= '45') {
//         clearInterval(handlerOne);
//     }
//     changeColorTwo();
//     changeColorThree();
// }, 3000);    
// const changeCourse = () => {
// expectedResponse = 'No';
// changeColorOne();
// }


var stopGame = function stopGame() {
  alert("Your score" + " " + score);
  clearInterval(handlerOne);
  document.getElementsByClassName('final-score').innerHTML = "Your Final Score is : ".concat(score);
  score = '0'; // secondsRemaining = 1;
  // handleTimerStart();
};

var changeColor = function changeColor(color1, color2, color3, color4, color5, color6) {
  console.log("in change color");
  document.getElementById('circle').style.color = "\"".concat(color1, "\"");
  document.getElementById('polygon').style.color = "\"".concat(color2, "\"");
  document.getElementById('path1').style.color = "\"".concat(color3, "\"");
  document.getElementById('path2').style.color = "\"".concat(color4, "\"");
  document.getElementById('path3').style.color = "\"".concat(color5, "\"");
}; // handlerOne = setInterval(changeColorOne, 6000);


var changeColorTwo = function changeColorTwo() {
  document.getElementById('circle').style.color = "orange";
  document.getElementById('path1').style.color = "green";
  document.getElementById('path2').style.color = "orange";
  document.getElementById('path3').style.color = "green";
  document.getElementById('polygon').style.color = "orange";
};

var changeColorThree = function changeColorThree() {
  document.getElementById('circle').style.color = "#610C04";
  document.getElementById('path1').style.color = "hsl(120, 100%, 75%)";
  document.getElementById('path2').style.color = "hsl(120, 100%, 25%)";
  document.getElementById('path3').style.color = "hsl(120, 60%, 70%)";
  ;
  document.getElementById('polygon').style.color = "#710C04";
}; // handlerTwo = setInterval(changeColorTwo, 12000);