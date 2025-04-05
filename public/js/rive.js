const logoCanvas = document.getElementById("logo");
const logo = new rive.Rive({
  src: "/rive/cat.riv",
  canvas: logoCanvas,
  autoplay: true,
  stateMachines: "kitty",
  onLoad: () => {
    logo.resizeDrawingSurfaceToCanvas();
    catDown();
  },
});

document.addEventListener('mousemove', followCursor);
document.addEventListener('touchmove', followCursor);

function followCursor(event) {
  const logoPosition = logoCanvas.getBoundingClientRect();

  let cursorX,cursorY = 0;

  if (event.type.includes(`touch`)) {
    const { touches, changedTouches } = event.originalEvent ?? event;
    const touch = touches[0] ?? changedTouches[0];
    cursorX = touch.pageX;
    cursorY = touch.pageY;
  } else if (event.type.includes(`mouse`)) {
    cursorX = event.clientX;
    cursorY = event.clientY;
  }

  const dx = cursorX - logoPosition.x;
  const dy = cursorY - logoPosition.y;

  const x = dx * 100 / logoPosition.width;
  const y = dy * 100 / logoPosition.height;

  const inputs = logo.stateMachineInputs('kitty');

  if (!inputs) {
    console.warn('no canvas mounted');
    return;
  }

  inputs.forEach(i => {
    switch (i.name) {
      case 'mouse_x':
        i.value = Math.round(x);
        break;

      case 'mouse_y':
        i.value = Math.round(y);
        break;

      case 'mouse_down':
        if (!i.value) break;
        i.value = false;
        setTimeout(() => {
          i.value = true;
        }, 1500);
        break;
    }
  });
}

function catDown() {
  const inputs = logo.stateMachineInputs('kitty');
  inputs.find(i => i.name === 'mouse_down').value = true;
}
