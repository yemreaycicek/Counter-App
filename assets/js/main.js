const decreaseButton = document.querySelector('.decrease');
const counter = document.querySelector('.counter');
const increaseButton = document.querySelector('.increase');

let initialNumber = 0;

decreaseButton.addEventListener('click', () => {
   initialNumber--;
   counter.innerHTML = `${initialNumber}`;
});

increaseButton.addEventListener('click', () => {
   initialNumber++;
   counter.innerText = initialNumber;
});