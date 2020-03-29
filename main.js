

battleship.init();
battleship.displayGrid();


function play(){
    var writeLine = toolbox.writeInt("Jouer en quelle ligne ? : ");
    var writeColumn = toolbox.writeInt("Jouer en quelle colonne ? : ");
    var isOver = battleship.playCase(writeLine,writeColumn);
    battleship.displayGrid();
    return isOver;
}