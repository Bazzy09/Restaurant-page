function loadHomePage() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-page');

  const backgroundImage = document.createElement('div');
  backgroundImage.classList.add('background-image');

  homeDiv.appendChild(backgroundImage);

  const welcomeMessage = document.createElement('div');
  welcomeMessage.textContent = 'Welcome to The 5th chops – A Taste of Excellence';
  welcomeMessage.classList.add('welcome-message'); 

  homeDiv.appendChild(welcomeMessage);

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerText = document.createElement('p');
  footerText.textContent = '© 2023 The 5th Chops. All rights reserved.';
  footer.appendChild(footerText);

  content.appendChild(homeDiv);
  content.appendChild(footer);
}

export default loadHomePage;
