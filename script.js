function OpenSideBar() {
  document.querySelector(".circle").classList.add("open");
  document.querySelector(".OpenSideBar").classList.add("SideHide")
  document.querySelector(".CloseSideBar").classList.remove("SideHide")
}

function CloseSideBar() {
  document.querySelector(".circle").classList.remove("open");
  document.querySelector(".OpenSideBar").classList.remove("SideHide")
  document.querySelector(".CloseSideBar").classList.add("SideHide")
}
