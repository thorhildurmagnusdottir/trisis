/**
 * Created by thorhildur on 30.3.2015.
 */
var bottom = -10;
var moveIsLegal = true;
// TODO: fix shouldMove
// Virkar ekki alveg, en á rétta leið held ég
var shouldMove = function(){
    var xBorder = currentTrio.getCubePos[0];
    var yBorder = currentTrio.getCubePos[1];
    var zBorder = currentTrio.getCubePos[2];

    if(xBorder > 6 || xBorder < 0 || zBorder > 6 || zBorder < 0 || yBorder < 0){
        return true
    }
    else {
        return false;
    }
};
var pauseGame = false;

// TODO: all events should call some sort of "shouldMove" function
// TODO: interval function that moves trio down every 'second'.
var initEvents = function(){

    var currentTrio = game.trio;

    var droptrio = setInterval(function () {
        currentTrio.move(0, -1, 0)}, dropSpeed);

    window.addEventListener("keydown", function (e) {


        switch (e.keyCode){
            case 80:    // Letter P
                clearInterval(droptrio);
                pauseGame = !pauseGame;
                    if(!pauseGame){
                        setInterval(function() {currentTrio.move(0, -1, 0)}, dropSpeed);
                    }
                break;
            case 13:    // Enter button
                if(moveIsLegal && !pauseGame){
                    currentTrio.move(0, bottom, 0);
                }
                break;
            case 32:    // SpaceBar
                console.log('space bar');
                if(moveIsLegal && !pauseGame) {
                    currentTrio.move(0, -1, 0);
                }
                break;
            case 37:    // Left arrow
                if(moveIsLegal && !pauseGame){
                    currentTrio.move(1, 0, 0);
                }
                break;
            case 38:    // Up arrow
                if(moveIsLegal && !pauseGame){
                    currentTrio.move(0, 0, 1);
                }
                break;
            case 39:    // Right arrow
                if(moveIsLegal && !pauseGame){
                    currentTrio.move(-1, 0, 0);
                }
                break;
            case 40:    // Down arrow
                if(moveIsLegal && !pauseGame){
                    currentTrio.move(0, 0, -1);
                }
                break;
            case 65:    // Letter A
                if(moveIsLegal && !pauseGame){
                    currentTrio.rotate(X, positive);
                }
                break;
            case 90:    // Letter Z
                if(moveIsLegal && !pauseGame){
                    currentTrio.rotate(X, negative);
                }
                break;
            case 83:    // Letter S
                if(moveIsLegal && !pauseGame){
                    currentTrio.rotate(Y, positive);
                }
                break;
            case 88:    // Letter X
                if(moveIsLegal && !pauseGame){
                    currentTrio.rotate(Y, negative);
                }
                break;
            case 68:    // Letter D
                if(moveIsLegal && !pauseGame){
                    currentTrio.rotate(Z, positive);
                }
                break;
            case 67:    // Letter C
                if(moveIsLegal && !pauseGame){
                    currentTrio.rotate(Z, negative);
                }
                break;
            case 82: // Letter R
                //if(gameOver){
                //    game.newGame();
                //}
                newGame();
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
            zDist += 0.1;
        } else {
            zDist -= 0.1;
        }
    });
};
var shouldMove = function(){
    return true;
};
function newGame(){
    console.log('Started a new Game');
    alert('Started a new game, your points were: ' + game.score);
    game = new Game();
}