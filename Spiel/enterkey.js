var checkmode;
document.onkeyup = enter;
function enter(){
    if(window.event.keyCode == 13){
        if(checkmode == '1'){
            check();
        }
        else if(checkmode == '2'){
            window.location.href = 'Schlüsselwörter.html';
        }
        else if(checkmode == '3'){
            window.location.href = 'MenueSeite.html';
        }
        else if(checkmode == '4'){
            window.location.href = 'Dankeseite.html';
        }
        else{
            master();
        }
    }
}