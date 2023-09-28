function loadContactPage() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
    contactDiv.textContent = 'Contact us for reservations!';
    content.appendChild(contactDiv);
  }

export default loadContactPage;
