// // Scroll behavior for header links
// window.addEventListener("scroll", () => {
//   const headerLinks = document.querySelectorAll(".navbar a");
//   const projectsSection = document.querySelector(".projects");
//   const header = document.querySelector(".header");

//   if (!projectsSection || !header) return;

//   const projectsTop = projectsSection.offsetTop;
//   const scrollPosition = window.scrollY;

//   headerLinks.forEach((link) => {
//     if (scrollPosition >= projectsTop) {
//       link.style.color = "#081b29";
//     } else {
//       link.style.color = "#ededed";
//     }
//   });
// });

// // Initial scroll position
// window.onload = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// // Disable scroll restoration
// if ("scrollRestoration" in history) {
//   history.scrollRestoration = "manual";
// }

// // Hamburger menu functionality
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const navMenu = document.querySelector(".navbar");

//   if (hamburger && navMenu) {
//     hamburger.addEventListener("click", () => {
//       hamburger.classList.toggle("active");
//       navMenu.classList.toggle("active");
//     });

//     // Close menu when clicking on a nav link
//     document.querySelectorAll(".navbar a").forEach((link) => {
//       link.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//       });
//     });
//   }
// });

// Navigation
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in
document
  .querySelectorAll(".project-card, .tech-section, .about-body")
  .forEach((el) => {
    observer.observe(el);
  });

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const homeSection = document.querySelector(".home");
  if (homeSection) {
    homeSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.navbar a[href*=${sectionId}]`)
        ?.classList.add("active");
    } else {
      document
        .querySelector(`.navbar a[href*=${sectionId}]`)
        ?.classList.remove("active");
    }
  });
});

// Add hover effect for project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Add typing effect for the main heading
const heading = document.querySelector(".home-content h1");
if (heading) {
  const text = heading.textContent;
  heading.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heading.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  typeWriter();
}
