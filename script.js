const fakeCursor = document.getElementById('fakeCursor');
const screenW = window.innerWidth;
const screenH = window.innerHeight;

document.addEventListener('mousemove', (e) => {
  const badX = screenW - e.clientX;
  const badY = screenH - e.clientY;
  fakeCursor.style.left = `${badX}px`;
  fakeCursor.style.top = `${badY}px`;
});
