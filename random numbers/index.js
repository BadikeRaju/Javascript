const rollButton = document.getElementById('rollButton');
const diceLabel = document.getElementById('diceLabel');
const max = 200;
const min = 1;

rollButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    diceLabel.innerText = randomNumber;
    });