let clickSound = new Audio();
clickSound.src='sounds/click.mp3';


function play(x,y) {
    gameBoard.play(x,y);
}

//Reset game
function reset() {
    if (music) {
        clickSound.play();      
    }
          
    
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

    document.getElementById('conti').style.border='transparent';
    document.getElementById('conti').innerHTML='';
}

//Change color of cell
function changeColorCellInp(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='rgba(255,240,245,0.75)';
}

function changeColorCellOut(x,y) {
    document.getElementById('cell_'+x + ',' +y+'').style.backgroundColor='transparent';
}

//Continue button
function conti() {
    if (music) {
        clickSound.play();      
    }

    let X = document.getElementById('XX');
    // let O = document.getElementById('OO');
    gameBoard = new GameBoard(ROWS, COLS, "caro");
    gameBoard.draw();

    X.style.borderColor='#33CC33 ';

    document.getElementById('win').innerHTML='';
    document.getElementById('X').innerHTML=countX;
    document.getElementById('O').innerHTML=countO;

    document.getElementById('conti').style.border='transparent';
    document.getElementById('conti').innerHTML='';
}

//Win or tie
function win(XO) {
    let show = document.getElementById('win');
    let conti = document.getElementById('conti');
    show.innerHTML='Congratulation '+XO+'!! You win'; 

    conti.innerHTML='Continue 😊';
    conti.style.border= '5px solid lightblue';

}

function tie() {
    let show = document.getElementById('win');
    show.innerHTML='❌ Both of you\'re tie ⭕';
}

let gameBoard; 
reset();
