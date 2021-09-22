function runBar() {
    let elem= document.getElementById('runBar');
    let width=0;
    let id = setInterval(run,50);
    let clickSound = new Audio();

    clickSound.src='sounds/click.mp3';

    function run() {
        if (width == 100) {
            clearInterval(id);
            changeAll();
        } else {
            width++;
            elem.style.width=width+'%';
            document.getElementById('widthOfBar').innerHTML=width+'%'
        }
    }

}
runBar();
// changeAll();

function changeAll() {
    let elem = document.getElementById('change');
    elem.innerHTML='<div class="changed">'
                    +'<b style="color:white">❌ CARO GAME ⭕</b>'
                    +'<div><br></div>'
                    +'<div id="play" onclick="goToPlay()">PLAY</div>'
                    +'<br>'
                    +'<div id="instruc" onclick="goToInstruction()">INSTRUCTION</div>'
                    +'<br>'
                    +'<a href="signIn.html" target="_blank"><div id="signIn" class="signIn">SIGN IN</div> </a>'
                    +'</div>';
}

function goToPlay() {
    clickSound.play()
    window.location='cr.html';
}

function goToInstruction() {
    clickSound.play();
    window.location='instruction.html';
}