// battleship.init();
// battleship.displayGrid();


// function play(line,column){
//     console.log(line + ' : ' + column)
//     var isOver = battleship.playCase(line,column);
//     battleship.displayGrid();
//     return isOver;
// }

const turn = document.getElementById("turn");
const success = document.getElementById("successBattleship");
const messagej1 = document.getElementById("j1Battleship");
const messagej2 = document.getElementById("j2Battleship");
var playerTurn = 1;
var endGame = false;

var scoreJ1 = 0;
var scoreJ2 = 0;

initTab();

// fonction premettant de jouer 
function playCase(line,column) { 
    if(!endGame) {
        battleship.playCase(line,column);
        battleship.displayGrid();
        if(battleship.verifyEndGame(playerTurn)) {
            manageEndGame();
        }
        if(playerTurn === 1) {
            playerTurn = 2;
            turn.innerHTML = "Tour du joueur 2";
        } else {
            playerTurn = 1;
            turn.innerHTML = "Tour du joueur 1";
        }  
    }   
}

// initialise le tableau
function initTab() {
    battleship.nbCaseJ1 = 0;
    battleship.nbCaseJ2 = 0;
    endGame = false;
    playerTurn = 1;
    success.style.display = "none";
    var contentJ1 = "<img src='./images/J1.png' class='imgPlayers1'><br>";
    contentJ1 += scoreJ1;
    messagej1.innerHTML = contentJ1;

    var contentJ2 = "<img src='./images/J2.png' class='imgPlayers2'><br>";
    contentJ2 += scoreJ2;
    messagej2.innerHTML = contentJ2;

    battleship.init();
    battleship.displayGrid();
}

// gere la fin du jeux
function manageEndGame() {
    endGame = true;
    success.style.display = "block";
    success.innerHTML = "<p id='msgSuccess'>Partie terminé le gagnant est : J" + playerTurn + "</p>";
    success.innerHTML += "<button type='button' class='btnBattleship' onclick='initTab()'>Restart</button> ";
    if(playerTurn===1) {
        scoreJ1++;
    } else {
        scoreJ2++;
    }
}

// permet a l'ia de jouer
function play(line,column) {
    playCase(line,column);
    var caseIA = iaBattleship.getCase();
    playCase(caseIA.line,caseIA.column);
}