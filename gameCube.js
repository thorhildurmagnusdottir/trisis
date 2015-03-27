/**
 * Created by thorhildur on 24.3.2015.
 */
var gameCubeIndex;
drawGameCube = function(){
    var gameCubeColor = 10;
    gameCubeIndex = index;
    colorCube(gameCubeColor);
};
function Cube(relpos){
    this.pos = {x: relpos.x, y:relpos.y, z:relpos.z };
}
