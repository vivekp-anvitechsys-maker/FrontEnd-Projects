document.body.classList.add("dark-mode");
function toggleDarkMode()
{
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) 
    {     
        toggleBtn.textContent = "☀️";
    } 
    else 
    {  
        toggleBtn.textContent = "🌙";
    } 
}

 // Toggle menu visibility on small screens
function toggleMenu() 
{
  const links = document.querySelector('.navigation-links');
  links.classList.toggle('active');
  links.style.backgroundColor = '#0A0F1C';
  links.style.padding = '10px';
  links.classList.toggle('give-margin');
}

// Load navbar.html into the #navbar div
function loadNavbar()
{
  fetch("./navbar.html")
  .then(response => {
    if (!response.ok) throw new Error("Navbar file not found");
    return response.text();
  })
  .then(data => document.getElementById("navbar-element").innerHTML = data)
  .catch(err => console.error(err));
}   

// Load footer.html into the footer div
function loadFooter()
{
  fetch("./footer.html")
  .then(response => {
    if (!response.ok) throw new Error("Footer file not found");
    return response.text();
  })
  .then(data => document.getElementById("footer-element").innerHTML = data)
  .catch(err => console.error(err));
}

// Load faq.html into the footer div
function loadFaq()
{
  // Load footer.html into the footer div
  fetch("./faq.html")
  .then(response => {
    if (!response.ok) throw new Error("FAQ file not found");
    return response.text();
  })
  .then(data => document.getElementById("faq-element").innerHTML = data)
  .catch(err => console.error(err));
}
