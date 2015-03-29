/**
 * Created by thorhildur on 28.3.2015.
 */
testTrios = function () {
    var testITrio = new Trio(IShape);
    var testLTrio = new Trio(LShape);
    currentTrio = testLTrio;
    //currentTrio.rotate(x);
};
    currentTrio.rotate(90, 90);
    var testLTrio = new Trio(LShape);
    testLTrio.initCubes();
};

function moveTrio(e){

    var moveIsLegal = true;
    switch (e.keyCode){
        case 13:    // Enter button
            //Quickdrop
            break;
        case 32:    // SpaceBar
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
                currentTrio.move(0, 1, 0);
            }
            break;
        case 39:    // Right arrow
            if(moveIsLegal){
                currentTrio.move(1, 0, 0);
            }
            break;
        case 40:    // Down arrow
            if(moveIsLegal){
                currentTrio.move(0, -1, 0);
            }
            break;
        case 65:    // Letter A
            if(moveIsLegal){
                currentTrio.rotate(x, 1);
            }
            break;
        case 90:    // Letter Z
            if(moveIsLegal){
                currentTrio.rotate(x, 1);
            }
            break;
        case 83:    // Letter S
            if(moveIsLegal){
                currentTrio.rotate(y, 1);
            }
            break;
        case 88:    // Letter X
            if(moveIsLegal){
                currentTrio.rotate(y, 1);
            }
            break;
        case 68:    // Letter D
            if(moveIsLegal){
                currentTrio.rotate(z, 1);
            }
            break;
        case 67:    // Letter C
            if(moveIsLegal){
                currentTrio.rotate(z, 1);
            }
            break;
        case 82:
            if(gameOver){
                game.newGame();
            }
    }

}

var points = 0;

function Game(game){
    this.game = game;
    this.points = points;
    this.currentTrio = currentTrio;
}

Game.prototype ={
    genrate: function(){
        if(CurrentTrio.stop){
            new Trio;
        }
    }
    gamePlay: function(){
        generate();
        if(deleteRow) {
            points++;
            // Allir stopTrio.pos(0, -1, 0);
        }
    }

    newGame: function(){
        clearBoard()
        this.points = 0
    }
}
