// scanlines.js

window.addEventListener("DOMContentLoaded", () => {
  // Inject scanline overlay divs
  const overlayBefore = document.createElement("div");
  const overlayAfter = document.createElement("div");

  overlayBefore.className = "scanlines-before";
  overlayAfter.className = "scanlines-after";

  document.body.appendChild(overlayBefore);
  document.body.appendChild(overlayAfter);

  // Start wave distortion animation
  const turbulence = document.querySelector('feTurbulence');
  if (turbulence) {
    let frame = 0;
    function animate() {
      frame += 0.005;
      turbulence.setAttribute('baseFrequency', `${0.003 + Math.sin(frame) * 0.002} 0.08`);
      requestAnimationFrame(animate);
    }
    animate();
  }
});
