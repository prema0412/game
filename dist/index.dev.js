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
  secondsRemaining = '50';
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
  expectedResponse = 'N';
  handlerOne = setInterval(function () {
    console.log(timerDisplay.innerHTML);
    expectedResponse = 'Yes';
    console.log(expectedResponse);
    changeColor("red", "green", "orange", "blue", "red");
  }, 2000);
  expectedResponse = 'Y';
  handlerTwo = setInterval(function () {
    console.log(timerDisplay.innerHTML);
    console.log(expectedResponse);
    changeColor("red", "green", "orange", "blue", "red");
  }, 2000);
  expectedResponse = 'Y';
  handlerThree = setInterval(function () {
    console.log(timerDisplay.innerHTML);
    console.log(expectedResponse);
    changeColor("red", "green", "orange", "blue", "red");
  }, 2000);
  expectedResponse = 'N';
  handlerFour = setInterval(function () {
    console.log(secondsRemaining);
    console.log(expectedResponse);
    changeColor("yellow", "blue", "red", "green", "yellow");
  }, 7000);
  expectedResponse = 'Y';
  handlerFive = setInterval(function () {
    console.log(secondsRemaining);
    console.log(expectedResponse);
    changeColor("yellow", "blue", "red", "green", "yellow");
  }, 7000);
  expectedResponse = 'Y';
  handlerSix = setInterval(function () {
    console.log(secondsRemaining);
    console.log(expectedResponse);
    changeColor("yellow", "blue", "red", "green", "yellow");
  }, 7000);
  expectedResponse = 'N';
  handlerSeven = setInterval(function () {
    console.log(timerDisplay.innerHTML);
    console.log(expectedResponse);
    changeColor("green", "red", "blue", "yellow", "green");
  }, 8000);
  expectedResponse = 'N';
  handlerEight = setInterval(function () {
    console.log(timerDisplay.innerHTML);
    changeColor("red", "green", "orange", "blue", "red");
  }, 8000);
};

var stopGame = function stopGame() {
  alert("Your score" + " " + score);
  clearInterval(handlerOne);
  clearInterval(handlerTwo);
  clearInterval(handlerThree);
  clearInterval(handlerFour);
  clearInterval(handlerFive);
  clearInterval(handlerSix);
  clearInterval(handlerSeven);
  clearInterval(handlerEight);
  document.getElementsByClassName('final-score').innerHTML = "Your Final Score is : ".concat(score);
  score = '0';
  secondsRemaining = '50'; // secondsRemaining = 1;
  // handleTimerStart();
};

var changeColor = function changeColor(color1, color2, color3, color4, color5) {
  expectedResponse = 'Y';
  document.getElementById('circle').style.color = color1;
  document.getElementById('polygon').style.color = color2;
  document.getElementById('path1').style.color = color3;
  document.getElementById('path2').style.color = color4;
  document.getElementById('path3').style.color = color5;
  return;
}; //let us see if sleep works


var sleep = function sleep(milliseconds) {
  var date = Date.now();
  var currentDate = null;

  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}; // changeColor("green", "red", "blue", "yellow","green");
// changeColor("red", "green", "orange", "blue", "red");
// changeColor("yellow", "blue", "red", "green", "yellow");
// changeColor("blue", "red", "blue", "yellow","blue");
// changeColor("orange", "green", "orange", "blue", "orange");