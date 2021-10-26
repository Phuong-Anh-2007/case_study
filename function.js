let clickSound = new Audio();
let countWin = 0;
let countTotal = 0;
let clickWin = false;
clickSound.src='sounds/click.mp3';


function play(x,y) {
    gameBoard.play(x,y);
}

//Reset game
function reset() {
    if (music) {
        clickSound.play();      
    }
          
    clickWin = false;
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
    let cell  = document.getElementById('cell_'+x + ',' +y+'');
    cell.style.backgroundColor='rgba(255,240,245,0.75)';
    if (clickWin) {
        cell.style.cursor='default'; 
        cell.style.backgroundColor='transparent';
    }
}

function changeColorCellOut(x,y) {
    let cell  = document.getElementById('cell_'+x + ',' +y+'');
    cell.style.backgroundColor='transparent';
    if (clickWin) {
        cell.style.cursor='default'; 
        cell.style.backgroundColor='transparent';
    }
    
}

//Continue button
function conti() {
    if (music) {
        clickSound.play();      
    }

    clickWin = false;
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
    
    clickWin = true;
    let show = document.getElementById('win');
    let conti = document.getElementById('conti');
    show.innerHTML='Congratulation '+XO+'!! You win'; 

    conti.innerHTML='Continue 😊';
    conti.style.border= '10px solid lightblue';
    
    countWin++;
    if (countWin % 2==0) {
        localStorage.setItem('O',countO);
        countTotal++;
    } else {
        localStorage.setItem('X',countX);
        countTotal++;
    }
}

function tie() {
    let show = document.getElementById('win');
    show.innerHTML='❌ Both of you\'re tie ⭕';
}

let gameBoard; 
reset();
checkMusic(true);