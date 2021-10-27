let secondsRemaining = '50';
let score = '0';
const timerDisplay = document.getElementById("timer-heading");
const circle = document.getElementById('circle');
const path1 = document.getElementById('path1');
const path2 = document.getElementById('path2');
const path3 = document.getElementById('path3');
const polygon = document.getElementById('polygon');
const image = document.getElementsByClassName('target__img')
let expectedResponse = 'Yes'

const handleTimerStart = () => {

   startGame();
   secondsRemaining = '50';
    const timerHandler = setInterval(() => {
        if (secondsRemaining == '0') {
            clearInterval(timerHandler);
            stopGame();
        }
        timerDisplay.innerHTML = secondsRemaining;
        secondsRemaining --;
    }, 1000);    
}

const handleOkResponse = () => {

  console.log("I am in Ok" + " " + expectedResponse);

 // if (document.getElementById('ok-button').innerHTML == 'Yes') score++;

 if (document.getElementById('ok-button').innerHTML === expectedResponse) score++;

  document.getElementById('score-button').innerHTML = score;

}

const handleNokResponse = () => {

  console.log("I am in nOk" + " " + expectedResponse);

  //if (document.getElementById('nok-button').innerHTML == 'No') score--;

  if (document.getElementById('nok-button').innerHTML === expectedResponse) score++;

  document.getElementById('score-button').innerHTML = score;

}

const startGame = () => {

  expectedResponse = 'N'

      handlerOne = setInterval(() => {

        console.log(timerDisplay.innerHTML);

        expectedResponse = 'Yes'
        console.log(expectedResponse);

        changeColor("red", "green", "orange", "blue", "red");
      

    }, 2000); 

    expectedResponse = 'Y' 


    handlerTwo = setInterval(() => {

      console.log(timerDisplay.innerHTML);

      
      console.log(expectedResponse);

      changeColor("red", "green", "orange", "blue", "red");
    

  }, 2000);  

  expectedResponse = 'Y' 


  handlerThree = setInterval(() => {

    console.log(timerDisplay.innerHTML);

    
    console.log(expectedResponse);

    changeColor("red", "green", "orange", "blue", "red");
  

}, 2000);  

  expectedResponse = 'N'

    handlerFour = setInterval(() => {

      console.log(secondsRemaining);

      
      console.log(expectedResponse);


      changeColor("yellow", "blue", "red", "green", "yellow");
    

  }, 7000);  

  expectedResponse = 'Y'

  handlerFive = setInterval(() => {

    console.log(secondsRemaining);

   
    console.log(expectedResponse);


    changeColor("yellow", "blue", "red", "green", "yellow");
  

}, 7000);  

expectedResponse = 'Y'

handlerSix = setInterval(() => {

  console.log(secondsRemaining);

 
  console.log(expectedResponse);


  changeColor("yellow", "blue", "red", "green", "yellow");


}, 7000);  

expectedResponse = 'N'

  handlerSeven = setInterval(() => {

    console.log(timerDisplay.innerHTML);

   
    console.log(expectedResponse);
   

    changeColor("green", "red", "blue", "yellow","green");
  

}, 8000);  

expectedResponse = 'N'

handlerEight = setInterval(() => {

  console.log(timerDisplay.innerHTML);

  changeColor("red", "green", "orange", "blue", "red");


}, 8000);  

  }  


const stopGame = () => {

  alert("Your score" + " "+ score);
  clearInterval(handlerOne);
  clearInterval(handlerTwo);
  clearInterval(handlerThree);
  clearInterval(handlerFour);
  clearInterval(handlerFive);
  clearInterval(handlerSix);
  clearInterval(handlerSeven);
  clearInterval(handlerEight);

  document.getElementsByClassName('final-score').innerHTML = `Your Final Score is : ${score}`;
  score = '0';
  secondsRemaining = '50';
 
  // secondsRemaining = 1;
  // handleTimerStart();
}


const changeColor = ( (color1, color2, color3, color4, color5) => {

  expectedResponse = 'Y' 

  document.getElementById('circle').style.color = color1;
  document.getElementById('polygon').style.color = color2;
  document.getElementById('path1').style.color = color3;
  document.getElementById('path2').style.color = color4;
  document.getElementById('path3').style.color = color5;

  return

  

});

//let us see if sleep works

const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
 // changeColor("green", "red", "blue", "yellow","green");


      // changeColor("red", "green", "orange", "blue", "red");

      // changeColor("yellow", "blue", "red", "green", "yellow");
  

      // changeColor("blue", "red", "blue", "yellow","blue");
    

      // changeColor("orange", "green", "orange", "blue", "orange");