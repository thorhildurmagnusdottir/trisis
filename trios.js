/**
 * Created by thorhildur on 24.3.2015.
 */
var LShape = 0;
var IShape = 1;
var initPos = [0.0,0.0,0.0];
function Trio(ILshape){
    this.shape = ILshape;
    this.pos = initPos;
    this.rotation = [];
    this.cubes = this.initCubes();
}
var cubePos = [
    [[0,0,0],[0,1,0],[0,-1,0]],
    [[0,0,0],[0,1,0],[1, 0,0]]
];
Trio.prototype = {
    constructor: Trio,
    initCubes: function () {
        theCubes = [];
        for (i = 0; i < 3; i++) {
            if(this.shape == IShape){
                theCubes.push(new Cube(cubePos[0][i]));
            }
            else {
                theCubes.push(new Cube(cubePos[1][i]));
            }
        }
        return theCubes
    },
    move: function(x,y,z) {
        console.log("move Trio by " + x + y + z);
        this.pos = [this.pos[0]+x,this.pos[1]+ y,this.pos[2]+ z];
        this.cubes.forEach()
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
