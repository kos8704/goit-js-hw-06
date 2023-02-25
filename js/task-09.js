function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;

button.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.background = color;
};

setInterval(onBtnClick, 100);