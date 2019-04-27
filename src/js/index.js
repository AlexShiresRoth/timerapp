
//have timer select functions
//allow user to enter time to count down from{done}
//convert user input into different time
//play audio clip when time runs out

import Selectors from './models/ElementSelectors';

import NewTimer from './views/NewTimer';

let int;

 function timerStart(interval){
   
  int = setInterval(function(){
    
    if(interval > 60){ Selectors.timerDisplay.innerHTML = `Count is too high`};

    if(interval > 0 && interval <= 60) {
      --interval;
      //render count to view
      console.log(interval)
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

     if(Selectors.input.value === ''){
      Selectors.timerDisplay.innerHTML = 'no input given!'.toUpperCase();
      clearInterval(int);
    }
    
    if(interval === 0){
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


/////////////////////////event handlers////////////////////////////////
Selectors.btnStart.addEventListener('click', (event) => {
  //convert input from string to num
  let start = event.target.closest('.btn__timer--start');
  
  if(start){
    timerStart(parseInt(Selectors.input.value));
  }
});

Selectors.input.addEventListener('click', (event) => {
  
  let input = event.target.closest('.timerinput');
    if(input) {
      timerStop(int);
      clearInput();
    }
});

Selectors.btnStop.addEventListener('click',(event) => {

    let stop = event.target.closest('.btn__timer--stop');
    
    if(stop){
      timerStop(int);
      clearInput(); 
    }
});

Selectors.btnClear.addEventListener('click', event => {

  let clear = event.target.closest('.btn__timer--clear');

    if(clear){
      reset();
      
    }
});

Selectors.addTimerBtn.addEventListener('click', () => {

    NewTimer();
});