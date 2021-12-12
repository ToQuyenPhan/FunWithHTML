function zoomout(image){
    var src = image.src;
    document.getElementById('frame').style.backgroundImage = 'url('+src+')';
}
function warning(){
    var list = document.getElementsByTagName('input');
    var content = document.getElementById('content').value;
    var name = list[0].value;
    var email = list[1].value;
    if(name == '' || email == '' || content == ''){
        alert('please fill out all fields');
    }else{
        if(confirm('Are you sure your information?')){
            alert('Message sent');
        }
    }
}