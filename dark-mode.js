/* dark-mode.js */

// Immediately apply dark mode based on localStorage
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// If toggle button exists (home page), set up toggle functionality
const toggleBtn = document.getElementById("themeToggle");
if(toggleBtn){
    // Initialize button text
    if(localStorage.getItem("theme") === "dark"){
        toggleBtn.textContent = "☀️";
        toggleBtn.style.background = "#f4f4f4";
        toggleBtn.style.color = "#000";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            toggleBtn.textContent = "☀️";
            toggleBtn.style.background = "#f4f4f4";
            toggleBtn.style.color = "#000";
            localStorage.setItem("theme","dark");
        } else {
            toggleBtn.textContent = "🌙";
            toggleBtn.style.background = "#444";
            toggleBtn.style.color = "white";
            localStorage.setItem("theme","light");
        }
    });
}
