const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};



 ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
 });
 ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500, 
 });
  ScrollReveal().reveal(".header_content h2", {
  ...scrollRevealOption,
  delay: 1000, 
 });
  ScrollReveal().reveal(".header_btn", {
  ...scrollRevealOption,
  delay: 500, 
 });
 
 ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
 });

 ScrollReveal().reveal(".about_content .content_header", {
  ...scrollRevealOption,
  delay: 500, 
 });

 ScrollReveal().reveal(".about_content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500, 
 });
 ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 2000,
 });

 ScrollReveal().reveal(".portfolio_grid img", {
  ...scrollRevealOption,
  delay: 1600,
  interval: 200,  
 });
 ScrollReveal().reveal(".portfolio_grid .featured", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500, 
 });
