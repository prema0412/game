let secondsRemaining = '50';
let score = '0';
const timerDisplay = document.getElementById("timer-heading");
let expectedResponse = 'Yes'

const handleTimerStart = () => {

   startGame();
    const timerHandler = setInterval(() => {
        if (secondsRemaining === 0) {
            clearInterval(timerHandler);
            stopGame();
        }
        timerDisplay.innerHTML = secondsRemaining;
        secondsRemaining --;
    }, 1000);    
}

const handleOkResponse = () => {

 // if (document.getElementById('ok-button').innerHTML == 'Yes') score++;

 if (document.getElementById('ok-button').innerHTML === expectedResponse) score++;

  document.getElementById('score-button').innerHTML = score;

}

const handleNokResponse = () => {

  //if (document.getElementById('nok-button').innerHTML == 'No') score--;

  if (document.getElementById('nok-button').innerHTML === expectedResponse) score--;

  document.getElementById('score-button').innerHTML = score;

}

const startGame = () => {

  expectedResponse = 'Yes'

  // for (let i=0; i<=5000; i++) {

  //     expectedResponse = 'Yes'

  //     console.log("I am starting" + " "+i);

      handlerOne = setInterval(changeColorTwo, 3000);

      console.log();

      changeCourse(expectedResponse);

    //  i++;

  }

  const changeCourse = () => {

  expectedResponse = 'No';

  changeColorOne();

  }


const stopGame = () => {

  alert("Your score" + " "+ score);

  document.getElementsByClassName('final-score').innerHTML = `Your Final Score is : ${score}`
  score = 0;
  // secondsRemaining = 1;
  // handleTimerStart();
}


const changeColorOne = ( () => {
 
  document.getElementById('circle').style.color = "rgb(129, 26, 26)";
  document.getElementById('path1').style.color = "rgb(153, 93, 93)";
  document.getElementById('path2').style.color = "rgb(39, 5, 5)";
  document.getElementById('path3').style.color = "brown";
  document.getElementById('polygon').style.color = "rgb(129, 26, 26)";

});

// handlerOne = setInterval(changeColorOne, 6000);

const changeColorTwo = ( () => {
 
  document.getElementById('circle').style.color = "hsl(120, 100%, 50%);";
  document.getElementById('path1').style.color = "hsl(120, 100%, 75%)";
  document.getElementById('path2').style.color = "hsl(120, 100%, 25%)";
  document.getElementById('path3').style.color = "hsl(120, 60%, 70%)";;
  document.getElementById('polygon').style.color = "hsl(120, 60%, 70%)";

});



// handlerTwo = setInterval(changeColorTwo, 12000);


