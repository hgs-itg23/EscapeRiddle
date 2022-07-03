function check(){
    if(document.querySelector('#Lösung').value == Lösung || document.querySelector('#Lösung').value == Lösung2){
        window.location.href= 'RichtigSeite.html';
    }
    else{
        document.querySelector('#Lösung').value = 'Falsch';
    }
}
function reset(){
        document.querySelector('#Lösung').value = '';
}
function master(){
    if(document.querySelector('#MasterLösung').value =='Kairo'){
        window.location.href = 'MasterRichtigSeite.html';
    }
    else{
        document.querySelector('#MasterLösung').value = 'Falsch';
    }
}
function resetmaster(){
    document.querySelector('#MasterLösung').value = '';
}