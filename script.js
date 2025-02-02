document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-button");

  // Sticky Navigation Menu
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
      scrollBtn.style.display = "block";
    } else {
      nav.classList.remove("sticky");
      scrollBtn.style.display = "none";
    }
  };

  // Side Navigation Menu
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");

  const hideNavMenu = () => {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
  };

  // Close side navigation
  cancelBtn.onclick = hideNavMenu;

  // Close side navigation when a menu link is clicked
  let navLinks = document.querySelectorAll(".menu li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", hideNavMenu);
  });

  // Scroll to top button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });

  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
// Update year in footer
document.getElementById('spanYear').innerHTML=new Date().getFullYear();