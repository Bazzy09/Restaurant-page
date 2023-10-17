const content = document.getElementById('content');

function clearContent() {
  content.innerHTML = '';
}

function appendDomElement(id,content){
  let htmlElement = document.getElementById(id)
  htmlElement.appendChild(content)
}

function createTextElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function loadHomePage() {

  const homeContent = document.createElement('div');
  homeContent.classList.add('home-content');
  homeContent.setAttribute('id', 'home')

  const backgroundImage = document.createElement('div');
  backgroundImage.classList.add('background-image');
  homeContent.appendChild(backgroundImage);

  const restaurantName = createTextElement('h1', 'The 5th Chops', 'restaurant-name');
  const slogan = createTextElement('h2', 'A Taste of Excellence', 'slogan');

  homeContent.appendChild(restaurantName);
  homeContent.appendChild(slogan);

  const aboutUs = createTextElement('div', 'About Us', 'about-us-heading');
  const aboutUsText = createTextElement(
    'p',
    "At The 5th Chops, we pride ourselves on offering a culinary experience like no other. Our chef's passion for food and dedication to quality ensure that every dish we serve is a masterpiece.",
    'about-us-text'
  );

  homeContent.appendChild(aboutUs);
  homeContent.appendChild(aboutUsText);

  
  content.appendChild(homeContent);

  homeContent.appendChild(loadMenuSection())

  homeContent.appendChild(loadReservationSection())
  
  homeContent.appendChild(loadContactSection())

  const footer = createTextElement('footer', '© 2023 The 5th Chops. All rights reserved.');
  footer.classList.add('footer');


  homeContent.appendChild(footer);
}

function loadMenuSection() {

  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu')
  menuDiv.classList.add('menu-page');

  const menuItems = [
    {
      name: 'Jollof Rice And Turkey',
      description: 'classic Nigerian jollof rice excellently cooked with turkey meat',
      price: '₦1800'
    },
    {
      name: 'Beans and Plantain',
      description: 'beans porridge, with plantain',
      price: '₦1200',
    },
    {
      name: 'Muschel Spaghetti',
      description: 'Classic spaghetti with tomato, mussel, and basil',
      price: '₦1500',
    },
    {
      name: 'Moi Moi',
      description: 'Freshly cooked grinded beans with egg',
      price: '₦500',
    },
  ];

  menuItems.forEach((item) => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');

    const itemName = createTextElement('h3', item.name);
    const itemDescription = createTextElement('p', item.description);
    const itemPrice = createTextElement('p', item.price);

    menuItemDiv.appendChild(itemName);
    menuItemDiv.appendChild(itemDescription);
    menuItemDiv.appendChild(itemPrice);

    menuDiv.appendChild(menuItemDiv);
  });

  const mainMenuDiv = document.createElement('div')
  mainMenuDiv.setAttribute("id", "menuItems")
  mainMenuDiv.innerHTML = menuItems
  return menuDiv
}

function loadReservationSection() {

  const mainReservationDiv = document.createElement('div');
  mainReservationDiv.setAttribute('id', 'reservation')
  const reservationDiv = createTextElement('div', 'Please fill out the form below to make a reservation.');
  mainReservationDiv.appendChild(reservationDiv)
  const reservationForm = document.createElement('form'); 

  reservationForm.id = 'reservationForm'; 
  mainReservationDiv.appendChild(reservationForm)
  const formElements = [
    { label: 'Name:', type: 'text', name: 'name' },
    { label: 'Email:', type: 'email', name: 'email' },
    { label: 'Phone:', type: 'tel', name: 'phone' },
    { label: 'Number of Guests:', type: 'number', name: 'guests' },
    { label: 'Date/Time:', type: 'datetime-local', name: 'dateTime' },
  ];

  formElements.forEach((element) => {
    const label = createTextElement('label', element.label);
    const input = document.createElement('input');
    input.type = element.type;
    input.name = element.name;
    reservationForm.appendChild(label);
    reservationForm.appendChild(input);
  }); 

  const specialRequestsLabel = createTextElement('label', 'Special Requests:');
  const specialRequestsTextarea = document.createElement('textarea');
  specialRequestsTextarea.name = 'specialRequests';
  reservationForm.appendChild(specialRequestsLabel);
  reservationForm.appendChild(specialRequestsTextarea);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Make Reservation';
  reservationForm.appendChild(submitButton);

  return mainReservationDiv;

}

function loadContactSection() {

  const mainContactDiv = document.createElement('div')
  mainContactDiv.setAttribute('id', 'contact')
  const contactDiv = createTextElement('div', 'Contact us for reservations!');
  mainContactDiv.appendChild(contactDiv)
  const locationDiv = createTextElement('div', 'Charles Eluyera Street, Mahuta, Kaduna, Nigeria.');
  mainContactDiv.appendChild(locationDiv)
  const phoneDiv = createTextElement('div', 'Phone: +2347084422406');
  mainContactDiv.appendChild(phoneDiv)

  const mapDiv = document.createElement('div');
  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.376885770578!2d8.28648005!3d9.5871465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105245726d0177cf%3A0x98f062e21d0ba8e4!2sKafanchan!5e0!3m2!1sen!2sng!4v1654926199871!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  mainContactDiv.appendChild(mapDiv)

  const socialMediaDiv = document.createElement('div');
  mainContactDiv.appendChild(socialMediaDiv)
  const facebookLink = document.createElement('a');
  facebookLink.href = 'https://www.facebook.com/YourRestaurantPage';
  facebookLink.target = '_blank';
  facebookLink.textContent = 'Follow us on Facebook';

  const facebookIcon = document.createElement('i');
  facebookIcon.classList.add('fa', 'fa-facebook-official');

  facebookLink.appendChild(facebookIcon);
  socialMediaDiv.appendChild(facebookLink);

  contactDiv.appendChild(locationDiv);
  contactDiv.appendChild(phoneDiv);
  contactDiv.appendChild(mapDiv);
  contactDiv.appendChild(socialMediaDiv);

  return mainContactDiv;

}

function initializeNavigation() {
  const nav = document.createElement('nav');
  nav.classList.add('fixed-nav');
  document.body.appendChild(nav);

  const links = [
    { text: 'Home', href: '#home', loader: loadHomePage },
    { text: 'Menu', href: '#menu', loader: loadMenuSection },
    { text: 'Reservation', href: '#reservation', loader: loadReservationSection },
    { text: 'Contact', href: '#contact', loader: loadContactSection },
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
      linkDetail.loader();
      document.querySelector(linkDetail.href).scrollIntoView({
        behavior: 'smooth',
      });
    });
    link.appendChild(anchor);
    navLinks.appendChild(link);
  });

  loadHomePage();
}

document.addEventListener('DOMContentLoaded', initializeNavigation);
