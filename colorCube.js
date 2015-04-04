/**
 * Created by kristjanaeir on 3/24/15.
 */

var index = 0;
var numCubeVertices = 36;
var gameCubeIndex;
drawGameCube = function(){
    var gameCubeColor = 10;
    gameCubeIndex = index;
    colorCube(gameCubeColor);
};
drawCube = function () {
    //  Initialize a cube
    var cubeColor = 6;
    cubeIndex = index;
    colorCube(cubeColor);
};
function colorCube(color)
{
    quad( 1, 0, 3, 2, color );
    quad( 2, 3, 7, 6, color );
    quad( 3, 0, 4, 7, color );
    quad( 6, 5, 1, 2, color );
    quad( 4, 5, 6, 7, color );
    quad( 5, 4, 0, 1, color );
}

function quad(a, b, c, d, color)
{
    var vertices = [
        vec3( -0.5, -0.5,  0.5 ),
        vec3( -0.5,  0.5,  0.5 ),
        vec3(  0.5,  0.5,  0.5 ),
        vec3(  0.5, -0.5,  0.5 ),
        vec3( -0.5, -0.5, -0.5 ),
        vec3( -0.5,  0.5, -0.5 ),
        vec3(  0.5,  0.5, -0.5 ),
        vec3(  0.5, -0.5, -0.5 )
    ];

    var vertexColors = [
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 0.0, 0.0, 1.0, 1.0 ],  // blue
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
        [ 1.0, 1.0, 1.0, 1.0 ]   // white
    ];

    var indices = [ a, b, c, a, c, d ];
    var invertIndices = [ d, c, a, c, b, a ];

    for ( var i = 0; i < indices.length; ++i ) {
        if (color == 10){
            //console.log('draw invert');
            points.push( vertices[invertIndices[i]] );
            colors.push(vertexColors[invertIndices[i]]);
            index++;
        }
        else{
            points.push( vertices[indices[i]] );
            //colors.push( vertexColors[indices[i]]);
            // for solid colored faces use
            colors.push(vertexColors[color]);
            index++;
        }

    }
}