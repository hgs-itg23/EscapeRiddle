var id;
function keyletterinput(){
    switch (id) {
        case "solved1":
        
            var b = localStorage.getItem('letter');
            document.querySelector('#keyletter').innerHTML = b;
        
        break;
        case "solved2":
        
            var c = localStorage.getItem('letter2');
            document.getElementById('keyletter').innerHTML = c;
        
        break;
        case "solved3":
        
            var d = localStorage.getItem('letter3');
            document.getElementById('keyletter').innerHTML = d;
        
        break;
        case "solved4":
        
            var e = localStorage.getItem('letter4');
            document.getElementById('keyletter').innerHTML = e;
        
        break;
        case "solved5":
        
            var f = localStorage.getItem('letter5');
            document.getElementById('keyletter').innerHTML = f;
        
        break;
    }
}
