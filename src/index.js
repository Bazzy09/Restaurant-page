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

function loadPage(pageLoader) {
  pageLoader();
}

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  nav.classList.add('fixed-nav');
  document.body.appendChild(nav);

  const links = [
    { text: 'Home', href: '#', loader: loadHomePage },
    { text: 'Menu', href: '#menu', loader: loadMenuPage },
    { text: 'Reservation', href: '#reservation', loader: loadReservationPage },
    { text: 'Contact', href: '#contact', loader: loadContactPage },
  ];

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-link');
  nav.appendChild(navLinks);

  links.forEach((linkDetail) => {
    const link = document.createElement('li');
    link.classList.add('nav-link-child');
    const anchor = document.createElement('a');
    anchor.href = linkDetail.href;
    anchor.textContent = linkDetail.text;
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      clearContent();
      loadPage(linkDetail.loader);
    });
    link.appendChild(anchor);
    navLinks.appendChild(link);
  });

  loadPage(loadHomePage);
});
