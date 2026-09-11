const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");
const menuButtonIcon = menuButton.querySelector("i");
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isMenuOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.setAttribute(
    "class",
    isMenuOpen ? "ri-close-line" : "ri-menu-3-line",
  );
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-3-line");
});
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".hero-image img", { duration: 1000 });
ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".hero-content .section-description", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".hero-actions", { ...scrollRevealOptions, delay: 1500 });
ScrollReveal().reveal(".hero-content .social-links", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".product-card", {
  ...scrollRevealOptions,
  interval: 500,
});
ScrollReveal().reveal(".featured-product-card img", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".featured-product-card:nth-child(2) img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".featured-product-content h4", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".featured-product-content .section-description", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".featured-product-content h3", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".product-action", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".promotion-content .section-title", {
  ...scrollRevealOptions,
});
ScrollReveal().reveal(".promotion-content .section-description", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".feature-card", {
  ...scrollRevealOptions,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".subscription-content .section-title", {
  ...scrollRevealOptions,
});
ScrollReveal().reveal(".subscription-content .section-description", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".subscription-content form", {
  ...scrollRevealOptions,
  delay: 1000,
});
