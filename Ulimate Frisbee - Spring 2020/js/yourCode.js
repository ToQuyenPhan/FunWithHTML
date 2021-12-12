function Show(){
    if(document.getElementById('myform').style.display == 'none'){
        document.getElementById('mytext').innerHTML = 'HIDE REGISTER FORM';
        document.getElementById('myform').style.display = 'block';
    }else{
        document.getElementById('mytext').innerHTML = 'SHOW REGISTER FORM';
        document.getElementById('myform').style.display = 'none';
    }
}
function checkForm(){
    var list = document.getElementsByTagName('input');
    var name = list[0].value;
    var email = list[1].value;
    if(name == ''){
        alert('name must not be empty');
    }
    else{
        if(email == ''){
            alert('email must not be empty');
        }
    }
}