sum(displayPage, 5, 5);


function sum(callback,x,y){
    let result = x + y;
    callback(result);
}


function displayPage(result){
    document.getElementById('h1').textContent    = result;
}