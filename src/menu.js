function loadMenuPage() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuDiv = document.createElement('div');
  menuDiv.className = 'menu-page';

  const menuItems = [
    {
      name: 'beans and plantain',
      description: 'beans porrage, with plantain',
      price: '$12.99',
      imageSrc: 'src/assets/beans.jpg.jpeg',
    },
    {
      name: 'Muschel spaghetti',
      description: 'Classic spaghetti with tomato, muschel, and basil',
      price: '$10.99',
      imageSrc: 'src/assets/Muschel-Spaghetti.jpeg',
    },
    {
      name: ' moi moi',
      description: 'Freshly cooked grinded beans with egg',
      price: '$14.99',
      imageSrc: 'Nigerian_Moi-Moi.png',
    },
  ];

  menuItems.forEach((item) => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'menu-item';

    const itemImage = document.createElement('img');
    itemImage.src = item.imageSrc;
    itemImage.alt = item.name;

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;

    menuItemDiv.appendChild(itemImage);
    menuItemDiv.appendChild(itemName);
    menuItemDiv.appendChild(itemDescription);
    menuItemDiv.appendChild(itemPrice);

    menuDiv.appendChild(menuItemDiv);
  });

  content.appendChild(menuDiv);
}

export default loadMenuPage;
