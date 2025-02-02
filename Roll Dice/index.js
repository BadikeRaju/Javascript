function rollDice() {
    const diceNumber = parseInt(document.getElementById('diceNumber').value) || 1; // Default to 1 if invalid
    if (diceNumber < 1) {
        alert("Please enter a valid number of dice (minimum 1).");
        return;
    }

    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for (let i = 0; i < diceNumber; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Images/dice-${value}.svg" alt="Dice-${value}" >`);
    }
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
