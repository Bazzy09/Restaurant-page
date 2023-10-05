import loadHomePage from './home';
import loadMenuPage from './menu';
import loadReservationPage from './reservation';
import loadContactPage from './contact';

function clearContent () {
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
  homeLink.classList.add("nav-link-child");
  const homeAnchor = document.createElement('a');
  homeAnchor.href = "#";
  homeAnchor.textContent = "Home";
  homeAnchor.addEventListener('click', loadHomePage);
  homeLink.appendChild(homeAnchor);
  navLinks.appendChild(homeLink);

  const menuLink = document.createElement('li');
  menuLink.classList.add("nav-link-child");
  const menuAnchor = document.createElement('a');
  menuAnchor.href = "#menu";
  menuAnchor.textContent = "Menu";
  menuAnchor.addEventListener('click', loadMenuPage);
  menuLink.appendChild(menuAnchor);
  navLinks.appendChild(menuLink);

  const reservationLink = document.createElement('li');
  reservationLink.classList.add("nav-link-child");
  const reservationAnchor = document.createElement('a');
  reservationAnchor.href = "#reservation";
  reservationAnchor.textContent = "Reservation";
  reservationAnchor.addEventListener('click', loadReservationPage);
  reservationLink.appendChild(reservationAnchor);
  navLinks.appendChild(reservationLink);

  const contactLink = document.createElement('li');
  contactLink.classList.add("nav-link-child");
  const contactAnchor = document.createElement('a');
  contactAnchor.href = "#contact";
  contactAnchor.textContent = "Contact";
  contactAnchor.addEventListener('click', loadContactPage);
  contactLink.appendChild(contactAnchor);
  navLinks.appendChild(contactLink);

  loadHomePage();
});
