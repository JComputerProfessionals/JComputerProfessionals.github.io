(() => {
  const menu = document.querySelector('.menu');
  const links = document.getElementById('navLinks');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      links.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
