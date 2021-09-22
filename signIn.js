let username = document.getElementById('nameDn');
let pass = document.getElementById('pass');
let flag = false;

function signIn() {
    flag = localStorage.getItem('username') === username.value;
    
    // console.log(localStorage.getItem('username') == username.value);
    // console.log(typeOf(localStorage.getItem('username')));
    // console.log(typeOf(username.value));

    if (flag) {
        window.location='me.html';
    } else {
        alert('Your email or password was wtrong! 😥');
    } 
    

}
