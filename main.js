const menuButton = document.getElementById("phone-menu-btn");
const menu = document.getElementById("phone-menu");
let isMenuOpen = false;

const header = document.getElementById("header");

// Function to toggle menu display
const toggleMenu = () => {
  if (isMenuOpen) {
    menu.classList.remove("active");
    isMenuOpen = false;
  } else {
    menu.classList.add("active");
    isMenuOpen = true;
  }
  console.log(isMenuOpen);
};

// Event listener for menu button
menuButton.addEventListener("click", (e) => {
  toggleMenu();
  e.stopPropagation(); // Stop event from propagating
});

// Event listener for menu to stop propagation
menu.addEventListener("click", (e) => {
  e.stopPropagation(); // Stop event from propagating
});

// Event listener for document to close menu
document.addEventListener("click", () => {
  if (isMenuOpen) {
    menu.classList.remove("active");
    isMenuOpen = false;
    console.log(isMenuOpen);
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("scroll-fade-in");
    header.classList.remove("scroll-fade-out");
  } else {
    header.classList.remove("scroll-fade-in");
    header.classList.add("scroll-fade-out");
  }
});
