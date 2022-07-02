function storage(){
    localStorage.setItem('letter', keyletter);
}
function displaystart(){

}
function keyletterinput(){
    var b = localStorage.getItem('letter');
    document.getElementById('keyletter').innerHTML = b;
    
}