
    const toggleBtn = document.getElementById("darkModeToggle");
    document.body.classList.add("dark-mode");
    // Toggle theme
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            
            toggleBtn.textContent = "☀️";
        } else {
            
            toggleBtn.textContent = "🌙";
        }
    });

      // Toggle menu visibility on small screens
    function toggleMenu() {
        const links = document.querySelector('.navigation-links');
        links.classList.toggle('active');
        links.style.backgroundColor = '#0A0F1C';
        links.style.padding = '10px';
        links.classList.toggle('give-margin');
    }