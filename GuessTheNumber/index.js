const myInput= document.getElementById('myInput');
const  myBtn= document.getElementById('myBtn');
const myResult= document.getElementById('myResult');
const res=document.getElementById('res');

const minNum= 0;
const maxNum= 100;
const answer= Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts= 0;
let maxAttempts= 100;
myBtn.addEventListener('click', () => {
        res.innerHTML= ''+answer;
        attempts++;
        if (attempts > maxAttempts) {
            myResult.innerHTML= 'You have reached the maximum number of attempts';
            return;
        }
        if (myInput.value == answer) {
            myResult.innerHTML= 'Congratulations! You guessed the number';
        } else if (myInput.value > answer) {
            myResult.innerHTML= 'Try a lower number';
        } else {
            myResult.innerHTML= 'Try a higher number';
        }

    });

