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
    document.getElementById('XX').style.borderColor='#33CC33 ';
    document.getElementById('OO').style.borderColor='transparent';
}

function inp(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='lightblue';
}

function out(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='transparent';
}

function conti() {
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();
    document.getElementById('XX').style.borderColor='#33CC33 ';
    document.getElementById('OO').style.borderColor='transparent';
}

function inpReset(id) {
    document.getElementById(id).style.color='red';
}

function outReset(id) {
    document.getElementById(id).style.color='white';
}


let gameBoard; 
reset();