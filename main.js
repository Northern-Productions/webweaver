const menuButton = document.getElementById("phone-menu-btn");
const menu = document.getElementById("phone-menu");
let isMenuOpen = false;

const cloudHeader = document.getElementById("cloud-header");

//------------------------------------------------------------

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

//------------------------------------------------------------

// Event listener for window scroll on nav bar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    cloudHeader.classList.add("scroll-fade-in");
    cloudHeader.classList.remove("scroll-fade-out");
  } else {
    cloudHeader.classList.remove("scroll-fade-in");
    cloudHeader.classList.add("scroll-fade-out");
  }
});

//------------------------------------------------------------

// Loading screen overlay
const overlay = document.querySelector(".overlay");

// Event listener for overlay
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("load")) {
    event.preventDefault();
    overlay.style.display = "block";
    requestAnimationFrame(() => {
      overlay.classList.add("fade-in");
      overlay.classList.remove("fade-out");
    });

    overlay.addEventListener(
      "transitionend",
      function () {
        window.location.href = event.target.getAttribute("data-target");
      },
      { once: true }
    );
  }
});

//------------------------------------------------------------

// Ensure the overlay is visible and has the fade-in class when the page starts loading
document.addEventListener("DOMContentLoaded", function () {
  overlay.style.display = "block";
  overlay.classList.add("fade-in");
});

//------------------------------------------------------------

// Event listener for window loading screen
window.addEventListener("load", function () {
  overlay.classList.add("fade-out");
  overlay.classList.remove("fade-in");

  overlay.addEventListener(
    "transitionend",
    function () {
      overlay.style.display = "none";
    },
    { once: true }
  );
});

//------------------------------------------------------------

// Event listener for scroll fade effect on paragraphs
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-paragraph");

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Stop observing after the first fade-in
      }
    });
  }, observerOptions);

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});

//------------------------------------------------------------
