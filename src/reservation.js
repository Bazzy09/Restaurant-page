function loadReservationPage() {
  const content = document.getElementById('content');

  const reservationDiv = document.createElement('div');
  reservationDiv.textContent = 'Please fill out the form below to make a restaurant reservation.';

  const reservationForm = document.createElement('form');
  reservationForm.id = 'reservationForm';

  const formElements = [
    { label: 'Name:', type: 'text', name: 'name' },
    { label: 'Email:', type: 'email', name: 'email' },
    { label: 'Phone:', type: 'tel', name: 'phone' },
    { label: 'Number of Guests:', type: 'number', name: 'guests' }, 
    { label: 'Date/Time:', type: 'datetime-local', name: 'dateTime' },
  ];

  formElements.forEach((element) => {
    const label = document.createElement('label');
    label.textContent = element.label;

    const input = document.createElement('input');
    input.type = element.type;
    input.name = element.name;

    reservationForm.appendChild(label);
    reservationForm.appendChild(input);
  });

  const specialRequestsLabel = document.createElement('label');
  specialRequestsLabel.textContent = 'Special Requests:';
  const specialRequestsTextarea = document.createElement('textarea');
  specialRequestsTextarea.name = 'specialRequests';

  reservationForm.appendChild(specialRequestsLabel);
  reservationForm.appendChild(specialRequestsTextarea);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Make Reservation';

  reservationForm.appendChild(submitButton);

  reservationDiv.appendChild(reservationForm);

  content.appendChild(reservationDiv);
}

export default loadReservationPage;
