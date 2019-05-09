import Selectors from "../models/ElementSelectors";


//TODO add these into main function
export function changeTimerDisplay(interval) {
  Selectors.timerDisplay.innerHTML = `${interval} Seconds`;
  Selectors.timerDisplay.style.color ="dodgerblue";

  Selectors.progressBar.style.width = `${interval}%`;
  Selectors.progressBar.style.background = 'dodgerblue';
}

export function timerBelowFifteen(interval){
  Selectors.progressBar.style.background = 'yellow';
  Selectors.timerDisplay.style.color='yellow';
}

export function changeSecondDisplay(interval){
  Selectors.timerDisplay.innerHTML = `${interval} Second`;
}

export function timerBelowTen(interval){
  Selectors.progressBar.style.background = 'orange';
  Selectors.timerDisplay.style.color='orange';
}
export function tiimerBelowFive(interval){
  Selectors.progressBar.style.background = 'red';
  Selectors.timerDisplay.style.color = 'red';
}
export function emptyInput(interval){
  Selectors.timerDisplay.innerHTML = 'no input given!'.toUpperCase();
  clearInterval(int);
}
export function timesUp(int){
    let timerEndStr = `times up!`;
    clearInterval(int);
    Selectors.timerDisplay.innerHTML = timerEndStr.toUpperCase();
    Selectors.progressBar.style.width= '100%';
    Selectors.progressBar.style.background = 'red';
    clearInput();
    Selectors.btnAudio.innerHTML = `Stop Playing: Audio File`;
    audio.play()
}
