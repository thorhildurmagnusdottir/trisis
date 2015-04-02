/**
 * Created by thorhildur on 28.3.2015.
 */
    // game is the currently playing game.
var game;

// Starts a game to play.
initGame = function () {
    game = new Game();
    document.getElementById('score').innerHTML = "You have " + game.score + " points";
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
    // coordinates af the game. all 0 in beginning

    this.totalFallenTrios = 0;

    this.coords = generateGameCoords();
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
        this.newTrio();
        if(deleteRow) {
            score++;
            // Allir stopTrio.pos(0, -1, 0);
        }
        // if(score > 5){
        //     dropSpeed -= 100;
        // }
    },
    newTrio: function(){
        this.trio = generateTrio();
    },
    newGame: function(){
        clearBoard();
        this.score = 0
    },
    canTrioMove: function(x, y, z){
        testTrio = game.trio;
        testTrio.move(x, y, z);
        testCoords = testTrio.getCubePos();
        for(i=0; i<3;i++){
            console.log('testCoords ' + testCoords[i]);
        }
        return true;
    },
    trioFall: function (){
        dropTrio = game.trio.getCubePos();
        for(i = 0; i<3;i++){
            this.fallenTrios.push(dropTrio[i]);
            this.occupyCoord(dropTrio[i][0],dropTrio[i][1],dropTrio[i][2]);
        }
    },
    occupyCoord: function(x,y,z){
        console.log('occupy with ' + x  + ' ' + y + ' ' + z );
        this.coords[y][x][z] = 1;
        this.coords[y].count ++;
        this.totalFallenTrios ++;
    },
    vacateCoord: function(x,y,z){
        this.coords[y][x][z] = 0;
        this.coords[y].count --;
        this.totalFallenTrios --;
    },
    clearPlane: function(y){
        console.log('clear plane: ' + y);
    }
};