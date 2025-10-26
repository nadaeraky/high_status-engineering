document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const closeMobileNav = document.getElementById("closeMobileNav");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const body = document.body;

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.add("open");
    body.style.overflow = "hidden";
  });

  const closeMenu = () => {
    mobileNav.classList.remove("open");
    body.style.overflow = ""; 
  };

  closeMobileNav.addEventListener("click", closeMenu);

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const submenu = toggle.nextElementSibling;
      const isExpanded =
        toggle.getAttribute("aria-expanded") === "true" || false;

      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.setAttribute("aria-expanded", "false");
          otherToggle.nextElementSibling.style.maxHeight = null;
        }
      });

      if (!isExpanded) {
        toggle.setAttribute("aria-expanded", "true");
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      } else {
        toggle.setAttribute("aria-expanded", "false");
        submenu.style.maxHeight = null;
      }
    });
  });

  document.addEventListener("click", (event) => {
    const isClickInside =
      mobileNav.contains(event.target) || mobileMenuBtn.contains(event.target);
    if (!isClickInside && mobileNav.classList.contains("open")) {
      closeMenu();
    }
  });
});
