  const lights = document.querySelectorAll('.light');
  let current = 0;

  function cycleLights() {
    lights.forEach(light => light.classList.remove('active'));
    lights[current].classList.add('active');
    current = (current + 1) % lights.length;
  }
  setInterval(cycleLights, 1000); // change every 1 second






