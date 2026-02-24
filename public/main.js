const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;
const icon = toggleModeButton.querySelector('i');

// Function to update icon
function updateIcon(isDark) {
  if (isDark) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  updateIcon(true);
}

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  
  // Update icon
  updateIcon(isDark);
  
  // Save preference to localStorage
  if (isDark) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
