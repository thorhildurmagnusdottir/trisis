/**
 * Created by thorhildur on 28.3.2015.
 */
    // game is the currently playing game.
var game;

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
    //this.currentTrio = currentTrio;
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
        newTrio();
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
    moveIfCan: function(x, y, z){
        this.trio.move(x,y,z);
        if (!(this.border() || this.collideCubes())) this.trio.move(-x, -y, -z);
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
        if (this.collideCubes() || this.isBottom()) this.trioFall();
    },
    isBottom: function() {
        findBottom = this.trio.getCubePos();
        for(i = 0; i < 3; i++){
            console.log("Trio Y position " + findBottom[i][1]);
            if(findBottom[i][1] == 0){
                return true;
            }
        }
        return false;
    },
    border: function(){
        checkBorder = this.trio.getCubePos();
        for(i = 0; i < 3; i++){
            console.log("Trio position " + i +  ' x:' +  checkBorder[i][0]+  ' y:' + checkBorder[i][1]+  ' z:' + checkBorder[i][2]);
                if(checkBorder[i][0] > 6 || checkBorder[i][0] < 0 || checkBorder[i][2] > 6 || checkBorder[i][2]){
                    return true;
                }
        }
        return false;
    },
    trioFall: function (){
        console.log('Trio fallen');
        dropTrio = this.trio.getCubePos();
        for(i = 0; i<3;i++){
            this.fallenTrios.push(dropTrio[i]);
            this.occupyCoord(dropTrio[i][0],dropTrio[i][1],dropTrio[i][2]);
        }
        newTrio();
    },
    occupyCoord: function(x,y,z){
        console.log('occupy with ' + x  + ' ' + y + ' ' + z );
        this.coords[y][x][z] = 1;
        this.coords[y].count ++;
        if (this.coords[y].count == 36) this.clearPlane(y);
        this.totalFallenTrios ++;
    },
    isCube: function(x,y,z){
        return this.coords[y][x][z] != 0;
    },
    collideCubes: function(){
        var trioCoords = this.trio.getCubePos();
        for(i=0; i<3;i++){
            var nextPlane = trioCoords[i][1];
            if(this.coords[nextPlane].count != 0) {
                // kubbur á þessu plani
                // skilum satt um leid og einn kubbur rekst a
                if (this.isCube(trioCoords[i][0],trioCoords[i][1],trioCoords[i][2])) return true;
            }
            else {
                // enginn kubbur a plani fyrir nedan, ma detta
                return false;
            }
        }
    },
    clearPlane: function(y){
        clearFallenTrios(y);
        this.score += 100;
    }
};
function clearFallenTrios(y){
    fallen = game.fallenTrios;
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