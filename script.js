// Scroll behavior for header links
window.addEventListener("scroll", () => {
  const headerLinks = document.querySelectorAll(".navbar a");
  const projectsSection = document.querySelector(".projects");
  const header = document.querySelector(".header");

  if (!projectsSection || !header) return;

  const projectsTop = projectsSection.offsetTop;
  const scrollPosition = window.scrollY;

  headerLinks.forEach((link) => {
    if (scrollPosition >= projectsTop) {
      link.style.color = "#081b29";
    } else {
      link.style.color = "#ededed";
    }
  });
});

// Initial scroll position
window.onload = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Disable scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a nav link
    document.querySelectorAll(".navbar a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
});
