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

var pauseGame = false;

// TODO: all events should call some sort of "shouldMove" function
// TODO: interval function that moves trio down every 'second'.
var initEvents = function(){

    var droptrio = setInterval(game.dropIfCan(), dropSpeed);

    window.addEventListener("keydown", function (e) {

        rotateTrio(e);
        moveTrio(e);

        function rotateTrio(e){
            switch(e.keyCode){
                case letterA:
                    game.rotateIfCan(X, positive);
                    break;
                case letterZ:
                    game.rotateIfCan(X, negative);
                    break;
                case letterS:
                    game.rotateIfCan(Y, positive);
                    break;
                case letterX:
                    game.rotateIfCan(Y, negative);
                    break;
                case letterD:
                    game.rotateIfCan(Z, positive);
                    break;
                case letterC:
                    game.rotateIfCan(Z, negative);
                    break;

            }
        }

        function moveTrio(e){
            switch(e.keyCode){
                case letterP:
                    clearInterval(droptrio);
                    pauseGame = !pauseGame;
                    if(!pauseGame){
                        clearInterval(droptrio);
                    }else{
                        setInterval(droptrio);
                    }
                    pauseGame = !pauseGame;
                    break;
                case leftArrow:
                    game.moveIfCan(1, 0, 0);
                    break;
                case upArrow:
                    game.moveIfCan(0, 0, 1);
                    break;
                case rightArrow:
                    game.moveIfCan(-1, 0, 0);
                    break;
                case downArrow:
                    game.moveIfCan(0, 0, -1);
                    break;
                case enter:
                    game.dropIfCan(0, bottom, 0);
                    break;
                case spaceBar:
                    game.dropIfCan();
                    break;
                case letterR:
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