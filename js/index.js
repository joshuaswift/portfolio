var overlay = document.querySelector(".menu-overlay");
var menuButton = document.querySelector(".menu-button");
var closeMenu = document.querySelector(".close-menu");
var menuList = document.querySelector(".menu-list");

menuButton.addEventListener("click", function() {
  overlay.style.display = "block";
});

closeMenu.addEventListener("click", function() {
  overlay.style.display = "none";
});

menuList.addEventListener("click", function() {
  overlay.style.display = "none";
});
