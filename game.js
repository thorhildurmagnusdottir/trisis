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
    // var moveIsLegal = true;
    document.getElementById('score').innerHTML = "You have " + score + " points";
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
        // if(score > 5){
        //     dropSpeed -= 100;
        // }
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