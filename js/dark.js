function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

// Check dark mode preference on page load
document.addEventListener("DOMContentLoaded", function() {
    var darkModePref = localStorage.getItem("darkMode");
    var body = document.body;
    if (darkModePref === "true") {
        body.classList.add("dark-mode");
    }
});
