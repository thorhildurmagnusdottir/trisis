/**
 * Created by thorhildur on 24.3.2015.
 */
var LShape = 0;
var IShape = 1;
var initPos = {x: 0, y:0, z:0 };
var initRot = {x: 0, y:0, z:0 };
function Trio(ILshape){
    this.shape = ILshape;
    this.pos = initPos;
    this.rot = initRot;
    this.cubeChildren = [];
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
    addCube: function(childCube){
        this.cubeChildren.push(childCube);
    },
    move: function(x,y,z) {
    },
    rotate: function(deg, dir){
    },
    getChildPosByID: function(id){
        var childPos = this.cubeChildren[id].pos;
        return {
            x: this.pos.x + childPos.x,
            y: this.pos.y + childPos.y,
            z: this.pos.z + childPos.z
        }
    }
};