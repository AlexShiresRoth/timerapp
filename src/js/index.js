
//have timer select functions
//allow user to enter time to count down from{done}
//convert user input into different time
//play audio clip when time runs out
//figure out how to get input of each dynamically loaded element
//add a database to use 
//have user authentication

import Selectors from './models/ElementSelectors';

import NewTimer from './views/NewTimer';


let int;
let audio = new Audio('/audio/chill.wav');


function changeTimerDisplay(interval) {
  Selectors.timerDisplay.innerHTML = `${interval} Seconds`;
  Selectors.timerDisplay.style.color ="dodgerblue";

  Selectors.progressBar.style.width = `${interval}%`;
  Selectors.progressBar.style.background = 'dodgerblue';
}

function timerBelowFifteen(interval){
  Selectors.progressBar.style.background = 'yellow';
  Selectors.timerDisplay.style.color='yellow';
}

function changeSecondDisplay(interval){
  Selectors.timerDisplay.innerHTML = `${interval} Second`;
}

function timerBelowTen(interval){
  Selectors.progressBar.style.background = 'orange';
  Selectors.timerDisplay.style.color='orange';
}
function tiimerBelowFive(interval){
  Selectors.progressBar.style.background = 'red';
  Selectors.timerDisplay.style.color = 'red';
}
function emptyInput(interval){
  Selectors.timerDisplay.innerHTML = 'no input given!'.toUpperCase();
  clearInterval(int);
}
function timesUp(int){
    let timerEndStr = `times up!`;
    clearInterval(int);
    Selectors.timerDisplay.innerHTML = timerEndStr.toUpperCase();
    Selectors.progressBar.style.width= '100%';
    Selectors.progressBar.style.background = 'red';
    clearInput();
    Selectors.btnAudio.innerHTML = `Stop Playing: Audio File`;
    audio.play()
}



 function timerStart(newInterval){
   
  let interval = parseInt(newInterval.value);
  
  int = setInterval(function(){
    
    if(interval > 60){ Selectors.timerDisplay.innerHTML = `Count is too high`};

      if(interval > 0 && interval <= 60) {
      --interval;
      //render count to view
        changeTimerDisplay(interval);
      }
      if(interval < 2){
        changeSecondDisplay(interval);
      }
      if(interval < 15){
        timerBelowFifteen(interval);
      }
      if(interval < 10){
        timerBelowTen(interval);
      }
      if(interval < 5){
        tiimerBelowFive(interval);
      }
      if(Selectors.input.value === ''){
        emptyInput(interval)
      }
      if(interval === 0){
        timesUp(int);
      }
  }, 1000);
}


function timerStop(stop){

let str = `timer stopped!`;

clearInterval(stop);

if(Selectors.input.value){
  
  Selectors.timerDisplay.innerHTML = str.toUpperCase(); 
  Selectors.progressBar.style.width= '100%';
  Selectors.progressBar.style.background='red';
  
  clearInput();
}
  clearInput();

}

function clearInput(){
  Selectors.input.value = '';
}

function reset(){
  
  clearInput();
  timerStop();
  Selectors.timerDisplay.innerHTML = `0`;
  Selectors.timerDisplay.style.color= `dodgerblue`;
  Selectors.progressBar.style.width =  `100%`;
  Selectors.progressBar.style.background = `dodgerblue`;

}

function stopAudio() {
  audio.stop();
}


/////////////////////////event handlers////////////////////////////////

//start timer event
document.addEventListener('click', (event) => {
  
  if(event.target && event.target.className == 'btn__timer--start'){
    
    console.log(event.target)
    
    timerStart(Selectors.input);
  }
});

//if input is pressed while timer is running, stop timer
document.addEventListener('click', (event) => {
  
    if(event.target && event.target.className == 'timerinput') {
      console.log(event.target)
      timerStop(int);
      clearInput();
      stopAudio();
    }
});

//stop timer event
document.addEventListener('click',(event) => {
    
    if(event.target && event.target.className == 'btn__timer--stop'){
      console.log(event.target)
      timerStop(int);
      clearInput(); 
      stopAudio();
    }
});

//reset timer and input event
document.addEventListener('click', event => {

    if(event.target && event.target.className == 'btn__timer--clear'){
      console.log(event.target)
      reset();
      stopAudio();
    }
});

document.addEventListener('click', event => {
  if(event.target && event.target.className== 'btn__audio--stop'){
      stopAudio();
    }
});

//add a new timer
Selectors.addTimerBtn.addEventListener('click', () => {

    NewTimer();
    
});