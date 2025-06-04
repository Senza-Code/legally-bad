const fakeCursor = document.getElementById('fakeCursor');
const screenW = window.innerWidth;
const screenH = window.innerHeight;

document.addEventListener('mousemove', (e) => {
  const badX = screenW - e.clientX;
  const badY = screenH - e.clientY;
  fakeCursor.style.left = `${badX}px`;
  fakeCursor.style.top = `${badY}px`;
});
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

setInterval(() => {
  alert("Nope. 😈");
}, 15000); // every 15 seconds
