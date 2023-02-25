const destroyButton = document.querySelector('[data-destroy]');
const createButton = document.querySelector('[data-create]');
const numberInput = document.querySelector('input');
const boxesDiv = document.querySelector('#boxes');

let sideLength = 30;

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', destroyBoxes);

function onCreateButtonClick() {
  const boxesQuantity = +numberInput.value;
  createBoxes(boxesQuantity);
}

function createBoxes(number) {
  const divElements = new Array(number).fill(null).map(() => createDiv());
  boxesDiv.append(...divElements);
}

function createDiv() {
  const divElement = document.createElement('div');
  divElement.style.height = `${sideLength}px`;
  divElement.style.width = `${sideLength}px`;
  divElement.style.backgroundColor = getRandomHexColor();
  sideLength += 10;
  return divElement;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
  sideLength = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
