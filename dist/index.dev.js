"use strict";

// Play this game to practice agility, obervation and memory and listen to the healing Tibetian music while playing it
var secondsRemaining = '50';
var score = '0';
var timerDisplay = document.getElementById("timer-heading");
var circle = document.getElementById('circle');
var path1 = document.getElementById('path1');
var path2 = document.getElementById('path2');
var path3 = document.getElementById('path3');
var polygon = document.getElementById('polygon');
var image = document.getElementsByClassName('target__img');
var expectedResponse = 'Yes'; // This is our timer function. This will stop the game after 50 seconds

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
}; // This function updates the score if you are right when you click 'Yes' button i.e. you identify that the image displayed is same as the previous image


var handleOkResponse = function handleOkResponse() {
  console.log("I am in Ok" + " " + expectedResponse); // if (document.getElementById('ok-button').innerHTML == 'Yes') score++;

  if (document.getElementById('ok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
}; // This function updates the score if you are right when you click 'No' button i.e. you identify that the image displayed is different then the previous image


var handleNokResponse = function handleNokResponse() {
  console.log("I am in nOk" + " " + expectedResponse); //if (document.getElementById('nok-button').innerHTML == 'No') score--;

  if (document.getElementById('nok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
}; //Let's start the game


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
  expectedResponse = 'N';
  handlerFive = setInterval(function () {
    console.log(secondsRemaining);
    console.log(expectedResponse);
    changeColor("yellow", "blue", "red", "green", "yellow");
  }, 7000);
  expectedResponse = 'N';
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

var colourChangeCounter = '0'; //Let us change the colours of different segments of the SVG image

var changeColor = function changeColor(color1, color2, color3, color4, color5) {
  colourChangeCounter++;
  console.log("changing color" + " " + colourChangeCounter);
  document.getElementById('circle').style.color = color1;
  document.getElementById('polygon').style.color = color2;
  document.getElementById('path1').style.color = color3;
  document.getElementById('path2').style.color = color4;
  document.getElementById('path3').style.color = color5;
  return;
}; // Time up, let's stop the game and see your score  


var stopGame = function stopGame() {
  var _final = document.getElementById('final');

  _final.style.display = "block";
  _final.innerHTML = "Your Score is:  " + score;
  console.log(_final);
  clearInterval(handlerOne);
  clearInterval(handlerTwo);
  clearInterval(handlerThree);
  clearInterval(handlerFour);
  clearInterval(handlerFive);
  clearInterval(handlerSix);
  clearInterval(handlerSeven);
  score = '0';
  secondsRemaining = '50';
}; //let us see if sleep works - this froze everuthing so not using
// const sleep = (milliseconds) => {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }