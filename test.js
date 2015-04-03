/**
 * Created by thorhildur on 2.4.2015.
 */
function testFall(){
    //game.occupyCoord(2,2,3);
    //console.log('gamecoord: ' + game.coords[2][2][3]);
    //console.log(game.isCube(2,2,3));
    game.trioFall();
    console.log(game.canTrioMove(0,-1,0));
    console.log(JSON.stringify(game.trio.getCubePos()));
    //var fallentrios = game.fallenTrios;
    //var gamecoords = game.coords;
    //console.log('fallentrios are: ' + fallentrios.length +
    //' and occupied coords in game: ' + gamecoords[1].count);
    //console.log('Number of fallen trios in counter ' + game.totalFallenTrios);
}