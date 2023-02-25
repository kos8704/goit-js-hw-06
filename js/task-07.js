const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

input.addEventListener('input', (event) => {
    spanText.style.fontSize = event.target.value +'px'
});

