!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={inputOne:document.querySelector(".timer__input--one"),inputTwo:document.querySelector(".timer__input--two"),inputThree:document.querySelector(".timer__input--three"),btnStart:document.querySelector(".btn__timer--start"),btnStop:document.querySelector(".btn__timer--stop"),btnClear:document.querySelector(".btn__timer--clear"),timerDisplay:document.querySelector(".counter__display--container--display"),timerDisplaySeconds:document.querySelector(".counter__display--container--time--sec"),timerDisplayMinutes:document.querySelector(".counter__display--container--time--min"),timerDisplayHours:document.querySelector(".counter__display--container--time--hrs"),timerBackground:document.querySelector(".counter__display--container--time"),displayContainer:document.querySelector(".counter__display--container"),btnAudio:document.querySelector(".btn__audio--stop")};function o(){n.inputOne.value="00",n.inputTwo.value="00",n.inputThree.value="00"}function i(){n.inputOne.value="00",n.inputTwo.value="00",n.inputThree.value="00",n.timerDisplaySeconds.innerHTML="00",n.timerDisplayMinutes.innerHTML="00",n.timerDisplayHours.innerHTML="00",n.timerDisplaySeconds.style.color="dodgerblue",n.timerDisplayMinutes.style.color="dodgerblue",n.timerDisplayHours.style.color="dodgerblue",n.timerBackground.style.borderColor="dodgerblue",n.timerBackground.style.borderColor="dodgerblue",n.timerBackground.style.borderColor="dodgerblue",n.timerDisplay.innerHTML="Count Down:"}function l(e){let t="timer stopped!";n.inputOne.value&&(n.timerDisplay.innerHTML=t.toUpperCase(),clearInterval(e))}function u(){d.pause()}let a,c=new Audio("/audio/chill.wav");function s(e,t,r){o(),i(),clearInterval(a);let l=r,u=t,c=e,s=3600*l+60*u+c;s>0?a=setInterval(()=>{--c<60&&0==l&&0==u&&(n.timerDisplaySeconds.style.color="orange",n.timerDisplayMinutes.style.color=" orange",n.timerDisplayHours.style.color="orange",n.timerBackground.style.borderColor="orange",n.timerBackground.style.borderColor="orange",n.timerBackground.style.borderColor="orange"),c<5&&0==l&&0==u&&(n.timerDisplaySeconds.style.color="red",n.timerDisplayMinutes.style.color="red",n.timerDisplayHours.style.color="red",n.timerBackground.style.borderColor="red",n.timerBackground.style.borderColor="red",n.timerBackground.style.borderColor="red"),c<0&&(u>0&&(c=59,u--),u<1&&l>0&&(u=59,c=59,l--)),0==c&&0==u&&0==l&&(clearInterval(a),i(),function(){let e="times up!";n.timerDisplay.innerHTML=e.toUpperCase(),d.play()}()),n.timerDisplaySeconds.innerHTML=`${c}`,n.timerDisplayMinutes.innerHTML=`${u}`,n.timerDisplayHours.innerHTML=`${l}`},1e3):s<1&&(n.timerDisplay.innerHTML="no input given!".toUpperCase(),clearInterval(d))}document.addEventListener("click",e=>{if(e.target&&"btn__timer--start"==e.target.className){let e=parseInt(n.inputOne.value),t=parseInt(n.inputTwo.value),r=parseInt(n.inputThree.value);console.table(e,t,r),s(e,t,r)}}),document.addEventListener("click",e=>{e.target&&"timerinput"==e.target.className&&(l(a),o(),u())}),document.addEventListener("click",e=>{e.target&&"btn__timer--stop"==e.target.className&&(l(a),u())}),document.addEventListener("click",e=>{e.target&&"btn__timer--clear"==e.target.className&&(i(),clearInterval(d),u())}),document.addEventListener("click",e=>{e.target&&"btn__audio--stop"==e.target.className&&u()});var d=t.default={int:a,audio:c}}]);