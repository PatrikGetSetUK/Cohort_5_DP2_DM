// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

// Close mobile menu on link click
function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
}

// Cookie Popup
function acceptCookies() {
  document.getElementById("cookie-popup").style.display = "none";
}
