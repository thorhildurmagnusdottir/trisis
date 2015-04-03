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
    //newGame: function(){
    //    clearBoard();
    //    this.score = 0
    //},
    moveIfCan: function(x, y, z){
        var checkTrio = this.trio;
        checkTrio.move(x,y,z);
        if (!border && !this.collideCubes(checkTrio)) this.trio.move(x, y, z);
    },
    rotateIfCan: function(axis, dir){
        var checkTrio = this.trio;
        checkTrio.rotate(axis, dir);
        if (!border && !this.collideCubes(checkTrio)) rotate(axis, dir);
    },
    dropIfCan: function(){
        var checkTrio = this.trio;
        checkTrio.move(0,-1,0);
        if (isBottom(checkTrio)) this.trioFall();
        if (!collideCubes(checkTrio)) this.trio.move(0,-1,0);
    },
    isBottom: function(trio) {
        findBottom = game.trio.getCubePos();
        for(i = 0; i < 3; i++){
            console.log("Trio position" + findBottom[i][1]);
            if(findBottom[i][1] = 0){
                return true;
            }
        }
        return false;
    },
    border: function(trio){
        checkBorder = game.trio.getCubePos();
        for(i = 0; i < 3; i++){
            console.log("Trio position" + checkBorder[i]);
                if(checkBorder[i][0] > 6 || checkBorder[i][0] < 0 || checkBorder[i][2] > 6 || checkBorder[i][2]){
                    return true;
                }
        }
        return false;
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
    collideCubes: function(trio){
        var collision = false;
        for(i=0; i<3;i++){
            var nextPlane = trio[i][1];
            if(this.coords[nextPlane].count != 0) {
                // kubbur á þessu plani
                // skilum satt um leid og einn kubbur rekst a
                if (this.isCube(trio[i][0],trio[i][1],trio[i][2])) return true;
            }
            else {
                // enginn kubbur a plani fyrir nedan, ma detta
                return false;
            }
        }
    },
    clearPlane: function(y){
        console.log('clear plane: ' + y);
    }
};