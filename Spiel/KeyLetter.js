function keyletterinput(){
    if(localStorage.getItem('solved1') == 'true'){
        var b = localStorage.getItem('letter');
        document.getElementById('keyletter').innerHTML = b;
    }
    if(localStorage.getItem('solved2') == 'true'){
        var b = localStorage.getItem('letter2');
        document.getElementById('keyletter').innerHTML = b;
    }
}