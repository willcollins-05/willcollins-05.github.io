const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !isExpanded);

  navLinks.classList.toggle("hidden");

  // Toggle between hamburger and X
  if (isExpanded) {
    menuIcon.textContent = "menu";
  } else {
    menuIcon.textContent = "close";
  }
});
