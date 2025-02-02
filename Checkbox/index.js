const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const YoutubeBtn = document.getElementById('YoutubeBtn');
const MyJioBtn = document.getElementById('MyJioBtn');
const myBtn = document.getElementById('myBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

myBtn.onclick =function(){
    if (myCheckbox.checked) {
        subResult.textContent = 'You are Subscribed';
    }
    else {
        subResult.innerText = 'Please Subscribe';
    }
    if (visaBtn.checked) {
        paymentResult.innerText = 'You have selected Visa';
    }
    else if (YoutubeBtn.checked) {
        paymentResult.innerText = 'You have selected Youtube';
    }
    else if (MyJioBtn.checked) {
        paymentResult.innerText = 'You have selected MyJio';
    }
    else {
        paymentResult.innerText = 'Please select a payment method';
    }
}