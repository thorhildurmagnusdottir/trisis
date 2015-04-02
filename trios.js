/**
 * Created by thorhildur on 24.3.2015.
 */
var LShape = 'L';
var IShape = 'I';
var X = 'x';
var Y = 'y';
var Z = 'z';
var positive = 0;
var negative = 1;
var initPos = {x: 3, y:18, z:3 };
//var initPos = {x: 1, y:0, z:1 };
var initRot = {x: 0, y:0, z:0 };
function Trio(ILshape){
    //this.shape = ILshape;
    console.log('new trio with shape ' + ILshape);
    this.pos = initPos;
    this.cubes = cubeInitPos[ILshape];
}
var cubeInitPos = {
    L: [{x: 0, y:0, z:0, s: 6 },
        {x: 0, y:1, z:0, s: 2 },
        {x: 1, y:0, z:0, s: 4 }],
        //[0,0,0],[0,1,0],[1, 0,0]],
    I: [{x: 0, y: 0, z:0, s: 6 },
        {x: 0, y: 1, z:0, s: 2 },
        {x: 0, y:-1, z:0, s: 3 }]
    //[[0,0,0],[0,1,0],[0,-1,0]]
};
var TriosPos = [
    {x: 0, y: 0, z: 1, s: 0 },
    {x: 0, y: 0, z:-1, s: 1 },
    {x: 0, y: 1, z: 0, s: 2 },
    {x: 0, y:-1, z: 0, s: 3 },
    {x: 1, y: 0, z: 0, s: 4 },
    {x:-1, y: 0, z: 0, s: 5 }
];
var rotMatrix = {
    x: [{0: 3, 1: 2, 2: 0, 3: 1},
        {0: 2, 1: 3, 2: 1, 3: 0}],
    y: [{0: 5, 1: 4, 4: 0, 5: 1},
        {0: 4, 1: 5, 4: 1, 5: 0}],
    z: [{2: 5, 3: 4, 4: 2, 5: 3},
        {2: 4, 3: 5, 4: 3, 5: 2}]
};
Trio.prototype = {
    constructor: Trio,
    move: function(x,y,z) {
        this.pos.x += x;
        this.pos.y += y;
        this.pos.z += z;
    },
    rotate: function(axis, dir){
        //console.log('rotate trios around ' + axis + ' axis and ' + dir + ' direction.');
        // TODO: útfæra betur miðað við stöður og stefnu triosins.
        // Byrjum á öðrum kubb því höfum alltaf sama kubbinn í miðjunni.
        for(i = 1; i< this.cubes.length; i++) {
            var currCube = this.cubes[i];
            if (currCube[axis] != 0){
                // rotate hefur ekki áhrif á kubb á þeim snúningsás
                //console.log('Do nothing with cube ' + this.cubes[i]);
            }
            else {
                //console.log('Rotating cube ' + this.cubes[i]);
                var state = currCube.s;
                var next;
                next = rotMatrix[axis][dir][state];
                this.cubes[i] = TriosPos[next];
            }
        }
    },
    // skilar [] með þremur [x,y,z] sem hægt er að nota beint í translate
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
