/**
 * Created by thorhildur on 24.3.2015.
 */
var ITrioIndex;
drawITrio = function(){
    // render code for I-trio

    middlebox = ctm;
    middlebox = mult(middlebox, translate(0.0, 0.0, 0.0));
    middlebox = mult(middlebox, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(middlebox));
    gl.drawArrays(gl.TRIANGLES, 0, 36);

    leftbox = ctm;
    leftbox = mult(leftbox, translate(1.0, 0.0, 0.0));
    leftbox = mult(leftbox, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(leftbox));
    gl.drawArrays(gl.TRIANGLES, 0, 36);

    rightbox = ctm;
    rightbox = mult(rightbox, translate(-1.0, 0.0, 0.0));
    rightbox = mult(rightbox, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(rightbox));
    gl.drawArrays(gl.TRIANGLES, 0, 36);
};
var LTrioIndex;
drawLTrio = function(){
//    render code for L-trio

    botRightBox = ctm;
    botRightBox = mult(botRightBox, translate(0.0, 0.0, 0.0));
    botRightBox = mult(botRightBox, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(botRightBox));
    gl.drawArrays(gl.TRIANGLES, 0, 36);

    botLeftBox = ctm;
    botLeftBox = mult(botLeftBox, translate(1.0, 0.0, 0.0));
    botLeftBox = mult(botLeftBox, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(botLeftBox));
    gl.drawArrays(gl.TRIANGLES, 0, 36);

    topbox = ctm;
    topbox = mult(topbox, translate(1.0, 1.0, 0.0));
    topbox = mult(topbox, scale4(1.0, 1.0, 1.0));
    gl.uniformMatrix4fv(mvLoc, false, flatten(topbox));
    gl.drawArrays(gl.TRIANGLES, 0, 36);
};
