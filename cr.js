const EMPTY = 1;
const X = 2;
const O = 3;
const COLS = 10;
const ROWS = 10;
const CELL_SIZE = 55;
let countX = 0;
let countO = 0;
// let arr=[];
// let countWin;
let empty_cell = 0;
let audio = new Audio();
let winSound = new Audio();

audio.src='sounds/pop.mp3';
winSound.src='sounds/win.mp3';

class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.value = EMPTY;
    }

    getHTML() {
        let top = this.x * CELL_SIZE;
        let left = this.y * CELL_SIZE;
        let cellHTML = '<div id = "cell_'+ this.x + ',' + this.y+'" '
                            +'class = "cell_of" '
                            +'onclick = "play(' + this.x + ',' + this.y+')" '
                            +'style="position: absolute;'
                            +'width: '+ CELL_SIZE +'px;'
                            +'height: '+ CELL_SIZE +'px;'
                            +'top: '+ top +'px;'
                            +'left: '+ left +'px;'
                            +'line-height: '+ CELL_SIZE +'px;"'
                            +'onmouseover = "changeColorCellInp('+this.x+','+this.y+')"'
                            +'onmouseout = "changeColorCellOut('+this.x+','+this.y+')"'
                            +'></div>';
        return cellHTML;
    }

    draw() {
        let cellDiv = document.getElementById('cell_'+ this.x + ',' + this.y);
        switch (this.value) {
            case X:
                cellDiv.innerHTML='❌';
                // if (turnMusic) {
                    audio.play();    
                // }
                break;
            case O:
                cellDiv.innerHTML='⭕';
                // if (turnMusic) {
                    audio.play();    
                // }
                break;
            default:
                cellDiv.innerHTML='';
                break;
        }
    }
}


class GameBoard {
    constructor(rows, cols, elemId) {
        this.rows = rows;
        this.cols = cols;
        this.elemId = elemId;
        this.turn = X;
        this.over = false;
        this.cells =[];
    }

    draw() {
        let gameBoardDiv = document.getElementById(this.elemId);
        gameBoardDiv.innerHTML = "";
        for (let i=0; i< this.rows; i++) {
            let row = [];
            this.cells.push(row);
            for (let j=0; j  < this.cols; j++) {
                let cell = new Cell(i,j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHTML();
            }
        }
    };

    play(x,y) {
        let cell = this.cells[x][y]; 
        if (this.over) {
            return;
        }
        
        if (cell.value === EMPTY) {
            cell.value=this.turn;
            cell.draw();
            this.check(x,y);

            if(this.turn === O) {
                this.turn = X;
                    if (this.over) {
                        document.getElementById('OO').style.borderColor='transparent';
                    } else {
                        document.getElementById('XX').style.borderColor='#33CC33';
                        document.getElementById('OO').style.borderColor='transparent';
                        empty_cell++;
                    }
            } else {
                this.turn = O;
                if (this.over) {
                    document.getElementById('XX').style.borderColor='transparent';
                } else {
                    document.getElementById('OO').style.borderColor='#33CC33';
                    document.getElementById('XX').style.borderColor='transparent';
                    empty_cell++;
                }
            }
        } else {
            alert('Cell is not empty 😥');
        }        
        
        if (empty_cell == 100) {
            tie();
        }
    }

    check(x,y) {
        let cell = this.cells[x][y];

        //Ngang
        let count = 1;
        let i =1;
        while ((y + i < this.cols) && this.cells[x][y + i].value === cell.value) {
            count++;
            i++;
        }
         i = 1;
        while ((y - i >= 0) && this.cells[x][y - i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);


        //Dọc
        count = 1;
        i =1;
        
        
        while ((x + i < this.rows) && this.cells[x + i][y].value === cell.value) { 
            count++;
            i++; 
            // arr.push('cell_'+x + ',' +y+'');
            // arr.push('cell_'+x-- + ',' +y--+'');
        }
        i =1;
        
        while ((x - i >= 0) && this.cells[x - i][y].value === cell.value) { 
            count++;
            i++;
            // arr.push('cell_'+x + ',' +y+'');
            // arr.push('cell_'+x-- + ',' +y--+'');
        }
        this.endGame(count);


        //Chéo trái
        count = 1;
         i =1;
        let j = 1;
        while ((x + i < this.rows) && (y + j < this.cols) && this.cells[x + i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
         i =1;
         j = 1;
        while ((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);


        //Chéo phải
        count = 1;
        i =1;
        j = 1;
        while ((x - i >= 0) && (y + j < this.cols) && this.cells[x - i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        i =1;
        j = 1;
        while ((x + i < this.rows) && (y - j >= 0) && this.cells[x + i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    }

    endGame(count) {
        if (count >= 5) {
            this.over = true;
            if (this.turn == X) {
                countX++;
                // countWin=countX;
                win('❌');
                // if (turnMusic) {
                    winSound.play();    
                // }
                
            } else {
                countO++;
                // countWin=countO;
                win('⭕');
                // if (turnMusic) {
                    winSound.play();    
                // }
            }
        } else if (empty_cell >= 100) {
            tie();
        }  
    }
}

