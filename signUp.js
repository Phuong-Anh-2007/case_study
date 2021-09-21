let email = document.getElementById('email');
let pass = document.getElementById('pass');

function signUp() {
    localStorage.setItem('email',email.value);
    localStorage.setItem('pass',pass.value);
}