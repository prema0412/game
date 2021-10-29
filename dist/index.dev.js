"use strict";

// Play this game to practice agility, obervation and memory and listen to the healing Tibetian music while playing it
var secondsRemaining = '50';
var score = '0';
var gameOn = '';
var timerDisplay = document.getElementById("timer-heading");

var _final = document.getElementById('final');

var startButton = document.getElementById('start-button');
var expectedResponse = 'Yes'; // This is our timer function. This will stop the game after 50 seconds

var handleTimerStart = function handleTimerStart() {
  document.getElementById('audio').play();
  gameOn = true;
  startGame();
  secondsRemaining = '50';
  _final.style.display = "none";
  var timerHandler = setInterval(function () {
    if (secondsRemaining == '0') {
      clearInterval(timerHandler);
      stopGame();
    }

    timerDisplay.innerHTML = secondsRemaining;
    secondsRemaining--;
  }, 1000);
}; //handleTimerStart
// This function updates the score if you are right when you click 'Yes' button i.e. you identify that the image displayed is same as the previous image


var handleOkResponse = function handleOkResponse() {
  console.log("I am in Ok" + " " + expectedResponse);
  if (gameOn & document.getElementById('ok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
}; // handleOkResponse
// This function updates the score if you are right when you click 'No' button i.e. you identify that the image displayed is different then the previous image


var handleNokResponse = function handleNokResponse() {
  console.log("I am in nOk" + " " + expectedResponse);
  if (gameOn && document.getElementById('nok-button').innerHTML === expectedResponse) score++;
  document.getElementById('score-button').innerHTML = score;
}; // handleNokResponse
//Let's start the game


var startGame = function startGame() {
  startButton.disabled = true;
  gameHandler = setInterval(function () {
    changeColor();
  }, 2000);
}; //startGame


var colourChangeCounter = '0'; //Let us change the colours of different segments of the SVG image

var changeColor = function changeColor() {
  colourChangeCounter++;
  console.log("changing color" + " " + colourChangeCounter);

  if (colourChangeCounter >= 5 && colourChangeCounter <= 7) {
    expectedResponse = 'No';
    console.log("I am here");
    document.getElementById('path1').style.color = "brown";
    document.getElementById('path2').style.color = "black";
    document.getElementById('path3').style.color = "blue";
  } else if (colourChangeCounter >= 16 && colourChangeCounter <= 18) {
    expectedResponse = 'No';
    console.log("I am here");
    document.getElementById('path1').style.color = "blue";
    document.getElementById('path2').style.color = "black";
    document.getElementById('path3').style.color = "brown";
  } else if (colourChangeCounter >= 26 && colourChangeCounter <= 28) {
    expectedResponse = 'No';
    console.log("I am here");
    document.getElementById('path1').style.color = "black";
    document.getElementById('path2').style.color = "blue";
    document.getElementById('path3').style.color = "brown";
  } else if (colourChangeCounter >= 36 && colourChangeCounter <= 38) {
    expectedResponse = 'No';
    console.log("I am here");
    document.getElementById('path1').style.color = "#E3242B";
    document.getElementById('path2').style.color = "#60100B";
    document.getElementById('path3').style.color = "#BC544B";
  } else if (colourChangeCounter >= 46 && colourChangeCounter <= 49) {
    expectedResponse = 'No';
    console.log("I am here");
    document.getElementById('path1').style.color = "#D0312D";
    document.getElementById('path2').style.color = "#990F02";
    document.getElementById('path3').style.color = "#E3242B";
  } else {
    expectedResponse = 'Yes';
    document.getElementById('circle').style.color = "#60100B";
    document.getElementById('path1').style.color = "rgb(129, 26, 26)";
    document.getElementById('path2').style.color = "rgb(153, 93, 93)";
    document.getElementById('path3').style.color = "rgb(226, 24, 24)";
    document.getElementById('polygon').style.color = "#610C04";
  }

  colourChangeCounter++;
  return;
}; // changeColor
// Time up, let's stop the game and see your score  


var stopGame = function stopGame() {
  var _final2 = document.getElementById('final');

  _final2.style.display = "block";
  _final2.innerHTML = "Your Score is:  " + score;
  clearInterval(gameHandler);
  score = '0';
  secondsRemaining = '50';
  gameOn = 'false';
  startButton.disabled = false;
  document.getElementById('audio').pause();
  document.getElementById('score-button').innerHTML = score;
}; // stopGame
//let us see if sleep works - this froze everuthing so not using
// const sleep = (milliseconds) => {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }