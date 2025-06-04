export function initCursor() {
  // 🔁 Remove any existing fake cursor
  let faker = document.getElementById('faker');
  if (faker) faker.remove();

  // 🎯 Create the fake cursor
  faker = document.createElement('div');
  faker.id = 'faker';
  Object.assign(faker.style, {
    position: 'fixed',
    width: '12px',
    height: '12px',
    backgroundColor: 'black',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 40ms linear',
    zIndex: 9999
  });
  document.body.appendChild(faker);

  // 🧤 Hide native cursor
  document.body.style.cursor = 'none';

  // ✨ Trail Dot Function
  function spawnTrailDot(x, y) {
    const dot = document.createElement('div');
    Object.assign(dot.style, {
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`,
      width: '6px',
      height: '6px',
      backgroundColor: 'black',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 9998,
      opacity: '0.7',
      transition: 'opacity 0.5s ease-out'
    });
    document.body.appendChild(dot);

    setTimeout(() => {
      dot.style.opacity = '0';
      setTimeout(() => dot.remove(), 500);
    }, 0);
  }

  // 🌀 Reverse + Glitchy movement logic
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  const onMove = ({ movementX, movementY }) => {
    const glitchX = (Math.random() - 0.5) * 10;
    const glitchY = (Math.random() - 0.5) * 10;

    x -= movementX + glitchX;
    y -= movementY + glitchY;

    const w = faker.offsetWidth;
    const h = faker.offsetHeight;
    x = Math.min(Math.max(0, x), window.innerWidth - w);
    y = Math.min(Math.max(0, y), window.innerHeight - h);

    faker.style.transform = `translate(${x}px, ${y}px)`;
    spawnTrailDot(x, y);
  };

  // 🎯 Event listeners
  window.addEventListener('pointermove', onMove);

  // ⛔ ESC to restore normal behavior
  const onKey = (e) => {
    if (e.key === 'Escape') {
      faker.remove();
      document.body.style.cursor = 'auto';
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('keydown', onKey);
    }
  };
  window.addEventListener('keydown', onKey);

  console.log("✅ Reversed glitchy cursor activated with trail");
}
