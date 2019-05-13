
//have timer select functions
//allow user to enter time to count down from{done}
//convert user input into different time
//play audio clip when time runs out
//figure out how to get input of each dynamically loaded element
//add a database to use 
//have user authentication

import Selectors from './models/ElementSelectors';

//TODO import the rest of the functions
import { 
  clearInput, 
  emptyInput, 
  timesUp, 
  timerStop, 
  reset, 
  stopAudio  
} from './views/Display';

let int;
let audio = new Audio('/audio/chill.wav');



//TODO Dry up function
 function timerStart(seconds, minutes,hours){

  clearInput();
    
    /////////seconds input count
    if(seconds > 0 && minutes == 0 && hours == 0){
        int = setInterval(function(){
          Selectors.timerDisplay.innerHTML = `Count Down:`;
        --seconds;
            if(seconds === 1 && minutes > 0){
                --minutes
                seconds += 59;
            }
            if(minutes === 0 && hours > 0){
              --hours
              minutes += 60;
            }
            if(seconds === 0 && hours === 0 && minutes === 0) {
              timesUp(int);
              seconds = 0;
              hours = 0;
              minutes = 0;
            }

          Selectors.timerDisplaySeconds.innerHTML = `${seconds}s`;
          Selectors.timerDisplayMinutes.innerHTML = `${minutes}m:`;
          Selectors.timerDisplayHours.innerHTML = `${hours}h:`;
        },1000);
      }
    

      ///////minutes input count
    if(seconds == 0 && minutes > 0 && hours == 0) {
          
        seconds = 60;
        hours = 0;
          
        int = setInterval(function(){ 
          Selectors.timerDisplay.innerHTML = `Count Down:`;
          
          --seconds;

          if(minutes === 1 && seconds === 59 && hours === 0) {
            minutes = 0;
          }
          if(seconds === 0 && minutes > 0){
              --minutes
              seconds += 59;
          }
          if(minutes === 0 && hours > 0){
            --hours
            minutes += 59;
          }
          if(seconds === 1 && hours === 0 && minutes === 0) {
            timesUp(int);
            seconds = 0;
            hours = 0;
            minutes = 0;
          }
        
          Selectors.timerDisplaySeconds.innerHTML = `${seconds}s`;
          Selectors.timerDisplayMinutes.innerHTML = `${minutes}m:`;
          Selectors.timerDisplayHours.innerHTML = `${hours}h:`;
      
        },1000);
    }

    ////hours input count
    ///figure out logic for hour input, acting funky

    if(seconds === 0 && minutes == 0 && hours > 0){
      
      seconds = 60;
      minutes = 59;

        int = setInterval(function(){
          Selectors.timerDisplay.innerHTML = `Count Down:`;

          --seconds;

          if(hours > 0 && minutes === 59 && seconds === 59) {
            hours = 0;
          }
          if(seconds === 0 && minutes === 0){
              --minutes
              seconds += 59;
          }
          if(minutes === 0 && hours > 0){
            --hours
            minutes += 60;
          }
          if(seconds === 0 && hours === 0 && minutes === 0) {
            timesUp(int);
            seconds = 0;
            hours = 0;
            minutes = 0;
          }

          Selectors.timerDisplaySeconds.innerHTML = `${seconds}s`;
          Selectors.timerDisplayMinutes.innerHTML = `${minutes}m:`;
          Selectors.timerDisplayHours.innerHTML = `${hours}h:`;
        },1000)
    }

    if(seconds > 0 && minutes > 0 && hours >0) {
      int = setInterval(function(){    
        Selectors.timerDisplay.innerHTML = `Count Down:`;
      --seconds;

          if(seconds === 1 && minutes > 0){
              --minutes
              seconds += 59;
          }
          if(minutes === 0 && hours > 0){
            --hours
            minutes += 60;
          }
          if(seconds === 1 && hours === 0 && minutes === 0) {
            seconds = 0;
            hours = 0;
            minutes = 0;
            timesUp(int);
          }

        Selectors.timerDisplaySeconds.innerHTML = `${seconds}s`;
        Selectors.timerDisplayMinutes.innerHTML = `${minutes}m:`;
        Selectors.timerDisplayHours.innerHTML = `${hours}h:`;
      },1000)
    }
    else if(seconds == 0 && minutes == 0 && hours == 0){
      emptyInput();
    }
  }



/////////////////////////event handlers////////////////////////////////

//start timer event
document.addEventListener('click', (event) => {
  
  if(event.target && event.target.className == 'btn__timer--start'){
    
    let seconds = parseInt(Selectors.inputOne.value);
    let minutes = parseInt(Selectors.inputTwo.value);
    let hours = parseInt(Selectors.inputThree.value);
    console.table(seconds,minutes,hours)
    timerStart(seconds,minutes,hours);
  }
});

//if input is pressed while timer is running, stop timer
document.addEventListener('click', (event) => {
    if(event.target && event.target.className == 'timerinput') {
      timerStop(int);
      clearInput();
      stopAudio();
    }
});

//stop timer event
document.addEventListener('click',(event) => {
    
    if(event.target && event.target.className == 'btn__timer--stop'){
      timerStop(int);
      stopAudio();
    }
});

//reset timer and input event
document.addEventListener('click', event => {

    if(event.target && event.target.className == 'btn__timer--clear'){
      reset();
      stopAudio();
    }
});

document.addEventListener('click', event => {
  if(event.target && event.target.className== 'btn__audio--stop'){
      stopAudio();
    }
});

  
export default { int, audio };