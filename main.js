// Get all sections and nav links
const sections = document.querySelectorAll("section");
// Get all nav links
const navLinks = document.querySelectorAll("nav a");

// Add event listener to each nav link
navLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    // Get corresponding section
    const section = sections[index];

    // Scroll to section
    section.scrollIntoView({ behavior: "smooth" });
  });
});
// Add event listener to window's scroll event
window.addEventListener("scroll", () => {
  // Get current scroll position
  const scrollPosition = window.scrollY;

  // Loop through sections and check if they're in view
  sections.forEach((section, index) => {
    // Get section's bounding rectangle
    const sectionRect = section.getBoundingClientRect();

    // Check if section is in view
    if (
      sectionRect.top <= window.innerHeight / 2 &&
      sectionRect.bottom >= window.innerHeight / 2
    ) {
      // Get corresponding nav link
      const navLink = navLinks[index];

      // Add active class to nav link
      navLink.classList.add("active");

      // Remove active class from other nav links
      navLinks.forEach((otherNavLink, otherIndex) => {
        if (otherIndex !== index) {
          otherNavLink.classList.remove("active");
        }
      });
    }
  });
});
