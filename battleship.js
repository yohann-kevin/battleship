var toolbox = require("./toolbox.js");
var battleship = {
    nbColumn : 5,
    nbLine : 5,
    grid : [],

    nbCaseJ1 : 0,
    nbCaseJ2 : 0,

    init : function() {
        this.grid = toolbox.initTab(this.nbLine,this.nbColumn);
        this.positionBoat(3,1);
        this.nbCaseJ1 += 3;
        this.positionBoat(2,1);
        this.nbCaseJ1 += 2;
        this.positionBoat(3,2);
        this.nbCaseJ2 += 3;
        this.positionBoat(2,2);
        this.nbCaseJ2 += 2;
    },

    positionBoat : function(size,players) {
        
    },

    displayGrid : function() {
        for(var i = 0; i < this.nbLine; i++) {
            var txt = "";
            for(var j = 0; j < this.nbColumn; j++) {
                txt += "| ";
                if(this.grid[i][j] === 0) {
                    txt += "_";
                } else if(this.grid[i][j] === 1) {
                    txt += "x";
                } else if(this.grid[i][j] === 2) {
                    txt += "o";
                }
                txt += " |";  
            }
            console.log(txt);    
        }
    },

    playCase : function(line,column) {

    }
}
module.exports = battleship;