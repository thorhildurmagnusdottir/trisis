/**
 * Created by thorhildur on 28.3.2015.
 */
    // game is the currently playing game.
var game;

// Starts a game to play.
initGame = function () {
    game = new Game();
};
var score = 0;
// Generates a trio, randomly I or L shape.
var generateTrio = function(){
    var randomShape;
    if (Math.random()>0.5) randomShape = IShape;
    else randomShape = LShape;
    return new Trio(randomShape);
};

// When an instance (var game = new Game()) of Game is created, one trio is generated
function Game(){
    //this.currentTrio = currentTrio;
    console.log('started a Game');
    this.score = 0;
    // fallenTrios are the trios on the bottom.
    this.fallenTrios = [];

    // trio is the current game trio.
    this.trio = generateTrio();
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
        case 82:    // Letter R
            if(gameOver){
                game.newGame();
            }
    }

}
// TODO: function for trio to 'die': add to fallen and generate new
// TODO: Collistion detect function before trio move/rotate
Game.prototype = {
    constructor: Game,
    gamePlay: function(){
        this.generate();
        if(deleteRow) {
            score++;
            // Allir stopTrio.pos(0, -1, 0);
        }
    },
    generate: function(){
        if(CurrentTrio.stop){
            new Trio;
        }
    },
    newGame: function(){
        clearBoard();
        this.score = 0
    },
    cubeFall: function (){
        this.fallenTrios.push(game.trio.getCubePos());
    }
};
function clearBoard(){}