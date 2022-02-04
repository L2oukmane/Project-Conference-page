function openCloseMenu() {
    const x = document.querySelector('.mobile-menu');
    const y = document.querySelector('body');
    if (x.style.display === 'flex') {
      x.style.display = 'none';
      y.style.overflow = 'scroll';
    } else {
      x.style.display = 'flex';
      y.style.overflow = 'hidden';
    }
  }
  document.getElementById('onclick-open').addEventListener('click', openCloseMenu);
  document.getElementById('onclick-close').addEventListener('click', openCloseMenu);
  document.getElementById('onclick-about').addEventListener('click', openCloseMenu);
  document.getElementById('onclick-program').addEventListener('click', openCloseMenu);
  document.getElementById('onclick-partners').addEventListener('click', openCloseMenu);
  document.getElementById('onclick-news').addEventListener('click', openCloseMenu);