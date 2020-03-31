var toolbox = {
    //Permet d'initialiser un tableau de tableau en fonction d'un nombre de ligne et de colonne passé en paramètre
    initTabEmpty : function(nbLine, nbColumn, car = ''){
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