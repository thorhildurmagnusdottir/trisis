/**
 * Created by kristjanaeir on 3/24/15.
 */
var letterA = 65;
var letterZ = 90;
var letterS = 83;
var letterX = 88;
var letterD = 68;
var letterC = 67;
var leftArrow = 37;
var upArrow = 38;
var rightArrow = 39;
var downArrow = 40;
var enter = 13;
var spaceBar = 32;


function rotateTrio(e){
    switch(e.keyCode){
        case letterA:
            rotate(90, [1, 0, 0]);
            break;
        case letterZ:
            rotate(-90, [1, 0, 0]);
            break;
        case letterS:
            rotate(90, [0, 1, 0]);
            break;
        case letterX:
            rotate(-90, [0, 1, 0]);
            break;
        case letterD:
            rotate(90, [0, 0, 1]);
            break;
        case letterC:
            rotate(-90, [0, 0, 1]);
            break;

    }
}

function moveTrio(e){
    xmove = 0;
    zmove = 0;
    switch(e.keyCode){
        case leftArrow:
            if(trio.pos > cube.negXedge) xmove = -1.0;
            break;
        case upArrow:
            if(trio.pos < cube.posZedge) zmove = 1.0;
            break;
        case rightArrow:
            if(trio.pos < cube.posXedge) xmove = 1.0;
            break;
        case downArrow:
            if(trio.pos > cube.negYedge) zmove = -1.0;
            break;
        case enter:
            // Detta á efsta sem er á botninum
            break;
        case spaceBar:
            // Detta hratt niður meðan ekki komin á kubb
            break;
    }
}