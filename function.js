function play(x,y) {
    gameBoard.play(x,y);
}

function reset() {
    countX = 0;
    countO = 0;
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();

    document.getElementById('X').innerHTML=countX;
    document.getElementById('O').innerHTML=countO;
    document.getElementById('XX').style.borderColor='blue ';
    document.getElementById('OO').style.borderColor='transparent';
    document.getElementById('reset').innerHTML='';
    document.getElementById('conti').innerHTML='';
}

function changeColorCellInp(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='rgba(255,240,245,0.75)';
}

function changeColorCellOut(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='transparent';
}

function conti(id,variable) {
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();
    
    document.getElementById('XX').style.borderColor='blue ';
    document.getElementById('OO').style.borderColor='transparent';
    document.getElementById(id).innerHTML=variable;
    document.getElementById('reset').innerHTML='';
    document.getElementById('conti').innerHTML='';
}

function inpReset(id) {
    document.getElementById(id).style.color='#33CC33';
}

function outReset(id) {
    document.getElementById(id).style.color='white';
}

function win(XO) {
    let show = document.getElementById('caro');
    show.innerHTML='Congarulation '+XO+'!! You win';
    show.style.color='white';

    
    document.getElementById('reset').innerHTML='Reset 😥';
    document.getElementById('conti').innerHTML='Continue 😊';
    document.getElementById('XX').innerHTML='';
    document.getElementById('OO').innerHTML='';
}

let gameBoard; 
reset();