const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
