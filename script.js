function OpenSideBar() {
  document.querySelector(".circle").classList.add("open");
  document.querySelector(".OpenSideBar").classList.add("SideHide");
  document.querySelector(".CloseSideBar").classList.remove("SideHide");
}

function CloseSideBar() {
  document.querySelector(".circle").classList.remove("open");
  document.querySelector(".OpenSideBar").classList.remove("SideHide");
  document.querySelector(".CloseSideBar").classList.add("SideHide");
}

function openForm() {
  document.querySelector(".form").classList.add("openForm");
  document.querySelector(".bodyb").classList.add("actb");
}

function closeForm() {
  document.querySelector(".form").classList.remove("openForm");
  document.querySelector(".bodyb").classList.remove("actb");
}

function initHoverEffect() {
  // Get all items in the project list
  const items = document.querySelectorAll(".item");

  // Iterate over each item to add hover effects
  items.forEach((item) => {
    const follower = item.querySelector(".follower");

    // Show the follower div and immediately move it to the cursor position when mouse enters the item
    item.addEventListener("mouseenter", (event) => {
      follower.style.display = "block";
      follower.style.scale = "1.0";
      moveFollower(event, follower, item);
    });

    // Move the follower div with the mouse
    item.addEventListener("mousemove", (event) => {
      moveFollower(event, follower, item);
    });

    // Hide the follower div when mouse leaves the item
    item.addEventListener("mouseleave", () => {
      follower.style.scale = "0.1";
      follower.style.display = "none";
    });
  });
}

// Function to move the follower to the mouse position
function moveFollower(event, follower, item) {
  const rect = item.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Calculate the position to place the follower with the mouse in the center
  const followerX = mouseX - follower.offsetWidth / 2;
  const followerY = mouseY - follower.offsetHeight / 2;

  // Update the follower position
  follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
}

// Initialize the hover effect on page load
document.addEventListener("DOMContentLoaded", initHoverEffect);

ScrollReveal().reveal('#hero h1', {
  duration: 1000,    // Animation duration in milliseconds
  origin: 'left',    // Start position of the element (left side)
  distance: '50px',  // Distance the element moves during the reveal
  delay: 200         // Delay before the animation starts
});

ScrollReveal().reveal('#hero h2', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  delay: 400
});

ScrollReveal().reveal('#hero h4', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  delay: 600
});