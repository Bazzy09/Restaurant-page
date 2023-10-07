function loadContactPage() {
  const content = document.getElementById('content');

  const contactDiv = document.createElement('div');
  contactDiv.textContent = 'Contact us for reservations!';
  
  const locationDiv = document.createElement('div');
  locationDiv.textContent = 'Charles Eluyera Street, Mahuta, Kaduna, Nigeria.';

  const phoneDiv = document.createElement('div');
  phoneDiv.textContent = 'Phone: +2347084422406';

  const mapDiv = document.createElement('div');
  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.376885770578!2d8.28648005!3d9.5871465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105245726d0177cf%3A0x98f062e21d0ba8e4!2sKafanchan!5e0!3m2!1sen!2sng!4v1654926199871!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  const socialMediaDiv = document.createElement('div');
  
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

  content.appendChild(contactDiv);
}

export default loadContactPage;
