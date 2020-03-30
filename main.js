const turn = document.getElementById("turn");
const alert = document.getElementById("successBattleship");
const messagej1 = document.getElementById("j1Battleship");
const messagej2 = document.getElementById("j2Battleship");
var writeNumberBoat = 0;

var playerTurn = 1;
var endGame = false;

var scoreJ1 = 0;
var scoreJ2 = 0;

function playCase(line,column) { 
    if(!endGame) {
        battleship.playCase(line,column);
        battleship.displayGrid();
        if(battleship.verifyEndGame(playerTurn)) {
            manageEndGame();
        }
        if(playerTurn===1) {
            playerTurn = 2;
            turn.innerHTML = "Tour du joueur 2";
        } else {
            playerTurn = 1;
            turn.innerHTML = "Tour du joueur 1";
        }  
    }   
}

function initTab(numberBoat) {
    battleship.nbCaseJ1 = 0;
    battleship.nbCaseJ2 = 0;
    endGame = false;
    playerTurn = 1;
    alert.style.display = "none";
    var contentJ1 = "<img src='./images/J1.png' class='imgPlayers1'><br>";
    contentJ1 += scoreJ1;
    messagej1.innerHTML = contentJ1;
    var contentJ2 = "<img src='./images/J2.png' class='imgPlayers2'><br>";
    contentJ2 += scoreJ2;
    messagej2.innerHTML = contentJ2;

    battleship.init(numberBoat);
    battleship.displayGrid();
}

function manageEndGame(){
    endGame = true;
    var contentAlert = "<p id='msg'>Partie terminé le gagnant est : J" + playerTurn + "</p>";
    contentAlert += "<button type='button' class='btnBattleship' onclick='initTab()'>Restart</button>";
    displayAlert(contentAlert,1);
    if(playerTurn===1){
        scoreJ1++;
    } else {
        scoreJ2++;
    }
}

function displayAlert(txt, type) {
    if(type === 1) {
        alert.classList.add("success");
        alert.classList.remove("error");
    } else {
        alert.classList.remove("success");
        alert.classList.add("error");
    }
    alert.innerHTML = txt;
    alert.style.display = "block";
}

function play(line,column) {
    playCase(line,column);
    var caseIA = iaBattleship.getCase();
    playCase(caseIA.line,caseIA.column);
}

function startBattleship() {
    writeNumberBoat = parseInt(document.getElementById('numberBoat').value);
    if(writeNumberBoat < 2) displayAlert("le nombre de bateau doit être supérieur à 1",2);
    if(writeNumberBoat > 4) displayAlert("le nombre de bateau doit être inférieur à 5",2);
    if(writeNumberBoat >= 2 && writeNumberBoat <= 4) initTab(writeNumberBoat);
}

addEventListener("click", function(event) {
    var target = event.target;
    if(target.id === "fire") {
        var image = "<img src='./images/explo/explosion00.png' id='explo' style='width:100px;height:100px;position:absolute;top:"+(event.clientY-50)+"px;left:"+(event.clientX-50)+"px;'/>";
        var body = document.querySelector("body");
        var element = document.createElement("div");
        element.innerHTML = image;
        body.appendChild(element);

        explosion(8);

        function explosion(time) {
            var explo = document.getElementById("explo");
            if(time >= 1) {
                if(time===9) explo.setAttribute("src","./images/explo/explosion01.png");
                if(time===8) explo.setAttribute("src","./images/explo/explosion02.png");
                if(time===7) explo.setAttribute("src","./images/explo/explosion03.png");
                if(time===6) explo.setAttribute("src","./images/explo/explosion04.png");
                if(time===5) explo.setAttribute("src","./images/explo/explosion05.png");
                if(time===4) explo.setAttribute("src","./images/explo/explosion06.png");
                if(time===3) explo.setAttribute("src","./images/explo/explosion07.png");
                if(time===2) explo.setAttribute("src","./images/explo/explosion08.png");
                if(time===1) explo.remove(this);
                setTimeout(function() {
                    explosion(time-1);
                },55); 
            }
        }
    }
})