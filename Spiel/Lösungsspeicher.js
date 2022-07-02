function solved1(){
    if(localStorage.getItem('solved1') == 'true'){
        var b = localStorage.getItem('letter');
        document.querySelector("#done1").innerHTML = b;
    }
}
function solved2(){
    if(localStorage.getItem('solved2') == 'true'){
        var c = localStorage.getItem('letter2');
        document.querySelector("#done2").innerHTML = c;
    }
}