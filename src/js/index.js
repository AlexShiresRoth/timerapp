
//create functiion to countdown seconds
//create function to countdown minutes
//create function to countdown hours
//create a function to clear timer once each input is cleared
//refactor code to modules
//play audio clip when time runs out{done}
//figure out how to get input of each dynamically loaded element and render it to that specific container
//add a database to use 
//have user authentication

import Selectors from './models/ElementSelectors';

import NewTimer from './views/NewTimer';

(() => {
  
  let int;
  let audio = new Audio('/audio/chill.wav');
  
  //display functions
  function timerDisplaySeconds(interval){
    Selectors.timerDisplaySeconds.innerHTML = `${interval}s`;
  }

  function secondCounter(interval){
    
    let newInterval = interval;

    if(newInterval && newInterval > 0){
      
      int = setInterval(function() {
        
        --newInterval;
        timerDisplaySeconds(newInterval);

        //fix this code to run only when there are still minutes and hours left
        if(newInterval == 0){
            newInterval = 60;
          
            --newInterval;
        }
      },1000)
    }
  }


  //dom listener events
  document.addEventListener('click',(event) => {
    //on start button render the value of the seconds input into the display
    if(event.target && event.target.className == "btn__timer--start"){
      secondCounter(parseInt(Selectors.inputOne.value))
    }
  })

  //stop the timer and render view as stopped
  //return time to 0 and stop playing sounds
  document.addEventListener('click',event => {
    if(event.target && event.target.className == "btn__timer--stop"){
      clearInterval(int);
    }
  })

})();