const myInput= document.getElementById('myInput');
const myBtn= document.getElementById('myBtn');
const myResult= document.getElementById('myResult');

myBtn.addEventListener('click', () => {
     switch (true) {
          case myInput.value >=90:
               myResult.innerHTML= 'A';
               break;
            case myInput.value >=80:
                myResult.innerHTML= 'B';
                break;
            case myInput.value >=70:
                myResult.innerHTML= 'C';
                break;
            case myInput.value >=60:
                myResult.innerHTML= 'D';
                break;
            default:

         
     }
});