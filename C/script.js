const contextMenu = document.getElementById('context-menu');
const rightClickArea = document.body

rightClickArea.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = e;
  contextMenu.style.top = `${mouseY}px`;
  contextMenu.style.left = `${mouseX}px`;
  contextMenu.style.display = 'block'; // Show the menu at the click location
  contextMenu.classList.remove('hidden');
});

document.addEventListener('click', () => {
  contextMenu.style.display = 'none'; // Hide the menu when clicking elsewhere
  contextMenu.classList.add('hidden');
});