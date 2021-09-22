let username = document.getElementById('nameDk');
let pass = document.getElementById('pass');

function signUp() {
    localStorage.setItem('username',username.value);
    localStorage.setItem('pass',pass.value);
}