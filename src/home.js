function loadHomePage() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-page'); 

  const backgroundImage = document.createElement('div');
  backgroundImage.classList.add('background-image'); 
  // backgroundImage.style.backgroundImage = 'url(./assets/restaurant_home.jpg)'; 

  homeDiv.appendChild(backgroundImage);

  const welcomeMessage = document.createElement('div');
  welcomeMessage.textContent = 'Welcome to The 5th – A Taste of Excellence';
  homeDiv.appendChild(welcomeMessage);
  
  content.appendChild(homeDiv);
}

export default loadHomePage;
