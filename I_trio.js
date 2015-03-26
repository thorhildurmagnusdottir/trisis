/**
 * Created by thorhildur on 24.3.2015.
 */
function Trio(ILshape){
    this.shape = ILshape;
    this.pos = [0,20,0];
    this.cubes = this.initCubes();
}
Trio.prototype = {
    constructor: Trio,
    initCubes: function () {
        if (this.ILshape) console.log('heyjo');
        theCubes = [];
        for (i = 0; i < 3; i++) {
            theCubes[i] = new Cube();
        }
        return theCubes;
    },
    move: function(x,y,z) {
        console.log("move Trio by " + x + y + z);
        this.pos = [this.pos[0]+x,this.pos[1]+ y,this.pos[2]+ z];
    },
    rotate: function(deg, dir){
        console.log("rotate Trio by degree " + deg + " and direction " + dir);
    }
};
var testTRio = new Trio(1);
testTRio.move(1,2,3);
testTRio.rotate(90, [1,1,1]);
var ITrioIndex;
drawLTrio = function(){
//    render code for L-trio
};
