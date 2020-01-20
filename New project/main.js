
var player = new Object();
player.element = 'player';
player.x = 250;
player.y = 450;

function setPosition(sprite) {
    var e = doucment.getElementById(sprite.element)
    e.style.left = sprite.x + 'px';
    e.stlye.top = sprite.y + 'px';
}

setPosition(player)
