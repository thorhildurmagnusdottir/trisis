/**
 * Created by thorhildur on 24.3.2015.
 */
var LShape = 0;
var IShape = 1;
var initPos = {x: 1, y:20, z:1 };
var initRot = {x: 0, y:0, z:0 };
function Trio(ILshape){
    this.shape = ILshape;
    this.pos = initPos;
    this.rot = initRot;
    this.cubeChildren = [];
    this.cubes = this.initCubes();
}
var cubePos = {

    I: [[0,0,0],[0,1,0],[1, 0,0]],
    L: [[0,0,0],[0,1,0],[0,-1,0]]
};
// TODO: make new Trios generate the correct 3 cubes.
Trio.prototype = {
    constructor: Trio,
    initCubes: function () {
        theCubes = [];
        for (i = 0; i < 3; i++) {
            if(this.shape == IShape){
                theCubes.push(new Cube(cubePos.I[i]));
                cubeChildren.push(cubePos.I[i]);
            }
            else {
                theCubes.push(new Cube(cubePos.L[i]));
                cubeChildren.push(cubePos.L[i]);

            }
        }
        return theCubes
    },
    addCube: function(childCube){
        this.cubeChildren.push(childCube);
    },
    move: function(x,y,z) {
    },
    rotate: function(deg, dir){
    },
    // skilar [] með þremur pos hlutum
    // á eftir að bæta inn uppfærðum snúningshnitum
    getCubePos: function(){
        positions = [];
        for(i = 0; i< this.cubeChildren.length; i++) {
            var childPos = this.cubeChildren[id].pos;
            var truePos = {
                x: this.pos.x + childPos.x,
                y: this.pos.y + childPos.y,
                z: this.pos.z + childPos.z
            };
            positions.push(truePos);
        }
        return positions;
    }
};
