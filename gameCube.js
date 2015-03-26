/**
 * Created by thorhildur on 24.3.2015.
 */
var gameCubeIndex;
drawGameCube = function(){
    var gameCubeColor = 10;
    gameCubeIndex = index;
    colorCube(gameCubeColor);
//    render code for the game cube
};
var gameCube = {
};
function Cube(relpos){
    this.pos = [relpos[0],relpos[1],relpos[2]];
}
//Cube.prototype = {
//    constructor: Cube
//};
