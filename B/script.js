const contextMenu = document.getElementById("context-menu");
const rightClickArea = document.body;

rightClickArea.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = e;
  contextMenu.style.top = `${mouseY}px`;
  contextMenu.style.left = `${mouseX}px`;
  contextMenu.style.display = "block"; // Show the menu at the click location
  contextMenu.classList.remove("hidden");
});

document.addEventListener("click", () => {
  contextMenu.style.display = "none"; // Hide the menu when clicking elsewhere
  contextMenu.classList.add("hidden");
});

ScrollReveal().reveal("#skills", {
  duration: 1000, // Animation duration in milliseconds
  origin: "bottom", // Start position ('top', 'right', 'bottom', 'left')
  distance: "50px", // Distance the element moves during the reveal
  delay: 200, // Delay before the animation starts
  reset: true, // Animation resets on scroll (optional)
});
