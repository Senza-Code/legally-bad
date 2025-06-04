<<<<<<< HEAD
export function initCursor() {
  // 1. Create the fake cursor only once
=======
// modules/cursor.js
export function initCursor() {
  /* 1. Create the fake cursor only once */
>>>>>>> feb323424bb23e21d8feb8e5e36be7479c15318f
  let faker = document.getElementById('faker');
  if (!faker) {
    faker = document.createElement('div');
    faker.id = 'faker';
    Object.assign(faker.style, {
      position: 'fixed',
      width: '16px',
      height: '16px',
      border: '2px solid hotpink',
      borderRadius: '50%',
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      transition: 'transform 40ms linear',
      zIndex: 9999
    });
    document.body.appendChild(faker);
  }

<<<<<<< HEAD
  // 2. Hide the native cursor
  document.body.style.cursor = 'none';

  // 3. Track mirrored position
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  const onMove = ({ movementX, movementY }) => {
    x -= movementX; // invert!
=======
  /* 2. Hide the native cursor */
  document.body.style.cursor = 'none';

  /* 3. Track mirrored position */
  let x = window.innerWidth  / 2;
  let y = window.innerHeight / 2;

  const onMove = ({ movementX, movementY }) => {
    x -= movementX;                   // invert!
>>>>>>> feb323424bb23e21d8feb8e5e36be7479c15318f
    y -= movementY;

    // Clamp to viewport
    const w = faker.offsetWidth, h = faker.offsetHeight;
<<<<<<< HEAD
    x = Math.min(Math.max(0, x), innerWidth - w);
=======
    x = Math.min(Math.max(0, x), innerWidth  - w);
>>>>>>> feb323424bb23e21d8feb8e5e36be7479c15318f
    y = Math.min(Math.max(0, y), innerHeight - h);

    faker.style.transform = `translate(${x}px, ${y}px)`;
  };

  window.addEventListener('pointermove', onMove);

<<<<<<< HEAD
  // 4. Kill-switch for accessibility
=======
  /* 4. Kill-switch for accessibility */
>>>>>>> feb323424bb23e21d8feb8e5e36be7479c15318f
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
