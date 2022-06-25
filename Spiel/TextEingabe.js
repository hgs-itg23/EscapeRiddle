
function check(){
    if(document.getElementById('Lösung').value == Lösung){
        window.location.href= 'RichtigSeite.html';
    }
    else{
        document.getElementById('Lösung').value = 'Falsch';
    }
    
}
document.onkeyup = enter;
function enter(){
    
    if(window.event.keyCode == 13){
        check();
        
    }
}
function clear(){
    document.getElementById('Lösung').value = '';
}