var e = 'doch';
function checkSol(){
    document.querySelector('#Lösung').value = e;
}
function windowswap(){
    var d = document.querySelector('.done1');
    var html = d.innerHTML;
    if(d == 'Fertig'){
        e = Lösung;
    }
    else{
        e = 'ne';
    }
    window.location.href = 'Rätsel1.html';
}