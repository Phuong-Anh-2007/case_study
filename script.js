function runBar() {
    let elem= document.getElementById('runBar');
    let width=0;
    let id = setInterval(run,50);
    let flag;

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
                    +'</div>';
}

function goToPlay() {
    window.location='cr.html';
}

function goToInstruction() {
    window.location='instruction.html';
}