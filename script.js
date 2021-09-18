let flag;

function runBar() {
    let elem= document.getElementById('runBar');
    let width=0;
    let id = setInterval(run,50);
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

function changeAll() {
    let elem = document.getElementById('change');
    elem.innerHTML='❌ CARO GAME ⭕'
                    +'<div id="play">Play</div>'
                    +'<div id="intruc">Intruction</div>';
}