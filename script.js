const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    btn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});
