
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
function master(){
    if(document.querySelector('#MasterLösung').value =='AB'){
        window.location.href = 'MasterRichtigSeite.html';
    }
}
function resetmaster(){
    document.getElementById('MasterLösung').value = '';
}