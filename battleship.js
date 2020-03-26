var toolbox = require("./toolbox.js");
var battleship = {
    nbColumn : 5,
    nbLine : 5,
    grid : [],

    nbCaseJ1 : 0,
    nbCaseJ2 : 0,

    init : function(){
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

    positionBoat : function(size,player){
        var boat = {};
        var positionFinish = false;
        while(!positionFinish){
            var xRandom = Math.floor(Math.random() * (this.nbLine-(size-1)));
            var yRandom = Math.floor(Math.random() * (this.nbColumn-(size-1)));
            var isHorizontal = Math.floor(Math.random() * 2);
    
            var isCaseEmpty = true;
            for(var i =1 ; i <= size && isCaseEmpty; i++){
                boat["case"+i] = this.getCaseCreateBoat(xRandom, yRandom, isHorizontal, i);
                isCaseEmpty = this.verifyCaseEmpty(boat["case"+i]);
            }
            if(isCaseEmpty) positionFinish = true;
        }
        this.registerGrid(boat,player);
    },

    getCaseCreateBoat : function(xRandom,yRandom,isHorizontal,numCase){
        var box = {};
        if(isHorizontal){
            box.x = xRandom + (numCase-1);
            box.y = yRandom;
        } else {
            box.x = xRandom;
            box.y = yRandom + (numCase-1);
        }
        return box;
    },

    verifyCaseEmpty : function(caseBoat){
        if(this.grid[caseBoat.x][caseBoat.y] === 0) return true;
        return false;
    },

    registerGrid : function (boat,player){
        for(var box in boat){
            this.grid[boat[box].x][boat[box].y] = player;
        }
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