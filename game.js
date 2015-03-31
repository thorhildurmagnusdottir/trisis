/**
 * Created by thorhildur on 28.3.2015.
 */
var currentGame;
initGame = function () {
    currentGame = new IGame();
};
var score = 0;
var generateTrio = function(){
    var randomShape;
    if (Math.random()>0.5) randomShape = IShape;
    else randomShape = LShape;
    return new Trio(randomShape);
};
//function Game(game){
//    this.game = game;
//    this.score = score;
//    this.currentTrio = currentTrio;
//}
//
//Game.prototype = {
//    constructor: Game,
//    generate: function(){
//        if(CurrentTrio.stop){
//            new Trio;
//        }
//    },
//    gamePlay: function(){
//        generate();
//        if(deleteRow) {
//            score++;
//            // Allir stopTrio.pos(0, -1, 0);
//        }
//    },
//    newGame: function(){
//        clearBoard();
//        this.score = 0
//    }
//};
// TODO: function for trio to 'die': add to fallen and generate new
// TODO: Collistion detect function before trio move/rotate
// Bara profa ad gera adeins adra utfaerslu af Game
function IGame(){
    console.log('started a Game');
    this.score = 0;
    this.fallenTrios = [];
    this.trio = generateTrio();
}
IGame.prototype = {
    constructor: IGame,
    //trioFall: function()
    generate: function(){
        if(CurrentTrio.stop){
            new Trio;
        }
    },
    gamePlay: function(){
        this.generate();
        if(deleteRow) {
            score++;
            // Allir stopTrio.pos(0, -1, 0);
        }
    },
    newGame: function(){
        clearBoard();
        this.score = 0
    },
    cubeFall: function (){
        this.fallenTrios.push(currentGame.trio.getCubePos());
    }
};
function clearBoard(){}