const decrement = document.querySelector(`[data-action="decrement"]`);
decrement.style.fontSize = "40px";
const increment = document.querySelector(`[data-action="increment"]`);
increment.style.fontSize = "40px";
const elValue = document.querySelector('#value');
elValue.style.fontSize = "60px";

let currentValue = 0;

decrement.addEventListener("click", buttonDecrement);
increment.addEventListener("click", buttonIncrement);

function buttonDecrement() {
   console.log(currentValue -=1);
   elValue.textContent = currentValue;
}

function buttonIncrement() {
    console.log(currentValue +=1);
    elValue.textContent = currentValue;
}

