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
function solved3(){
    if(localStorage.getItem('solved3') == 'true'){
        var c = localStorage.getItem('letter3');
        document.querySelector("#done3").innerHTML = c;
    }
}
function solved4(){
    if(localStorage.getItem('solved4') == 'true'){
        var c = localStorage.getItem('letter4');
        document.querySelector("#done4").innerHTML = c;
    }
}
function solved5(){
    if(localStorage.getItem('solved5') == 'true'){
        var c = localStorage.getItem('letter5');
        document.querySelector("#done5").innerHTML = c;
    }
}