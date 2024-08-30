document
  .getElementById("OpenSideBarBtn")
  .addEventListener("click", function () {
    const sideBar = document.getElementById("sideBar");
    const CloseSideBarBtn = document.getElementById("CloseSideBarBtn");
    const OpenSideBarBtn = document.getElementById("OpenSideBarBtn");
    const blocker = document.getElementById("blocker")

    sideBar.classList.add("right-[0px]");
    sideBar.classList.add("rounded-none");
    sideBar.classList.remove("right-[-200vh]");
    sideBar.classList.remove("rounded-[100%]");
    CloseSideBarBtn.classList.add("right-[5vh]");
    CloseSideBarBtn.classList.remove("right-[500vh]");
    OpenSideBarBtn.classList.add("right-[500vh]");
    OpenSideBarBtn.classList.remove("right-[5vh]");
    blocker.classList.remove("pointer-events-none")
    blocker.classList.remove("opacity-0")
    blocker.classList.add("pointer-events-auto")
    blocker.classList.add("opacity-50")
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
