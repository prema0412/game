// Play this game to practice agility, obervation and memory and listen to the healing Tibetian music while playing it

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

// This is our timer function. This will stop the game after 50 seconds

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


// This function updates the score if you are right when you click 'Yes' button i.e. you identify that the image displayed is same as the previous image

const handleOkResponse = () => {

  console.log("I am in Ok" + " " + expectedResponse);

 // if (document.getElementById('ok-button').innerHTML == 'Yes') score++;

 if (document.getElementById('ok-button').innerHTML === expectedResponse) score++;

  document.getElementById('score-button').innerHTML = score;

}


// This function updates the score if you are right when you click 'No' button i.e. you identify that the image displayed is different then the previous image

const handleNokResponse = () => {

  console.log("I am in nOk" + " " + expectedResponse);

  //if (document.getElementById('nok-button').innerHTML == 'No') score--;

  if (document.getElementById('nok-button').innerHTML === expectedResponse) score++;

  document.getElementById('score-button').innerHTML = score;

}


//Let's start the game
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

  expectedResponse = 'N'

  handlerFive = setInterval(() => {

    console.log(secondsRemaining);

   
    console.log(expectedResponse);


    changeColor("yellow", "blue", "red", "green", "yellow");
  

}, 7000);  

expectedResponse = 'N'

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

  let colourChangeCounter = '0';

  //Let us change the colours of different segments of the SVG image

  const changeColor = ( (color1, color2, color3, color4, color5) => {

    colourChangeCounter++;

    console.log("changing color" + " " + colourChangeCounter);
  
    document.getElementById('circle').style.color = color1;
    document.getElementById('polygon').style.color = color2;
    document.getElementById('path1').style.color = color3;
    document.getElementById('path2').style.color = color4;
    document.getElementById('path3').style.color = color5;
  
    return
  
    
  
  });


// Time up, let's stop the game and see your score  

const stopGame = () => {

  let final = document.getElementById('final');
  final.style.display = "block";
  final.innerHTML = "Your Score is:  " + score;
  
  console.log(final);

 
  clearInterval(handlerOne);
  clearInterval(handlerTwo);
  clearInterval(handlerThree);
  clearInterval(handlerFour);
  clearInterval(handlerFive);
  clearInterval(handlerSix);
  clearInterval(handlerSeven);

  score = '0';
  secondsRemaining = '50';
 
  
}


//let us see if sleep works - this froze everuthing so not using

// const sleep = (milliseconds) => {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// }
 