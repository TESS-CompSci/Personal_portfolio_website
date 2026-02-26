// === Mobile Navbar Toggle, visibity if navigation links for mobile view ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// === DOMContentLoaded to ensure elements are ready before interaction ===
document.addEventListener("DOMContentLoaded", function () {

   // === Form Element References ===
  const form = document.getElementById("contactForm");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");
  const charCount = document.getElementById("charCount");

  // Character count live update
  message.addEventListener("input", () => {
    charCount.textContent = `${message.value.length} / 500 characters`;
  });
  
   // === Submission handling===
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ===Input Validation ===
    const namePattern = /^[A-Za-z]+$/;

     // First name validation
    if (!namePattern.test(firstName.value.trim())) {
      formMessage.textContent = "First name should only contain letters.";
      formMessage.style.color = "red";
      return;
    }
    
    //  Last name validation 
    if (!namePattern.test(lastName.value.trim())) {
      formMessage.textContent = "Last name should only contain letters.";
      formMessage.style.color = "red";
      return;
    }
   
     //  Message count validation
    if (message.value.trim().length < 10) {
      formMessage.textContent = "Message must be at least 10 characters.";
      formMessage.style.color = "red";
      return;
    }

    // Success then redirect to thankyou page
    window.location.href = "portfoliothankyou.html";
  });
});


// === Dark Mode Toggle ===
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌓  Dark Mode";
darkModeToggle.classList.add("dark-toggle");
document.body.appendChild(darkModeToggle);


// ==== Ensures that dark or light mode preference is saved even after refresh
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
// Store preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // === Load Saved Theme Preference ===
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }


// === Smooth Scrolling for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });

// === Safe fallback inacse the first navbar toggle function fails
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});

});
