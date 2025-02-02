const ageInput=document.getElementById('ageInput');
const verifyButton=document.getElementById('verifyButton');
const verificationResult=document.getElementById('verificationResult');

verifyButton.addEventListener('click',()=>{
    let age=parseInt(ageInput.value);
    if(age>=18){
        verificationResult.innerText="You are eligible to vote";
    }
    else{
        verificationResult.innerText="You are not eligible to vote";
    }
});