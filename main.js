var battleship = require("./battleship.js");
var toolbox = require("./toolbox.js");

battleship.init();
battleship.displayGrid();
while(true) {
    if(play()) return;//j1
    if(play()) return;//j2 
}

function play() {
    var writeLine = toolbox.writeInt("jouer en quelle ligne ?");
    var writeColumn = toolbox.writeInt("jouer en quelle colonne ?");
    var isOver = battleship.playCase(writeLine,writeColumn);
    battleship.displayGrid();
    return isOver;
}