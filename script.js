const sideBar = document.getElementById("sideBar");
const CloseSideBarBtn = document.getElementById("CloseSideBarBtn");
const OpenSideBarBtn = document.getElementById("OpenSideBarBtn");
const blocker = document.getElementById("blocker");

function OpenSideBar() {
  sideBar.classList.add("right-[0px]");
  sideBar.classList.add("rounded-none");
  sideBar.classList.remove("right-[-200vh]");
  sideBar.classList.remove("rounded-[100%]");
  CloseSideBarBtn.classList.add("right-[5vh]");
  CloseSideBarBtn.classList.remove("right-[500vh]");
  OpenSideBarBtn.classList.add("right-[500vh]");
  OpenSideBarBtn.classList.remove("right-[5vh]");
  blocker.classList.remove("pointer-events-none");
  blocker.classList.remove("opacity-0");
  blocker.classList.add("pointer-events-auto");
  blocker.classList.add("opacity-50");
}

function CloseSideBar() {
  sideBar.classList.remove("right-[0px]");
  sideBar.classList.remove("rounded-none");
  sideBar.classList.add("right-[-200vh]");
  sideBar.classList.add("rounded-[100%]");
  CloseSideBarBtn.classList.remove("right-[5vh]");
  CloseSideBarBtn.classList.add("right-[500vh]");
  OpenSideBarBtn.classList.remove("right-[500vh]");
  OpenSideBarBtn.classList.add("right-[5vh]");
  blocker.classList.add("pointer-events-none");
  blocker.classList.add("opacity-0");
  blocker.classList.remove("pointer-events-auto");
  blocker.classList.remove("opacity-50");
}

OpenSideBarBtn.addEventListener("click", OpenSideBar);
CloseSideBarBtn.addEventListener("click", CloseSideBar);
blocker.addEventListener("click", CloseSideBar);

let btns = document.querySelectorAll(".btn");
let btnSpan = document.querySelectorAll(".btn span");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let btnWidth = btn.clientWidth;
    let btnHeight = btn.clientHeight;
    let transX = (x - btnWidth / 2) * 0.3;
    let transY = (y - btnHeight / 2) * 0.3;
    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "translateX(0) translateY(0)";
  });
});

const customize = document.getElementById("customize");

function openCustomize() {
  customize.classList.toggle("right-3");
  customize.classList.toggle("right-[-50%]");
}

document.addEventListener("DOMContentLoaded", function () {
  const fontSelect = document.getElementById("fontSelect");
  const themeSelect = document.getElementById("themeSelect");

  fontSelect.addEventListener("change", function () {
    const selectedFont = this.value;
    document.body.classList.remove(
      "font-default",
      "font-modern",
      "font-simple",
      "font-easy",
      "font-newspaper"
    );
    document.body.classList.add(`font-${selectedFont}`);
  });

  themeSelect.addEventListener("change", function () {
    const selectedTheme = this.value;
    document.body.classList.remove(
      "theme-default",
      "theme-light",
      "theme-dark",
      "theme-neon",
      "theme-glitch"
    );
    document.body.classList.add(`theme-${selectedTheme}`);
  });
});

const contextMenu = document.getElementById('contextMenu');

// Display the context menu on right-click anywhere on the body
document.body.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevent the default context menu from showing
    const { pageX: mouseX, pageY: mouseY } = event; // Use pageX and pageY

    // Position the context menu
    contextMenu.style.top = `${mouseY}px`;
    contextMenu.style.left = `${mouseX}px`;
    contextMenu.classList.remove('hidden');
});

// Hide the context menu when clicking elsewhere
document.addEventListener('click', (event) => {
    if (!contextMenu.contains(event.target)) {
        contextMenu.classList.add('hidden');
    }
});

// Hide the context menu when pressing the "Escape" key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        contextMenu.classList.add('hidden');
    }
});