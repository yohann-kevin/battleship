var battleship = require("./battleship.js");
var toolbox = require("./toolbox.js");

battleship.init();
battleship.displayGrid();
while(true){
    if(play()) return;//J1
    if(play()) return;//J2
}

function play(){
    var writeLine = toolbox.writeInt("Jouer en quelle ligne ? : ");
    var writeColumn = toolbox.writeInt("Jouer en quelle colonne ? : ");
    var isOver = battleship.playCase(writeLine,writeColumn);
    battleship.displayGrid();
    return isOver;
}