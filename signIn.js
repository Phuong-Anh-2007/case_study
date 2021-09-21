let email = document.getElementById('email');
let pass = document.getElementById('pass');
let flag = false;

function signIn() {
    console.log(email.value);
    console.log(pass.value);

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


    
}
