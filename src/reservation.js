function loadResevervationPage() {
  const content = document.getElementById('content');
  const reservationDiv = document.createElement('div');
  reservationDiv.textContent = 'please fill out the form below to reserve a seat!';

  
  const reservationForm = document.createElement('form');
  reservationForm.id = 'reservationForm';

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';

  const dateTimeLabel = document.createElement('label');
  dateTimeLabel.textContent = 'Date/Time:';
  const dateTimeInput = document.createElement('input');
  dateTimeInput.type = 'datetime-local';
  dateTimeInput.name = 'dateTime';

  const seatLabel = document.createElement('label');
  seatLabel.textContent = 'Seat:';
  const seatSelect = document.createElement('select');
  seatSelect.name = 'seat';

  const option1 = document.createElement('option');
  option1.value = 'table1';
  option1.textContent = 'Table 1';

  const option2 = document.createElement('option');
  option2.value = 'table2';
  option2.textContent = 'Table 2';

  const option3 = document.createElement('option');
  option3.value = 'table3';
  option3.textContent = 'Table 3';

  seatSelect.appendChild(option1);
  seatSelect.appendChild(option2);
  seatSelect.appendChild(option3)

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Book Now';

  reservationForm.appendChild(nameLabel);
  reservationForm.appendChild(nameInput);
  reservationForm.appendChild(emailLabel);
  reservationForm.appendChild(emailInput);
  reservationForm.appendChild(dateTimeLabel);
  reservationForm.appendChild(dateTimeInput);
  reservationForm.appendChild(seatLabel);
  reservationForm.appendChild(seatSelect);
  reservationForm.appendChild(submitButton);

  reservationDiv.appendChild(reservationForm);

  content.appendChild(reservationDiv);
}

export default loadResevervationPage;
