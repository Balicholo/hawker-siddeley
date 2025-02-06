document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".ri-menu-line");
    const closeIcon = document.querySelector(".ri-close-line");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu .nav-links a, .nav-menu button");
  
    // Open the nav menu
    menuIcon.addEventListener("click", () => {
      navMenu.classList.add("active");
    });
  
    // Close the nav menu
    closeIcon.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  
    // Close nav menu when a link or button is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  });

// ACTIVE LINK
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links li a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Remove active class from all links
        navLinks.forEach((item) => item.classList.remove("active"));
        // Add active class to the clicked link
        link.classList.add("active");
      });
    });
  });

// NAVBLUR
// Select the navigation bar
const nav = document.querySelector('.nav-container');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('nav-blur'); // Add blur when scrolling
    } else {
        nav.classList.remove('nav-blur'); // Remove blur when at the top
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("testimonial-name");
  const textElement = document.getElementById("testimonial-text");
  const leftButton = document.getElementById("nav-left");
  const rightButton = document.getElementById("nav-right");
  const testimonialContainer = document.querySelector(".changing-testimonials");
  const languageSwitcher = document.getElementById("language-switcher");

  let currentIndex = 0;
  let testimonials = [];

  function updateTestimonial() {
    // Apply sliding out effect
    testimonialContainer.classList.add("slide-out");

    // Wait for the slide-out animation to complete before updating content
    setTimeout(() => {
      nameElement.textContent = testimonials[currentIndex].name;
      textElement.textContent = testimonials[currentIndex].text;

      // Remove slide-out and add slide-in for smooth transition
      testimonialContainer.classList.remove("slide-out");
      testimonialContainer.classList.add("slide-in");

      // After the slide-in animation, clean up classes
      setTimeout(() => {
        testimonialContainer.classList.remove("slide-in");
      }, 500);

      // Disable buttons at the ends
      leftButton.style.color = currentIndex === 0 ? "grey" : "rgb(255, 68, 0)";
      rightButton.style.color =
        currentIndex === testimonials.length - 1 ? "grey" : "rgb(255, 68, 0)";
    }, 500); // Matches the slide-out animation duration
  }

  function loadTestimonials(language) {
    fetch(`./lang/${language}.json`)
      .then(response => response.json())
      .then(data => {
        testimonials = [
          data.testimonial1,
          data.testimonial2,
          data.testimonial3
        ];
        updateTestimonial();
      });
  }

  function changeLanguage(event) {
    const selectedLanguage = event.target.value;
    localStorage.setItem('language', selectedLanguage);
    loadTestimonials(selectedLanguage);
  }

  languageSwitcher.addEventListener("change", changeLanguage);

  leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateTestimonial();
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
      updateTestimonial();
    }
  });

  // On page load, set the language and load testimonials
  const storedLanguage = localStorage.getItem('language') || 'en';
  languageSwitcher.value = storedLanguage;
  loadTestimonials(storedLanguage);
});
// TRANSLATION
const languageSwitcher = document.getElementById("language-switcher");

function changeLanguage(event) {
  const selectedLanguage = event.target.value;
  localStorage.setItem('language', selectedLanguage);
  loadLanguage(selectedLanguage);
}

function loadLanguage(language) {
  fetch(`./lang/${language}.json`)
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (data[key]) {
          element.textContent = data[key];
        }
      });
    });
}

// On page load, set the language
document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem('language') || 'en';
  languageSwitcher.value = storedLanguage;
  loadLanguage(storedLanguage);
});