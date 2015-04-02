/**
 * Created by thorhildur on 2.4.2015.
 */
function testFall(){
    game.trioFall();
    var fallentrios = game.fallenTrios;
    var gamecoords = game.coords;
    console.log('fallentrios are: ' + fallentrios.length +
    ' and occupied coords in game: ' + gamecoords[1].count);
    console.log('Number of fallen trios in counter ' + game.totalFallenTrios);
}