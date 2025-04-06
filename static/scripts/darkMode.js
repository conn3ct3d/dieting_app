document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      document.body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });