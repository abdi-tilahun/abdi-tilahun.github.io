window.onload = function () {
    const themeToggle = document.getElementById("themeToggle");

    themeToggle.onclick = function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    };
};
