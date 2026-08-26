// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});



// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});



// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const elementsToReveal = document.querySelectorAll(
  ".project-card, .timeline-item, .skill-card, .info-card"
);


// Give each element the reveal class

elementsToReveal.forEach((element) => {
  element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        // Stop observing after animation
        revealObserver.unobserve(entry.target);
      }

    });

  },

  {
    threshold: 0.12
  }

);


elementsToReveal.forEach((element) => {
  revealObserver.observe(element);
});



// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();



// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }

  });


  navigationLinks.forEach((link) => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href") === `#${currentSection}`
    ) {
      link.classList.add("active-link");
    }

  });

});
