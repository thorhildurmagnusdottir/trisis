/**
 * Created by thorhildur on 28.3.2015.
 */
    // game is the currently playing game.
var game;
var trioPos;
// Starts a game to play.
initGame = function () {
    var newGame = new Game();
    game = newGame;
    document.getElementById('score').innerHTML = "You have " + game.score + " points";
};
var score = 0;
// Generates a trio, randomly I or L shape.

// When an instance (var game = new Game()) of Game is created, one trio is generated
function Game(){
    this.score = 0;
    // fallenTrios are the trios on the bottom.
    this.fallenTrios = [];
    // coordinates af the game. all 0 in beginning

    this.totalFallenTrios = 0;

    this.coords = generateGameCoords();
    // trio is the current game trio.
    this.trio = generateTrio();
}
// TODO: function for trio to 'die': add to fallen and generate new
// TODO: Collistion detect function before trio move/rotate
Game.prototype = {
    constructor: Game,
    moveIfCan: function(x, y, z){
        this.trio.move(x,y,z);
        if (this.border() || this.collideCubes()) this.trio.move(-x, -y, -z);
        else if (this.isBottom()) this.trioFall();
    },
    rotateIfCan: function(axis, dir){
        var opDir = 0;
        if (dir == 0) opDir = 1;
        this.trio.rotate(axis, dir);
        if (this.border() || this.collideCubes()) this.trio.rotate(axis, opDir);
        else if (this.isBottom()) this.trioFall();
    },
    dropIfCan: function(){
        this.trio.move(0,-1,0);
        if ( this.isBottom() || this.collideCubes() ){
            this.trio.move(0,1,0);
            this.trioFall();
        }
    },
    isBottom: function() {
        for(i = 0; i < 3; i++){
            if(trioPos[i][1] == 0){
                return true;
            }
        }
        return false;
    },
    border: function(){
        for(i = 0; i < 3; i++){
                if(trioPos[i][0] > 5 || trioPos[i][0] < 0 || trioPos[i][2] > 5 || trioPos[i][2] < 0 ){
                    return true;
                }
        }
        return false;
    },
    trioFall: function (){
        for(i = 0; i<3;i++){
            this.fallenTrios.push(trioPos[i]);
            this.occupyCoord(trioPos[i][0],trioPos[i][1],trioPos[i][2]);
        }
        this.score += 5;
        newTrio();
        //this.newTrio();
    },
    occupyCoord: function(x,y,z){
        this.coords[y][x][z] = 1;
        this.coords[y].count ++;
        if (this.coords[y].count == 36) this.clearPlane(y);
        this.totalFallenTrios ++;
    },
    isCube: function(x,y,z){
        return this.coords[y][x][z] != 0;
    },
    collideCubes: function(){
        for(i=0; i<3;i++){
            nextPlane = trioPos[i][1];
            if(this.coords[nextPlane-1].count != 0) {
                // kubbur á þessu plani
                // skilum satt um leid og einn kubbur rekst a
                if (this.isCube(trioPos[i][0],trioPos[i][1],trioPos[i][2])) return true;
            }
        }
        return false;
    },
    clearPlane: function(y){
        clearFallenTrios(y);
        this.score += 100;
    }
};
function clearFallenTrios(y){
    fallen = game.fallenTrios;
    game.coords.splice(y,1);
    // coords[y] = 0;
    game.coords.push([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]);
    game.coords[19].count = 0;

    var toSplice = [];
    for (i=0;i<fallen.length;i++){
       if (fallen[i][1]==y){
           toSplice.push(i);
       }
       else if (fallen[i][1] >= y) fallen[i][1]--;
    }
    for (j=toSplice.length;j>=0;j--){
       fallen.splice(toSplice[j],1);
    }
}