import loadHomePage from './home';
import loadMenuPage from './menu';
import loadReservationPage from './reservation';
import loadContactPage from './contact';

function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const navLinks = document.createElement('ul');
  navLinks.classList.add("nav-link");
  content.appendChild(navLinks);
  const homeLink = document.createElement('li');
  homeLink.classList.add("nav-link-child")
    homeLink.textContent = "Home"
  navLinks.appendChild(homeLink)

    
    // const menuButton = document.createElement('menu-button');
    // const reservationButton = document.createElement('reservation-button')
    // const contactButton = document.createElement('contact-button');

    

    // menuButton.addEventListener('click', () => {
    //   clearContent();
    //   loadMenuPage();
    // });

    // reservationButton.addEventListener('click', () => {
    //     clearContent();
    //     loadReservationPage();
    // });

    // contactButton.addEventListener('click', () => {
    //   clearContent();
    //   loadContactPage();
    // });

    loadHomePage(); 
});
