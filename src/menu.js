function loadMenuPage() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.textContent = 'Check out our delicious menu!';
    content.appendChild(menuDiv);
  }
  
  export default loadMenuPage;
  