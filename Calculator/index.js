const display = document.getElementById('display'); 


function appendOperator(input){
    display.value += input;
}
function appendNumber(input){
    display.value += input;
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(e){
        display.value = 'Error';
    }
}

function clearDisplay(){
    display.value = '';
}