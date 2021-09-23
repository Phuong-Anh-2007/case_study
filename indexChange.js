function changeAll() {
    // console.log(sound.play());

    let elem = document.getElementById('change');
    elem.innerHTML='<div class="changed">'
                        +'<b style="color:white">❌ CARO GAME ⭕</b>'
                        +'<div><br></div>'
                        +'<div id="play" onclick="goToPlay()">PLAY</div>'
                        +'<br>'
                        +'<div id="instruc" onclick="goToInstruction()">INSTRUCTION</div>'
                        +'<br>'
                        +'<a href="signIn.html" target="_blank">'+'<div class="signIn" onclick="goToSignIn">SIGN IN</div>'+'</a>'
                    +'</div>';
}

function goToPlay() {
    sound.play();
    // console.log(true);
    window.location='cr.html';
}

function goToInstruction() {
    sound.play();
    window.location='instruction.html';
}

function goToSignIn() {
    sound.play();
}

let sound = new Audio();
sound.src='sounds/click.mp3';

changeAll();