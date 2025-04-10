// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Menú responsive
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });