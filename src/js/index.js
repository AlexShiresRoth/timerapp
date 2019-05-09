
//have timer select functions
//allow user to enter time to count down from{done}
//convert user input into different time
//play audio clip when time runs out
//figure out how to get input of each dynamically loaded element
//add a database to use 
//have user authentication

import Selectors from './models/ElementSelectors';

//TODO import the rest of the functions
import { changeTimerDisplay } from './views/Display';


(() => {
let int;
let audio = new Audio('/audio/chill.wav');

//TODO Dry up function
 function timerStart(seconds, minutes,hours){
      int = setInterval(function() {

        if(seconds >= 0 && minutes >=0 && hours >= 0){
          --seconds;
        if(seconds === 0 && minutes >= 0){
          --minutes
            seconds += 60;
        }
        if(minutes === 0){
          --hours
          minutes += 60;
        }
        if(seconds === 0 && hours === 0 && minutes === 0) {
          clearInterval(countDown);
          Selectors.displayContainer.innerHTML = `Times Up`;
        }
        Selectors.timerDisplaySeconds.innerHTML = `${seconds}s`;
        Selectors.timerDisplayMinutes.innerHTML = `${minutes}min`;
        Selectors.timerDisplayHours.innerHTML = `${hours}hrs;`
      }
  }, 1000);
}


//fix this code to incorporate all inputs
function timerStop(stop){

let str = `timer stopped!`;

clearInterval(stop);

if(Selectors.inputOne.value){
  
  Selectors.timerDisplay.innerHTML = str.toUpperCase(); 
  Selectors.progressBar.style.width= '100%';
  Selectors.progressBar.style.background='red';
  
  clearInput();
}
  clearInput();

}

//fix to reset all input values
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
  audio.pause();
}


/////////////////////////event handlers////////////////////////////////

//start timer event
document.addEventListener('click', (event) => {
  
  if(event.target && event.target.className == 'btn__timer--start'){
    
    console.log(event.target)
    let seconds = Selectors.inputOne.value;
    let minutes = Selectors.inputTwo.value;
    let hours = Selectors.inputThree.value
    
    timerStart(seconds,minutes,hours);
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

  
})();