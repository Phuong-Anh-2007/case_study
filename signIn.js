let email = document.getElementById('email');
let pass = document.getElementById('pass');
let flag = false;

function signIn() {
    email.value;
    pass.value;

    for (let i=0; i<localStorage.length; i++) {
        if (localStorage[i] === email) {
            flag = true;
            break;
        }
    }

    if (flag) {
        console.log('Yes');
    } else {
        alert('This sign in information isn\'t signed up!! 😥');
    } 

    localStorage.setItem('email',toString(email.value));
    console.log(localStorage.getItem('email'));
}
