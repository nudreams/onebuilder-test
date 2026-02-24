document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle-mode');
  const body = document.body;

  console.log('Main.js loaded');

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    btn.textContent = 'Switch to Light Mode';
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      btn.textContent = 'Switch to Light Mode';
      console.log('Dark mode enabled');
    } else {
      localStorage.setItem('theme', 'light');
      btn.textContent = 'Switch to Dark Mode';
      console.log('Light mode enabled');
    }
  });
});
