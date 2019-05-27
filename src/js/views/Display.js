import Selectors from "../models/ElementSelectors";

import int from '../index';
import audio from'../index';

//TODO add these into main function
//fix to reset all input values
export function clearInput(){
  Selectors.inputOne.value = '00';
  Selectors.inputTwo.value = '00';
  Selectors.inputThree.value = '00';
}

export function resetValues() {
  
  Selectors.inputOne.value = '00';
  Selectors.inputTwo.value = '00';
  Selectors.inputThree.value = '00';

  Selectors.timerDisplaySeconds.innerHTML = `00`;
  Selectors.timerDisplayMinutes.innerHTML = `00`;
  Selectors.timerDisplayHours.innerHTML = `00`;

  
  Selectors.timerDisplaySeconds.style.color ='dodgerblue';
  Selectors.timerDisplayMinutes.style.color ='dodgerblue';
  Selectors.timerDisplayHours.style.color ='dodgerblue';

  Selectors.timerBackground.style.borderColor ='dodgerblue';
  Selectors.timerBackground.style.borderColor ='dodgerblue';
  Selectors.timerBackground.style.borderColor ='dodgerblue';

  Selectors.timerDisplay.innerHTML = `Count Down:`
}

export function emptyInput(){
  Selectors.timerDisplay.innerHTML = 'no input given!'.toUpperCase();
  clearInterval(int);
}
export function timesUp(){
    let timerEndStr = `times up!`;
    Selectors.timerDisplay.innerHTML = timerEndStr.toUpperCase();
    audio.play()
}

//fix this code to incorporate all inputs
export function timerStop(stop){

  let str = `timer stopped!`;
  
    if(Selectors.inputOne.value){
        
        Selectors.timerDisplay.innerHTML = str.toUpperCase(); 
        
        clearInterval(stop)
      }
  
  }

export function styleSeconds() {
  Selectors.timerDisplaySeconds.style.color = 'orange';
  Selectors.timerDisplayMinutes.style.color =' orange';
  Selectors.timerDisplayHours.style.color = 'orange';

  Selectors.timerBackground.style.borderColor ='orange';
  Selectors.timerBackground.style.borderColor ='orange';
  Selectors.timerBackground.style.borderColor ='orange';
} 

export function styleTimeOut(){
  Selectors.timerDisplaySeconds.style.color ='red';
  Selectors.timerDisplayMinutes.style.color ='red';
  Selectors.timerDisplayHours.style.color ='red';

  Selectors.timerBackground.style.borderColor ='red';
  Selectors.timerBackground.style.borderColor ='red';
  Selectors.timerBackground.style.borderColor ='red';
}


  
export function reset(){
  
  resetValues();
  clearInterval(int);
}

export function stopAudio() {
  audio.pause();
}