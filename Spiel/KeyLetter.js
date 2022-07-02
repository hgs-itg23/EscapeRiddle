function keyletterinput(){
    if(localStorage.getItem('solved1') == 'true'){
        var b = localStorage.getItem('letter');
        document.getElementById('keyletter').innerHTML = b;
    }
    if(localStorage.getItem('solved2') == 'true'){
        var b = localStorage.getItem('letter2');
        document.getElementById('keyletter').innerHTML = b;
    }
    if(localStorage.getItem('solved3') == 'true'){
        var b = localStorage.getItem('letter3');
        document.getElementById('keyletter').innerHTML = b;
    }
    if(localStorage.getItem('solved4') == 'true'){
        var b = localStorage.getItem('letter4');
        document.getElementById('keyletter').innerHTML = b;
    }
    if(localStorage.getItem('solved5') == 'true'){
        var b = localStorage.getItem('letter5');
        document.getElementById('keyletter').innerHTML = b;
    }
}