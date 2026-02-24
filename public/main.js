const toggleModeButton = document.getElementById('toggle-mode');
const body = document.body;

// Function to update button text
function updateButtonText(isDark) {
  toggleModeButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  updateButtonText(true);
} else {
  updateButtonText(false);
}

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  
  // Update text
  updateButtonText(isDark);
  
  // Save preference to localStorage
  if (isDark) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
