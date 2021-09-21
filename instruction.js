let clickSound = new Audio();
clickSound.src='sounds/click.mp3';

function goToPlay() {
    clickSound.play();
    window.location='cr.html';
}