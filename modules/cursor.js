export function initCursor() {
  // 1. Remove existing cursor if it exists
  let faker = document.getElementById('faker');
  if (faker) faker.remove();

  // 2. Create a new fake cursor div
  faker = document.createElement('div');
  faker.id = 'faker';
  document.body.appendChild(faker);

  // 3. Apply enforced styles (HOT PINK RING, no fill)
  faker.style.setProperty('position', 'fixed');
  faker.style.setProperty('width', '20px');
  faker.style.setProperty('height', '20px');
  faker.style.setProperty('border', '2px solid hotpink', 'important');
  faker.style.setProperty('background-color', 'transparent', 'important');
  faker.style.setProperty('border-radius', '50%');
  faker.style.setProperty('pointer-events', 'none');
  faker.style.setProperty('transform', 'translate(-50%, -50%)');
  faker.style.setProperty('transition', 'transform 40ms linear');
  faker.style.setProperty('z-index', '9999');

  // 4. Hide native cursor
  document.body.style.cursor = 'none';

  // 5. Track position (reversed movement)
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

  // 6. ESC to restore system cursor
  const onKey = (e) => {
    if (e.key === 'Escape') {
      faker.remove();
      document.body.style.cursor = 'auto';
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('keydown', onKey);
    }
  };

  window.addEventListener('keydown', onKey);

  // 7. Optional debug log
  console.log("✅ Custom cursor activated");
}
