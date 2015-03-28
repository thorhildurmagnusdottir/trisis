/**
 * Tölvugrafík haust 2015
 * Verkefni 3
 * Trisis
 * Kristjana Eir Jónsdóttir og Þórhildur Magnúsdóttir
 */

var canvas;
var gl;
var MVM;
var points = [];
var colors = [];
var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = 0;
var theta = [ 0, 0, 0 ];

var movement = false;     // Do we rotate?
var spinX = 0;
var spinY = 0;
var origX;
var origY;
var currentTrio;
var zDist = -10.0;

var proLoc;
var mvLoc;

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }
    var testColor = 4;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.9, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    //  Initialize the Cube
    drawCube();
    //  Initialize the Game Cube
    drawGameCube();
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW);

    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    proLoc = gl.getUniformLocation(program, "projection");
    mvLoc = gl.getUniformLocation(program, "modelview");

    //event listeners for mouse
    canvas.addEventListener("mousedown", function (e) {
        movement = true;
        origX = e.offsetX;
        origY = e.offsetY;
        e.preventDefault();         // Disable drag and drop
    });

    canvas.addEventListener("mouseup", function (e) {
        movement = false;
    });

    canvas.addEventListener("mousemove", function (e) {
        if (movement) {
            spinY = ( spinY + (e.offsetX - origX) ) % 360;
            spinX = ( spinX + (origY - e.offsetY) ) % 360;
            origX = e.offsetX;
            origY = e.offsetY;
        }
    });

    // Event listener for keyboard
    window.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            case 38:	// upp ör
                zDist += 0.1;
                break;
            case 40:	// niður ör
                zDist -= 0.1;
                break;
        }
    });

    // Event listener for mousewheel
    window.addEventListener("mousewheel", function (e) {
        if (e.wheelDelta > 0.0) {
            zDist += 0.1;
        } else {
            zDist -= 0.1;
        }
    });

    render();
};


function scale4( x, y, z ){
    if ( Array.isArray(x) && x.length == 3 ) {
        z = x[2];
        y = x[1];
        x = x[0];
    }

    var result = mat4();
    result[0][0] = x;
    result[1][1] = y;
    result[2][2] = z;


    return result;
}
var testITrio = new Trio(IShape);
testITrio.initCubes();
currentTrio = testITrio;
currentTrio.rotate(90,90);
var testLTrio = new Trio(LShape);
testLTrio.initCubes();

// TODO: draw all cubes on bottom together (make array)
// TODO: make rotation and move inherit (like robotArmHH)
function render()
{
    var rot = currentTrio.rot;
    //console.log('rotation' + rot[0]);
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var proj = perspective( 90.0, 1.0, 0.2, 100.0 );
    gl.uniformMatrix4fv(proLoc, false, flatten(proj));
    var ctm = lookAt( vec3(0.0, 0.0, zDist), vec3(0.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0) );
    ctm = mult( ctm, rotate( parseFloat(spinX), [1, 0, 0] ) );
    ctm = mult( ctm, rotate( parseFloat(spinY), [0, 1, 0] ) );
    MVM = ctm;

    //GAME CUBE
    renderGameCube();
    //MVM = mult(MVM, translate(0,10,0));
    renderCube();
    //MVM = mult(MVM, translate(0,1,0));
    //renderCube();
    //MVM = mult(MVM, translate(0,0,-1));
    //renderCube();

    requestAnimFrame( render );
}
function renderCube(){
    gameCubeMatrix = MVM;
    gameCubeMatrix = mult(gameCubeMatrix, rotate(90, [0,0,1]));
    gameCubeMatrix = mult(gameCubeMatrix, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(gameCubeMatrix));
    gl.drawArrays(gl.TRIANGLES, cubeIndex, numCubeVertices);
}
function renderGameCube(){
    gameCubeMatrix = MVM;
    gameCubeMatrix = mult(gameCubeMatrix, translate(0, -10, 0));
    gameCubeMatrix = mult(gameCubeMatrix, scale4(6, 20, 6));
    gl.uniformMatrix4fv(mvLoc, false, flatten(gameCubeMatrix));
    gl.drawArrays(gl.TRIANGLES, gameCubeIndex, numCubeVertices);
}