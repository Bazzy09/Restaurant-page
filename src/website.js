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

function initializeWebsite() {
  const content = document.getElementById('content');
  const navLinks = document.createElement('ul');
  navLinks.classList.add("nav-link");
  content.appendChild(navLinks);

  const homeLink = document.createElement('li');
  homeLink.classList.add("nav-link-child");
  homeLink.textContent = "Home";
  homeLink.addEventListener('click', () => {
    clearContent();
    loadHomePage();
  });
  navLinks.appendChild(homeLink);

  const menuLink = document.createElement('li');
  menuLink.classList.add("nav-link-child");
  menuLink.textContent = "Menu";
  menuLink.addEventListener('click', () => {
    clearContent();
    loadMenuPage();
  });
  navLinks.appendChild(menuLink);

  const reservationLink = document.createElement('li');
  reservationLink.classList.add("nav-link-child");
  reservationLink.textContent = "Reservation";
  reservationLink.addEventListener('click', () => {
    clearContent();
    loadReservationPage();
  });
  navLinks.appendChild(reservationLink);

  const contactLink = document.createElement('li');
  contactLink.classList.add("nav-link-child");
  contactLink.textContent = "Contact";
  contactLink.addEventListener('click', () => {
    clearContent();
    loadContactPage();
  });
  navLinks.appendChild(contactLink);

  loadHomePage();
}

document.addEventListener('DOMContentLoaded', initializeWebsite);

export default initializeWebsite;
