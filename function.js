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
    let X = document.getElementById('XX');
    let O = document.getElementById('OO');
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();

    X.style.borderColor='#33CC33 ';
    X.innerHTML='❌ <hr><p id="X"></p>';
    O.style.borderColor='transparent';
    O.innerHTML='⭕ <hr><p id="O"></p>';
    document.getElementById('X').innerHTML=countX;
    document.getElementById('O').innerHTML=countO;

    document.getElementById(id).innerHTML=variable;
    document.getElementById('reset').innerHTML='';
    document.getElementById('conti').innerHTML='';
}

function inpReset(id1,id2) {
    document.getElementById(id1).style.color='white';
    document.getElementById(id2).style.backgroundColor='black';
}

function outReset(id1,id2) {
    document.getElementById(id1).style.color='black';
    document.getElementById(id2).style.backgroundColor='white';
}

function win(XO) {
    let show = document.getElementById('caro');
    let rs = document.getElementById('btReset');
    let ct = document.getElementById('conti');

    show.innerHTML='Congarulation '+XO+'!! You win';
    show.style.color='yellow';
    show.style.fontSize='60px';
    show.style.marginTop='150px';
    show.style.marginLeft='-50px';
    show.style.fontWeight='bold';

    
    rs.innerHTML='Reset 😥';
    // rs.style.backgroundColor='black';
    // rs.style.marginTop='250px';
    // rs.style.textAlign='center';
    // rs.style.width='100%';
    // rs.style.color='white';

    ct.innerHTML='Continue 😊';
    // ct.style.marginTop='250px'; 

    document.getElementById('XX').innerHTML='';
    document.getElementById('XX').style.backgroundColor='transparent';
    document.getElementById('OO').innerHTML='';
    document.getElementById('OO').style.backgroundColor='transparent';
    

}

let gameBoard; 
// reset();
win('❌');