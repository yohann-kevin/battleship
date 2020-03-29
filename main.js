

battleship.init();
battleship.displayGrid();


function play(line,column){
    console.log(line + ' : ' + column)
    var isOver = battleship.playCase(line,column);
    battleship.displayGrid();
    return isOver;
}