!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={inputOne:document.querySelector(".timer__input--one"),inputTwo:document.querySelector(".timer__input--two"),inputThree:document.querySelector(".timer__input--three"),btnStart:document.querySelector(".btn__timer--start"),btnStop:document.querySelector(".btn__timer--stop"),btnClear:document.querySelector(".btn__timer--clear"),timerDisplay:document.querySelector(".counter__display--container--display"),timerDisplaySeconds:document.querySelector(".counter__display--container--time--sec"),timerDisplayMinutes:document.querySelector(".counter__display--container--time--min"),timerDisplayHours:document.querySelector(".counter__display--container--time--hrs"),displayContainer:document.querySelector(".counter__display--container"),btnAudio:document.querySelector(".btn__audio--stop")};function i(){r.inputOne.value="00",r.inputTwo.value="00",r.inputThree.value="00"}function u(){r.inputOne.value="00",r.inputTwo.value="00",r.inputThree.value="00",r.timerDisplaySeconds.innerHTML="00s",r.timerDisplayMinutes.innerHTML="00min",r.timerDisplayHours.innerHTML="00hrs",r.timerDisplay.innerHTML="Count Down:"}function o(e){let t="timer stopped!";r.inputOne.value&&(r.timerDisplay.innerHTML=t.toUpperCase(),clearInterval(e))}function a(){p.pause()}let l,c=new Audio("/audio/chill.wav");function s(e,t,n){i();let u=n,o=t,a=e,c=3600*u+60*o+a;c>0?l=setInterval(function(){--a>0&&0==o&&0==u&&(--a,o+=0,u+=0),o>0&&0==u&&0==a&&(--o,u+=0,a=0,a+=60),u>0&&0==o&&0==a&&(--u,o+=60,a+=60),0===a&&(o-=1,a+=60),0===o&&(u-=1,o+=59),r.timerDisplaySeconds.innerHTML=`${a}s`,r.timerDisplayMinutes.innerHTML=`${o}m:`,r.timerDisplayHours.innerHTML=`${u}h:`},1e3):c<1&&(r.timerDisplay.innerHTML="no input given!".toUpperCase(),clearInterval(p))}document.addEventListener("click",e=>{if(e.target&&"btn__timer--start"==e.target.className){let e=parseInt(r.inputOne.value),t=parseInt(r.inputTwo.value),n=parseInt(r.inputThree.value);console.table(e,t,n),s(e,t,n)}}),document.addEventListener("click",e=>{e.target&&"timerinput"==e.target.className&&(o(l),i(),a())}),document.addEventListener("click",e=>{e.target&&"btn__timer--stop"==e.target.className&&(o(l),a())}),document.addEventListener("click",e=>{e.target&&"btn__timer--clear"==e.target.className&&(u(),clearInterval(p),a())}),document.addEventListener("click",e=>{e.target&&"btn__audio--stop"==e.target.className&&a()});var p=t.default={int:l,audio:c}}]);