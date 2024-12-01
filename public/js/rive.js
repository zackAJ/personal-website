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

function followCursor(event) {
  const logoPosition = logoCanvas.getBoundingClientRect();
  const dx = event.clientX - logoPosition.x;
  const dy = event.clientY - logoPosition.y;

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
