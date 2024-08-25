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

// Function to initialize hover effects for each item
function initHoverEffect() {
  // Get all items in the project list
  const items = document.querySelectorAll(".item");

  // Iterate over each item to add hover effects
  items.forEach((item) => {
    const follower = item.querySelector(".follower");

    // Show the follower div when mouse enters the item
    item.addEventListener("mouseenter", () => {
      follower.style.display = "block";
    });

    // Move the follower div with the mouse
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Calculate the position to center the follower on the mouse
      const followerWidth = follower.offsetWidth;
      const followerHeight = follower.offsetHeight;

      const followerX = mouseX - followerWidth / 2;
      const followerY = mouseY - followerHeight / 2;

      // Update the follower position
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    });

    // Hide the follower div when mouse leaves the item
    item.addEventListener("mouseleave", () => {
      follower.style.display = "none";
    });
  });
}

// Initialize the hover effect on page load
document.addEventListener("DOMContentLoaded", initHoverEffect);
