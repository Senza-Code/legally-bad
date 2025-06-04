import { initCursor } from './modules/cursor.js';

initCursor();

// DODGING BUTTON LOGIC
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("mousemove", () => {
  const maxX = window.innerWidth - startBtn.offsetWidth;
  const maxY = window.innerHeight - startBtn.offsetHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  startBtn.style.position = "absolute";
  startBtn.style.left = `${randX}px`;
  startBtn.style.top = `${randY}px`;
});

// OPTIONAL CHAOS POPUP
setInterval(() => {
  alert("Nope. 😈");
}, 15000);
