document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation buttons
  const homeNav = document.getElementById("homeNav");
  const projectsNav = document.getElementById("projectsNav");
  const reviewsNav = document.getElementById("reviewsNav");

  // Get all sections
  const homeSection = document.getElementById("home");
  const projectsSection = document.getElementById("projects");
  const reviewsSection = document.getElementById("reviews");

  // Show the home section by default
  homeSection.classList.add("active");
  homeSection.classList.remove("hidden");

  // Add event listeners for each navigation item
  homeNav.addEventListener("click", function () {
    showSection(homeSection);
  });

  projectsNav.addEventListener("click", function () {
    showSection(projectsSection);
  });

  reviewsNav.addEventListener("click", function () {
    showSection(reviewsSection);
  });

  function showSection(section) {
    // Hide all sections first
    document.querySelectorAll(".content-section").forEach((sec) => {
      if (sec !== section) {
        sec.classList.remove("active");
        // Add a slight delay before hiding the section to allow fade-out
        setTimeout(() => {
          sec.classList.add("hidden");
        }, 500); // This timing should match your CSS transition duration
      }
    });

    // Show the selected section
    section.classList.remove("hidden");
    // Add the 'active' class with a slight delay to trigger the fade-in effect
    setTimeout(() => {
      section.classList.add("active");
    }, 10); // This is necessary to ensure the transition works
  }
});

// Function to toggle between dark mode and light mode
function toggleDarkMode() {
  const body = document.body;

  // Toggle the 'darkMode' class on the body
  body.classList.toggle("darkMode");

  // Optionally change the moon/sun icon when toggling modes
  const imgElement = document.querySelector("#darkMode img");

  if (body.classList.contains("darkMode")) {
    imgElement.src = "./Images/sun-icon.png"; // Path to your light mode icon (sun)
  } else {
    imgElement.src = "./Images/crescent-moon-png-35134.png"; // Path to your dark mode icon (moon)
  }
}

// Add event listener to the button to call toggleDarkMode function on click
document.getElementById("darkMode").addEventListener("click", toggleDarkMode);
