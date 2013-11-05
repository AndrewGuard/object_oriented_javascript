function Game(players) {
  this.players = players;
}

Game.prototype.finished = function() {
  for(var i = 0; i < this.players.length; i++) {
    var player = this.players[i];
    if(player.finished()) {
      return true;
    }
  }
  return false;
}


Game.prototype.findPlayerByKeycode = function(keycode) {
  for(var i = 0; i < this.players.length; i++) {
    var player = this.players[i];
    if ( keycode == player.keycode )
    {
      return player;
    }
  }
  return null;
}


function Player(name, track, keycode) {
  this.name = name;
  this.track = track;
  this.keycode = keycode;
}

Player.prototype.move = function() {
  var current = $(this.track).find('.active');
  var next =    current.closest('td').next();
  current.removeAttr('class');
  next.attr('class', 'active');
}

Player.prototype.finished = function() {
  return $(this.track).find('td').last().hasClass("active");
}

var player1 = new Player("Jorge", "#player1_strip", 80);
var player2 = new Player("Andres", "#player2_strip", 81);

var game = new Game([player1, player2]);


var keyUpHandler = function(event) {
  if(!game.finished()) {
    player = game.findPlayerByKeycode(event.which);
    if(player) {
      player.move();
    }
  }
}

$(document).ready(function() {
  $(document).on('keyup', keyUpHandler);
});





