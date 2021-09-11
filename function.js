function play(x,y) {
    gameBoard.play(x,y);
}

function reset() {
    let X = document.getElementById('XX');
    let O = document.getElementById('OO');
    countX = 0;
    countO = 0;
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();

    X.style.borderColor='#33CC33 ';
    X.innerHTML='❌ <hr><p id="X"></p>';
    O.style.borderColor='transparent';
    O.innerHTML='⭕ <hr><p id="O"></p>';
    document.getElementById('X').innerHTML=countX;
    document.getElementById('O').innerHTML=countO;
    document.getElementById('win').innerHTML='';

    // document.getElementById('reset').innerHTML='';
    // document.getElementById('conti').innerHTML='';
}


function changeColorCellInp(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='rgba(255,240,245,0.75)';
}

function changeColorCellOut(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='transparent';
}


function conti(id,variable) {
    let X = document.getElementById('XX');
    let O = document.getElementById('OO');
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();

    X.style.borderColor='#33CC33 ';
    X.style.backgroundColor='rgba(255, 250, 250,0.75)';
    X.innerHTML='❌ <hr><p id="X"></p>';
    O.style.borderColor='transparent';
    O.style.backgroundColor='rgba(255, 250, 250,0.75)';
    O.innerHTML='⭕ <hr><p id="O"></p>';
    document.getElementById('X').innerHTML=countX;
    document.getElementById('O').innerHTML=countO;

    document.getElementById(id).innerHTML=variable;
    document.getElementById('reset').innerHTML='';
    document.getElementById('conti').innerHTML='';
}

function inpReset(id1,id2) {
    let bar = document.getElementById(id2);
    // let width = 0;
    // let id=setInterval(startRunning,0.01);
    //     function startRunning() {
    //         if (width == 255) {
    //             clearInterval(id);
    //         } else {
    //             width ++;
    //             bar.style.width = width +'px';
    //         }
    //     }
    bar.style.animation= 'inp 1s ';
    document.getElementById(id1).style.color='white';
}

function outReset(id1,id2) {
    let bar = document.getElementById(id2);
    // let width = 255;
    // let id = setInterval(startRunning,0.01);
    //     function startRunning() {
    //         if (width == 0) {
    //             clearInterval(id);
    //         } else {
    //             width --;
    //             bar.style.width = width +'px';
    //         }
    //     }
    bar.style.animation= 'out 1s ';
    document.getElementById(id1).style.color='black';
    // document.documentElement.style.setProperty('--now',width);
}

function win(XO) {
    let show = document.getElementById('win');
    let rs = document.getElementById('btReset');
    let ct = document.getElementById('conti');

    show.innerHTML='Congratulation '+XO+'!! You win';
    // show.style.color='yellow';
    // show.style.fontSize='60px';
    // // show.style.marginTop='150px';
    // // show.style.marginLeft='-50px';
    // show.style.fontWeight='bold';

    
    // rs.innerHTML='Reset 😥';
    // ct.innerHTML='Continue 😊';

    // document.getElementById('XX').innerHTML='';
    // document.getElementById('XX').style.backgroundColor='transparent';
    // document.getElementById('OO').innerHTML='';
    // document.getElementById('OO').style.backgroundColor='transparent';
    

}

let gameBoard; 
reset();
// win('❌');