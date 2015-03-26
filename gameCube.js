/**
 * Created by thorhildur on 24.3.2015.
 */
drawGameCube = function(){
    var gameCubeColor = 10;
    colorCube(gameCubeColor);
//    render code for the game cube
};
var gameCube = {
};
function Cube(){
    this.pos = [];
}
Cube.prototype = {
    constructor: Cube,
    move:function(){
        this.pos.push("i");
    }
};
