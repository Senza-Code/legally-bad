import { initCursor } from './modules/cursor.js';
import { makeDodgeable } from './modules/dodge.js'; // only if you want the dodging button

document.addEventListener('DOMContentLoaded', () => {
  initCursor();              // activates reversed, glitchy cursor
  makeDodgeable('#start-btn'); // make the Start button dodge you
  chaosBlink();              // screen flashes randomly
  rotatePageChaos();         // subtle screen rotation over time
});


function chaosBlink() {
  setInterval(() => {
    document.body.style.visibility = 'hidden';
    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 80);
  }, 4000 + Math.random() * 3000);
}

function rotatePageChaos() {
  let angle = 0;
  setInterval(() => {
    angle += (Math.random() - 0.5) * 20;
    document.body.style.transform = `rotate(${angle}deg)`;
  }, 7000);
}
