var readline = require("readline-sync");
var toolbox = {

    writeString: function(txt) {
        return readline.question(txt);
    },

    writeInt : function(txt) {
        return parseInt(this.writeString(txt));
    },
    
    /**
     * permet d'initialiser un tab en fonction des ligne et des colonnes
     * @param {number} nbLine 
     * @param {number} nbColumn
     * @param {*} char 
     */
    initTab: function(nbLine, nbColumn, char = '') {
        var tab = [];
        for (var i = 0; i < nbLine; i++) {
            var line = [];
            for (var j = 0; j < nbColumn; j++) {
                line.push(char);
            }
            tab.push(line);
        }
        return tab;
    },
}
module.exports = toolbox;