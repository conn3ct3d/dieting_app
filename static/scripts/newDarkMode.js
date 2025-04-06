document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = localStorage.getItem('dark-mode') === 'true';

    if (prefersDark || isDark) {
      document.body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
  });