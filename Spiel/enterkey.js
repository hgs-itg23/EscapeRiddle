var checkmode;
document.onkeyup = enter;
function enter(){
    if(window.event.keyCode == 13){
        if(checkmode == '1'){
            check();
        }
        else{
            master();
        }
    }
}