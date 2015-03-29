/**
 * Created by thorhildur on 24.3.2015.
 */
var LShape = 'L';
var IShape = 'I';
//var initPos = {x: 1, y:20, z:1 };
var initPos = {x: 1, y:0, z:1 };
var initRot = {x: 0, y:0, z:0 };
function Trio(ILshape){
    this.shape = ILshape;
    this.pos = initPos;
    this.rot = initRot;
    this.cubeChildren = [];
    //this.cubes = this.initCubes();
    this.cubes = cubeInitPos[ILshape];
}
var cubeInitPos = {
    L: [{x: 0, y:0, z:0 },
        {x: 0, y:1, z:0 },
        {x: 1, y:0, z:0 }],
        //[0,0,0],[0,1,0],[1, 0,0]],
    I: [{x: 0, y:0, z:0 },
        {x: 0, y:1, z:0 },
        {x: 0, y:-1, z:0 }]
    //[[0,0,0],[0,1,0],[0,-1,0]]
};
// TODO: make new Trios generate the correct 3 cubes.
Trio.prototype = {
    constructor: Trio,
    move: function(x,y,z) {
        this.pos.x += x;
        this.pos.y += y;
        this.pos.z += z;
    },
    rotate: function(axis, dir){
        // TODO: útfæra betur miðað við stöður og stefnu triosins.
        for(i = 1; i< this.cubes.length; i++) {
            var currCube = this.cubes[i];
            if (currCube[axis] != 0){
                // rotate hefur ekki áhrif á kubb á þeim snúningsás
                console.log('Do nothing with cube ' + this.cubes[i]);
            }
            else {
                console.log('Rotating cube ' + this.cubes[i]);
                currCube.x = i;
                currCube.x = i;
                currCube.z = i;
            }
        }
    },
    // skilar [] með þremur pos hlutum
    // á eftir að bæta inn uppfærðum snúningshnitum
    getCubePos: function(){
        positions = [];
        for(i = 0; i< this.cubes.length; i++) {
            var currentCubePos = [];
            currentCubePos.push(this.cubes[i].x + this.pos.x);
            currentCubePos.push(this.cubes[i].y + this.pos.y);
            currentCubePos.push(this.cubes[i].z + this.pos.z);
            positions.push(currentCubePos);
        }
        return positions;
    }
};
