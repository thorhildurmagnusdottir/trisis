/**
 * Created by thorhildur on 30.3.2015.
 */
var bottom = -10;
var moveIsLegal = true;
var letterA = 65;
var letterZ = 90;
var letterS = 83;
var letterX = 88;
var letterD = 68;
var letterC = 67;
var leftArrow = 37;
var upArrow = 38;
var rightArrow = 39;
var downArrow = 40;
var enter = 13;
var spaceBar = 32;
var letterP = 80;
var letterR = 82;

// TODO: fix shouldMove
// Virkar ekki alveg, en á rétta leið held ég
var shouldMove = function(){

    // Svona skilar getCubePos()
    // [[3,16,3],[3,17,3],[3,15,3]]
    var xBorder = currentTrio.getCubePos[0];
    var yBorder = currentTrio.getCubePos[1];
    var zBorder = currentTrio.getCubePos[2];

    //return !!(xBorder > 6 || xBorder < 0 || zBorder > 6 || zBorder < 0 || yBorder < 0);
    //return true;

    return (!otherTrios && !bottom || !otherTrios && Border);
};
var pauseGame = false;

// TODO: all events should call some sort of "shouldMove" function
// TODO: interval function that moves trio down every 'second'.
var initEvents = function(){

    var currentTrio = game.trio;

    var droptrio = setInterval(function () {
        currentTrio.move(0, -1, 0)}, dropSpeed);

    window.addEventListener("keydown", function (e) {

        rotateTrio(e);
        moveTrio(e);

        function rotateTrio(e){
            switch(e.keyCode){
                case letterA:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.rotate(X, positive);
                    }
                    break;
                case letterZ:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.rotate(X, negative);
                    }
                    break;
                case letterS:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.rotate(Y, positive);
                    }
                    break;
                case letterX:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.rotate(Y, negative);
                    }
                    break;
                case letterD:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.rotate(Z, positive);
                    }
                    break;
                case letterC:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.rotate(Z, negative);
                    }
                    break;

            }
        }

        function moveTrio(e){
            switch(e.keyCode){
                case letterP:
                    clearInterval(droptrio);
                    pauseGame = !pauseGame;
                    if(!pauseGame){
                        setInterval(function() {currentTrio.move(0, -1, 0)}, dropSpeed);
                    }
                    break;
                case leftArrow:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.move(1, 0, 0);
                    }
                    break;
                case upArrow:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.move(0, 0, 1);
                    }
                    break;
                case rightArrow:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.move(-1, 0, 0);
                    }
                    break;
                case downArrow:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.move(0, 0, -1);
                    }
                    break;
                case enter:
                    if(moveIsLegal && !pauseGame){
                        currentTrio.move(0, bottom, 0);
                    }
                    break;
                case spaceBar:
                    if(moveIsLegal && !pauseGame) {
                        console.log('space bar');
                        currentTrio.move(0, -1, 0);
                    }
                    break;
                case letterR:
                    //if(gameOver){
                    //    game.newGame();
                    //}
                    newGame();
            }
        }

    });
    //event listeners for mouse
    canvas.addEventListener("mousedown", function (e) {
        movement = true;
        origX = e.offsetX;
        origY = e.offsetY;
        e.preventDefault();         // Disable drag and drop
    });

    canvas.addEventListener("mouseup", function (e) {
        movement = false;
    });

    canvas.addEventListener("mousemove", function (e) {
        if (movement) {
            spinY = ( spinY + (e.offsetX - origX) ) % 360;
            spinX = ( spinX + (origY - e.offsetY) ) % 360;
            origX = e.offsetX;
            origY = e.offsetY;
        }
    });

    // Event listener for mousewheel
    window.addEventListener("mousewheel", function (e) {
        if (e.wheelDelta > 0.0) {
            zDist += 0.5;
        } else {
            zDist -= 0.5;
        }
    });
};
function newGame(){
    console.log('Started a new Game');
    alert('Started a new game, your points were: ' + game.score);
    game = new Game();
}