function adjustViewportClip() {
  const header = document.querySelector('.main-header');
  const viewport = document.querySelector('.content-viewport');

  if (header && viewport) {
    const headerHeight = header.offsetHeight;
    viewport.style.paddingTop = `${headerHeight}px`;
    viewport.style.clipPath = `inset(${headerHeight}px 0 0 0)`;
    viewport.style.webkitClipPath = `inset(${headerHeight}px 0 0 0)`; // for Safari
  }
}

window.addEventListener('load', adjustViewportClip);
window.addEventListener('resize', adjustViewportClip);
