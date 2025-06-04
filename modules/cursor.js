export function initCursor() {
  // 1. Remove existing cursor if it exists
  let faker = document.getElementById('faker');
  if (faker) faker.remove();

  // 2. Create a new fake cursor div
  faker = document.createElement('div');
  faker.id = 'faker';
  document.body.appendChild(faker);

  // 3. Apply styles (HOT PINK RING ONLY)
  Object.assign(faker.style, {
    position: 'fixed',
    width: '20px',
    height: '20px',
    border: '2px solid hotpink',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 40ms linear',
    zIndex: 9999
  });

  // 4. Hide native cursor
  document.body.style.cursor = 'none';

  // 5. Track position (reversed)
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  const onMove = ({ movementX, movementY }) => {
    x -= movementX;
    y -= movementY;

    const w = faker.offsetWidth;
    const h = faker.offsetHeight;
    x = Math.min(Math.max(0, x), window.innerWidth - w);
    y = Math.min(Math.max(0, y), window.innerHeight - h);

    faker.style.transform = `translate(${x}px, ${y}px)`;
  };

  window.addEventListener('pointermove', onMove);

  // 6. ESC to restore
  const onKey = (e) => {
    if (e.key === 'Escape') {
      faker.remove();
      document.body.style.cursor = 'auto';
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('keydown', onKey);
    }
  };

  window.addEventListener('keydown', onKey);
}
