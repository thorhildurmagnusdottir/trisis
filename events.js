/**
 * Created by thorhildur on 30.3.2015.
 */

var moveIsLegal = true;
var moveLegal = function(){
    return true;
};
var initEvents = function(){
    window.addEventListener("keydown", function (e) {
        var currentTrio = currentGame.trio;
        switch (e.keyCode){
            case 13:    // Enter button
                        //Quickdrop
                break;
            case 32:    // SpaceBar
                console.log('space bar');
                if(moveIsLegal) {
                    setTimeout(1000);
                    currentTrio.move(0, -1, 0);
                }
                break;
            case 37:    // Left arrow
                if(moveIsLegal){
                    currentTrio.move(-1, 0, 0);
                }
                break;
            case 38:    // Up arrow
                if(moveIsLegal){
                    currentTrio.move(0, 0, 1);
                }
                break;
            case 39:    // Right arrow
                if(moveIsLegal){
                    currentTrio.move(1, 0, 0);
                }
                break;
            case 40:    // Down arrow
                if(moveIsLegal){
                    currentTrio.move(0, 0, -1);
                }
                break;
            case 65:    // Letter A
                if(moveIsLegal){
                    currentTrio.rotate(X, positive);
                }
                break;
            case 90:    // Letter Z
                if(moveIsLegal){
                    currentTrio.rotate(X, negative);
                }
                break;
            case 83:    // Letter S
                if(moveIsLegal){
                    currentTrio.rotate(Y, positive);
                }
                break;
            case 88:    // Letter X
                if(moveIsLegal){
                    currentTrio.rotate(Y, negative);
                }
                break;
            case 68:    // Letter D
                if(moveIsLegal){
                    currentTrio.rotate(Z, positive);
                }
                break;
            case 67:    // Letter C
                if(moveIsLegal){
                    currentTrio.rotate(Z, negative);
                }
                break;
            case 82: // Letter R
                if(gameOver){
                    game.newGame();
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

    // Event listener for keyboard
    window.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            case 38:	// upp ör
                zDist += 0.1;
                break;
            case 40:	// niður ör
                zDist -= 0.1;
                break;
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
}