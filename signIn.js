let email = document.getElementById('email');
let pass = document.getElementById('pass');
let flag = false;

function signIn() {
    flag = localStorage.getItem('email') == email.value && localStorage.getItem('pass') == pass.value;
    
    if (flag) {
        window.location='me.html';
    } else {
        alert('Your email or password was wtrong! 😥');
    } 


}
