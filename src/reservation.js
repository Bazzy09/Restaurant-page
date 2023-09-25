function loadResevervationPage() {
  const content = document.getElementById('content');
  const reservationDiv = document.createElement('div');
  reservationDiv.textContent = 'Check out our delicious menu!';
  content.appendChild(reservationDiv);
}

export default loadResevervationPage;
