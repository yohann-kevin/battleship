var iaBattleship = {
    getCase : function() {
        var casePossibility = this.getAllCasePossibility(); 
        console.log(casePossibility);
        // var randomCase = Math.floor(Math.random() * casePossibility.length);
        // return casePossibility[randomCase];
        var box = this.getBestCase(casePossibility);
        return box;
    },

    getAllCasePossibility : function() {
        var caseEmpty = [];
        for(var i = 0; i < battleship.nbLine;i++) {
            for(var j = 0; j < battleship.nbColumn;j++) {
                if(battleship.grid[i][j] === 0 || battleship.grid[i][j] === 1) {
                    var box = {
                        line : i,
                        column : j,
                        weight : this.getCaseWeight(i,j)
                    }
                    caseEmpty.push(box);
                }
            }
        }
        return caseEmpty;
    },

    getCaseWeight : function(line,column) {
        var caseWeight = 1;
        if((column+1 < battleship.nbColumn) && battleship.grid[line][column+1] === 4) caseWeight++;
        if((column-1 >= 0) && battleship.grid[line][column-1] === 4) caseWeight++;
        if((line+1 < battleship.nbLine) && battleship.grid[line+1][column] === 4) caseWeight++;
        if((line-1 >= 0) && battleship.grid[line-1][column] === 4) caseWeight++;
        return caseWeight;
    },

    getBestCase : function(box) {
        var bestCase = 0;
        var bestBox = [0];
        for(var i = 1; i < box.length; i++) {
            if(box[i].weight > box[bestCase].weight) {
                bestCase = i;
                bestBox = new Array();
                bestBox.push(i);
            } else if(box[i].weight === box[bestCase].weight) {
                bestBox.push(i);
            }
        }
        var randomCase = Math.floor(Math.random() * bestBox.length);
        return box[bestBox[randomCase]];
    }
}