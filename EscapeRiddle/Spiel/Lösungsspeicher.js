var statusSol1;
var statusSol2;
var statusSol3;
var statusSol4;
var statusSol5;
var b
var c
var d
var e
var f
function solved1(){
    if(localStorage.getItem('solved1') == 'true'){
        b = localStorage.getItem('letter');
        document.querySelector("#done1").innerHTML = b;
        localStorage.setItem('statusSol1','1');
    }
}
function solved2(){
    if(localStorage.getItem('solved2') == 'true'){
        c = localStorage.getItem('letter2');
        document.querySelector("#done2").innerHTML = c;
        localStorage.setItem('statusSol2','1');
    }
}
function solved3(){
    if(localStorage.getItem('solved3') == 'true'){
        d = localStorage.getItem('letter3');
        document.querySelector("#done3").innerHTML = d;
       localStorage.setItem('statusSol3','1');
    }
}
function solved4(){
    if(localStorage.getItem('solved4') == 'true'){
        e = localStorage.getItem('letter4');
        document.querySelector("#done4").innerHTML = e;
        localStorage.setItem('statusSol4','1');
    }
}
function solved5(){
    if(localStorage.getItem('solved5') == 'true'){
        f = localStorage.getItem('letter5');
        document.querySelector("#done5").innerHTML = f;
        localStorage.setItem('statusSol5','1');
    }
}