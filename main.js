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

// TESTIMONIAL CARDS
// document.addEventListener("DOMContentLoaded", () => {
//   const testimonials = [
//     {
//       name: "Mercy",
//       text: "Working with Hawker Siddeley has been a game-changer for our projects. Their technical expertise, attention to detail, and commitment to delivering on time exceeded our expectations. From precision machining to reliable solutions, they've become an invaluable partner for our operations.",
//     },
//     {
//       name: "John",
//       text: "Hawker Siddeley consistently delivers exceptional results. Their innovative approaches and expert team have elevated our operations, making complex tasks seem effortless. A reliable and professional partner.",
//     },
//     {
//       name: "Tinashe",
//       text: "The team at Hawker Siddeley has set a new standard in service and quality. From consultation to execution, every step has been seamless, professional, and efficient.",
//     },
//   ];

//   const nameElement = document.getElementById("testimonial-name");
//   const textElement = document.getElementById("testimonial-text");
//   const leftButton = document.getElementById("nav-left");
//   const rightButton = document.getElementById("nav-right");

//   let currentIndex = 0;

//   const updateTestimonial = () => {
//     nameElement.textContent = testimonials[currentIndex].name;
//     textElement.textContent = testimonials[currentIndex].text;

//     // Disable buttons at the ends
//     leftButton.style.color = currentIndex === 0 ? "grey" : "rgb(255, 68, 0)";
//     rightButton.style.color =
//       currentIndex === testimonials.length - 1 ? "grey" : "rgb(255, 68, 0)";
//   };

//   leftButton.addEventListener("click", () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateTestimonial();
//     }
//   });

//   rightButton.addEventListener("click", () => {
//     if (currentIndex < testimonials.length - 1) {
//       currentIndex++;
//       updateTestimonial();
//     }
//   });

//   // Initial setup
//   updateTestimonial();
// });
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "Mercy",
      text: "Hawker Siddeley's precision and reliability transformed our projects. Their expertise, attention to detail, and timely delivery exceeded all expectations. A truly invaluable partner for our operations.",
    },
    {
      name: "John",
      text: "Exceptional service! Hawker Siddeley's technical skills and commitment to precision machining made them our go-to partner. They consistently deliver quality solutions, right on time.",
    },
    {
      name: "Tinashe",
      text: "Partnering with Hawker Siddeley has been incredible. Their innovative machining solutions, professional team, and dedication to excellence make them a standout choice for any project.",
    },
  ];

  const nameElement = document.getElementById("testimonial-name");
  const textElement = document.getElementById("testimonial-text");
  const leftButton = document.getElementById("nav-left");
  const rightButton = document.getElementById("nav-right");
  const testimonialContainer = document.querySelector(".changing-testimonials");

  let currentIndex = 0;

  const updateTestimonial = (direction) => {
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
  };

  leftButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateTestimonial("left");
    }
  });

  rightButton.addEventListener("click", () => {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
      updateTestimonial("right");
    }
  });

  // Initial setup
  updateTestimonial();
});
