import loadHome from "./home";
import loadMenu from "./menu";
import loadReservation from "./reservation";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "The 5th";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = createNavButton("Home", loadHome);
  const menuButton = createNavButton("Menu", loadMenu);
  const reservationButton = createNavButton("Reservation", loadReservation);
  const contactButton = createNavButton("Contact", loadContact);

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(reservationButton);
  nav.appendChild(contactButton);

  return nav;
}

function createNavButton(text, onClickFunction) {
  const button = document.createElement("button");
  button.classList.add("button-nav");
  button.textContent = text;
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) return;
    setActiveButton(button);
    clearContent();
    onClickFunction();
  });
  return button;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializeWebsite;
