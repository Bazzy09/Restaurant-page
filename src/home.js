function loadHomePage() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.textContent = 'Welcome to our wonderful restaurant!';
    content.appendChild(homeDiv);
  }
  
  export default loadHomePage;
  