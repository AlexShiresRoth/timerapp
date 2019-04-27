
//have timer select functions
//allow user to enter time to count down from{done}
//convert user input into different time
//play audio clip when time runs out
//loop over everything to make work

import Selectors from './models/ElementSelectors';

import NewTimer from './views/NewTimer';

let int;

 function timerStart(interval){
   
  int = setInterval(function(){
    
    if(interval > 0) {
      --interval;
      //render count to view
        Selectors.timerDisplay.innerHTML = `${interval} Seconds`;
        Selectors.timerDisplay.style.color ="dodgerblue";

        Selectors.progressBar.style.width = `${interval}%`;
        Selectors.progressBar.style.background = 'dodgerblue';
    }

      if(interval < 2){
        Selectors.timerDisplay.innerHTML = `${interval} Second`;
      }
      
      
      if(interval < 15){
        Selectors.progressBar.style.background = 'yellow';
        Selectors.timerDisplay.style.color='yellow';
      }
      if(interval < 10){
        Selectors.progressBar.style.background = 'orange';
        Selectors.timerDisplay.style.color='orange';
      }
      if(interval < 5){
        Selectors.progressBar.style.background = 'red';
        Selectors.timerDisplay.style.color = 'red';
      }

    else if(Selectors.input.value === ''){
      Selectors.timerDisplay.innerHTML = 'no input given!'.toUpperCase();
      clearInterval(int);
    }
    
    else{
      let timerEndStr = `times up!`;
      clearInterval(int);
      Selectors.timerDisplay.innerHTML = timerEndStr.toUpperCase();
      Selectors.progressBar.style.width= '100%';
      Selectors.progressBar.style.background = 'red';
      clearInput();
    }
  }, 1000);
}


function timerStop(stop){

let str = `timer stopped!`;

clearInterval(stop);

for(let timeInput of Selectors.input) {
  if(timeInput.value){
    
    Selectors.timerDisplay.innerHTML = str.toUpperCase(); 
    Selectors.progressBar.style.width= '100%';
    Selectors.progressBar.style.background='red';
    clearInput();
  }
}

clearInput();
}

function clearInput(){
  Selectors.input.value = '';
}

for(let buttonStart of Selectors.btnStart){
  buttonStart.addEventListener('click', () => {
    console.log(buttonStart)
    //convert input from string to num
    timerStart(parseInt(Selectors.input.value));
  });
}

for(let buttonStop of Selectors.btnStop){
  buttonStop.addEventListener('click',() => {
    console.log(buttonStop)
    timerStop(int);
    clearInput(); 
  });
}

for(let timeInput of Selectors.input){
  timeInput.addEventListener('click', () => {
    timerStop(int);
  });
}



Selectors.addTimerBtn.addEventListener('click', () => {

    NewTimer();
});