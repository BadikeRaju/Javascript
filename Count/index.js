const incrementbtn =document.getElementById('incrementButton');
const decrementbtn =document.getElementById('decrementButton');
const resetbtn = document.getElementById('resetButton');
const countLabel = document.getElementById('countLabel');


let count = 0;
incrementbtn.addEventListener('click', () => {
    count++;
    countLabel.innerHTML = count;
}   );
decrementbtn.addEventListener('click', () => {
    count--;
    countLabel.innerHTML = count;
}   
);  
resetbtn.addEventListener('click', () => {
    count = 0;
    countLabel.innerHTML = count;
}   
);          // 3. Add event listeners to the buttons            