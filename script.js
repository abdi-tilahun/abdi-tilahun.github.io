window.onload = function () {
    const themeToggle = document.getElementById("themeToggle");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.onclick = function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    };
};