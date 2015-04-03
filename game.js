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
    //console.log('started a Game');
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
            var plane = testCoords[i][1];
            if(this.coords[plane].count != 0) {
                if (this.isCube(testCoords[i][0],testCoords[i][1],testCoords[i][2])) return false;
            }
            else {
                // enginn kubbur a plani fyrir nedan, ma detta
                return true;
            }
        }
    },
    canTrioRotate: function(axis, dir){
        testTrio = game.trio;
        testTrio.move(x, y, z);
        testCoords = testTrio.getCubePos();
        for(i=0; i<3;i++){
            var plane = testCoords[i][1];
            if(this.coords[plane].count != 0) {

            }
            else {
                // enginn kubbur a plani fyrir nedan, ma detta
                return true;
            }
        }
    },
    trioFall: function (){
        dropTrio = game.trio.getCubePos();
        for(i = 0; i<3;i++){
            this.fallenTrios.push(dropTrio[i]);
            //console.log('fallentrio ' + dropTrio[i]);
            this.occupyCoord(dropTrio[i][0],dropTrio[i][1],dropTrio[i][2]);
            //console.log('fallentrio ' + dropTrio[i]);
        }
        this.newTrio();
    },
    occupyCoord: function(x,y,z){
        console.log('occupy with ' + x  + ' ' + y + ' ' + z );
        this.coords[y][x][z] = 1;
        this.coords[y].count ++;
        this.totalFallenTrios ++;
    },
    isCube: function(x,y,z){
        return this.coords[y][x][z] != 0;
    },
    clearPlane: function(y){
        console.log('clear plane: ' + y);
    }
};