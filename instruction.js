let sound = new Audio();
sound.src='sounds/click.mp3';

function goToPlay() {
    sound.play();
    window.location='cr.html';
}

function goToSignIn() {
    sound.play();
    window.location='signIn.html';
}


