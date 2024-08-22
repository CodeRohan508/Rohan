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

function openForm() {
  document.querySelector(".form").classList.add("openForm")
  document.querySelector(".bodyb").classList.add("actb")
}

function closeForm() {
  document.querySelector(".form").classList.remove("openForm")
  document.querySelector(".bodyb").classList.remove("actb")
}