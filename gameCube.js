/**
 * Created by thorhildur on 24.3.2015.
 */

var gameCube = {
};
function Cube(relpos){
    this.pos = [relpos[0],relpos[1],relpos[2]];
}
Cube.prototype = {
    constructor: Cube,
    move:function(){
        this.pos.push("i");
    }
};
