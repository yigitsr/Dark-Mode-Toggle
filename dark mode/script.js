const darkModeToggle = document.getElementById('darkModeToggle');

function setDarkMode() {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.checked = false;
  }
}

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
  setDarkMode();
});

document.addEventListener('DOMContentLoaded', setDarkMode);