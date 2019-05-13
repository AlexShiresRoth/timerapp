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

  Selectors.timerDisplaySeconds.innerHTML = `00s`;
  Selectors.timerDisplayMinutes.innerHTML = `00min`;
  Selectors.timerDisplayHours.innerHTML = `00hrs`;

  Selectors.timerDisplay.innerHTML = `Count Down:`
}

export function emptyInput(){
  Selectors.timerDisplay.innerHTML = 'no input given!'.toUpperCase();
  clearInterval(int);
}
export function timesUp(int){
    let timerEndStr = `times up!`;
    clearInterval(int);
    Selectors.timerDisplay.innerHTML = timerEndStr.toUpperCase();
    resetValues();
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

  
export function reset(){
  
  resetValues();
  clearInterval(int);
}

export function stopAudio() {
  audio.pause();
}