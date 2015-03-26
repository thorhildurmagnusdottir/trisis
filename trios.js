/**
 * Created by thorhildur on 24.3.2015.
 */
var LShape = 0;
var IShape = 1;
var initPos = [0,20,0];
function Trio(ILshape){
    this.shape = ILshape;
    this.pos = initPos;
    this.cubes = this.initCubes();
}
Trio.prototype = {
    constructor: Trio,
    initCubes: function () {
        theCubes = [];
        for (i = 0; i < 3; i++) {
            if(this.shape == IShape){
                theCubes.push(new Cube(this.pos));
            }
            else {
                theCubes.push(new Cube(this.pos));
            }
        }
        return theCubes
    },
    move: function(x,y,z) {
        console.log("move Trio by " + x + y + z);
        this.pos = [this.pos[0]+x,this.pos[1]+ y,this.pos[2]+ z];
    },
    rotate: function(deg, dir){
        console.log("rotate Trio by degree " + deg + " and direction " + dir);
    },
    updateCubes: function(){
        for (i = 0; i < 3; i++) {
            // TODO:
            //theCubes.push(new Cube(this.pos));
        }
    }
};
var testTRio = new Trio(IShape);
testTRio.initCubes();
//testTRio.move(1,2,3);
//testTRio.rotate(90, [1,1,1]);

var ITrioIndex;
drawLTrio = function(){
//    render code for L-trio
};
var LTrioIndex;
drawLTrio = function(){
//    render code for L-trio
};
