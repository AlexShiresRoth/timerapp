import Selectors from "../models/ElementSelectors";

const NewTimer = () => {
  
    let newArr = [];

    let markup = `
        <div class="counter__display--container">
        <div class="time__select">
          <input class="timerinput" type="number" placeholder="60min">
            <button class="btn__timer--start">Start</button>
            <button class="btn__timer--stop">Stop</button>
            <button class="btn__timer--clear">Reset</button>
            </div>
            <h5>Timer: <span class="counter__display--time">0</span></h5>
                <div class="progress__bar">
                <div class="progress__bar--fill"></div>
            </div>
            <div class="audio__player">
              <button class="btn__audio--stop">Stop Playing</button>
            </div>
        </div>
  `;

  Selectors.newTimerDisplay.insertAdjacentHTML('beforeend', markup);

  newArr.push(markup);

  console.log(newArr);
}

export default NewTimer;