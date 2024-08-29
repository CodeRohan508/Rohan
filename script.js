document
  .getElementById("OpenSideBarBtn")
  .addEventListener("click", function () {
    const sideBar = document.getElementById("sideBar");
    const CloseSideBarBtn = document.getElementById("CloseSideBarBtn");
    const OpenSideBarBtn = document.getElementById("OpenSideBarBtn");

    sideBar.classList.add("right-[0px]");
    sideBar.classList.add("rounded-none");
    sideBar.classList.remove("right-[-200vh]");
    sideBar.classList.remove("rounded-[100%]");
    CloseSideBarBtn.classList.add("right-[5vh]");
    CloseSideBarBtn.classList.remove("right-[500vh]");
    OpenSideBarBtn.classList.add("right-[500vh]");
    OpenSideBarBtn.classList.remove("right-[5vh]");
  });

document
  .getElementById("CloseSideBarBtn")
  .addEventListener("click", function () {
    const sideBar = document.getElementById("sideBar");
    const CloseSideBarBtn = document.getElementById("CloseSideBarBtn");
    const OpenSideBarBtn = document.getElementById("OpenSideBarBtn");

    sideBar.classList.remove("right-[0px]");
    sideBar.classList.remove("rounded-none");
    sideBar.classList.add("right-[-200vh]");
    sideBar.classList.add("rounded-[100%]");
    CloseSideBarBtn.classList.remove("right-[5vh]");
    CloseSideBarBtn.classList.add("right-[500vh]");
    OpenSideBarBtn.classList.remove("right-[500vh]");
    OpenSideBarBtn.classList.add("right-[5vh]");
  });

let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let btnWidth = btn.clientWidth;
    let btnHeight = btn.clientHeight;
    // Reduce the scaling factor for even less movement
    let transX = (x - btnWidth / 2) * 0.05; // Adjust this value for less range
    let transY = (y - btnHeight / 2) * 0.05; // Adjust this value for less range
    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "translateX(0) translateY(0)";
  });
});
