const passwordIn=document.getElementById('password');
const generate=document.getElementById('generate');
const result=document.getElementById('result');

generate.addEventListener('click',()=>{
    const length=parseInt(passwordIn.value);
    if (isNaN(length) || length <= 0) {
        resultDisplay.textContent = "Invalid length. Please enter a positive number.";
        return; 
    }
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password="";
    for(let i=0;i<length;i++){
        password+=charset.charAt(Math.floor(Math.random()*charset.length));
    }
    result.textContent=password
});    