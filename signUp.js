let email = document.getElementById('email');
let pass = document.getElementById('pass');
localStorage.clear();
function signUp() {
    email.value;


    localStorage.setItem('email',toString(email.value));
    console.log(localStorage.getItem('email'));
}