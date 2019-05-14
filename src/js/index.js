
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
  
  
  let h = hours;
  let m = minutes;
  let s = seconds;

  int = setInterval(function() {
    let current = ((h * 3600) + (m * 60) + s);  //the current time left in seconds
    
    if (current > 0) {
        //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
        --s;
    }
    if(s === 0) {
        m -= 1;
        s += 60;
    }
    if(m === 0) {
      h -= 1;
      m += 59
    }
    if(h === 0){
      h = 0;
    }
    else if(h === 0 && m === 0 && hours === 0){
      emptyInput();
    }
    Selectors.timerDisplaySeconds.innerHTML = `${s}s`;
    Selectors.timerDisplayMinutes.innerHTML = `${m}m:`;
    Selectors.timerDisplayHours.innerHTML = `${h}h:`;
    },1000)
   
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