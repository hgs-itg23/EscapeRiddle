
function check(){
    if(document.getElementById('Lösung').value == Lösung){
        window.location.href= 'RichtigSeite.html';
    }
    else{
        document.getElementById('Lösung').value = 'Falsch';
    }
    
}
function reset(){
        document.getElementById('Lösung').value = '';

    
}