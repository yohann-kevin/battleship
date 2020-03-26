var readline = require("readline-sync");
var toolbox = {

    writeString: function(txt){
        return readline.question(txt);
    },

    writeInt : function(txt){
        return parseInt(this.writeString(txt));
    },

    /**
     * Permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en paramètre
     * @param {Number} nbLine 
     * @param {Number} nbColumn 
     * @param {*} car 
     */
    initTab : function(nbLine, nbColumn, car = ''){
        var tab = [];
        for(var i=0;i < nbLine;i++){
            var line = [];
            for(var j=0;j < nbColumn; j++){
                line.push(car);
            }
            tab.push(line);
        }
        return tab;
    }
}
module.exports = toolbox;