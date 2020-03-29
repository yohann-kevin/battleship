var iaBattleship = {
    getCase : function() {
        var casePossibility = this.getCasePossibility(); 
        var randomCase = Math.floor(Math.random() * casePossibility.length);
        return casePossibility[randomCase];
    },

    getCasePossibility : function() {
        var caseEmpty = [];
        for(var i = 0; i < battleship.nbLine;i++) {
            for(var j = 0; j < battleship.nbColumn;j++) {
                if(battleship.grid[i][j] === 0 || battleship.grid[i][j] === 1) {
                    var box = {
                        line : i,
                        column : j,
                    }
                    caseEmpty.push(box);
                }
            }
        }
        return caseEmpty;
    }
}