window.addEventListener("scroll", (): void => {
  const headerLinks = document.querySelectorAll<HTMLAnchorElement>(".navbar a");
  const projectsSection = document.querySelector<HTMLElement>(".projects");
  const header = document.querySelector<HTMLElement>(".header");

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

window.onload = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
