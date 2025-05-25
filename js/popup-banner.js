document.getElementById('close-banner').addEventListener('click', function() {
  document.getElementById('intercept-banner').style.display = 'none';
  document.getElementById('banner-wrapper').style.display = 'none';
  document.getElementById('banner-wrapper').style.pointerEvents = 'none';
});
