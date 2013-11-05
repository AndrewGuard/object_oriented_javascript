$(document).ready(function() {

  function Player(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  };

  function Game(currentgame) {
    this.currentgame = currentgame
  };

  $(document).on('submit', function() {
    var player1 = new Player(document.forms["input_box"]["player1_name"].value);
    var player2 = new Player(document.forms["input_box"]["player2_name"].value);
    alert('Player1 is named ' + player1.name);
    alert('Player2 is named ' + player2.name);
  })

  Game.prototype.render = function() {
    $(document).on('keyup', function(event) {
      if ( event.keyCode == 81 && !isFinished() )
      {
        var player1_current = getCurrentspot(1);
        var player1_next = getNextspot(1);
        movePlayer(player1_current, player1_next);
      }
      if ( event.keyCode == 80 && !isFinished() )
      {
        var player2_current = getCurrentspot(2);
        var player2_next = getNextspot(2);
        movePlayer(player2_current, player2_next);
      }
  });

// ================= FUNCTIONARIES ============================================================================================

function isFinished()
{
  if ( $('#player1_strip').find('td').last().attr('class') == "active" ||
   $('#player2_strip').find('td').last().attr('class') == "active" )
  {
    return true;
  } else {
    return false;
  }
}

function movePlayer(current, next)
{
  current.removeAttr('class');
  next.attr('class', 'active');
}

function getCurrentspot(player)
{
  if (player == 1)
  {
    return $('#player1_strip').find('.active');
  }
  if (player == 2)
  {
    return $('#player2_strip').find('.active');
  }
  return null;
}

function getNextspot(player)
{
  if (player == 1)
  {
    return $('#player1_strip').find('.active').closest('td').next();
  }
  if (player == 2)
  {
    return $('#player2_strip').find('.active').closest('td').next();
  }
  return null;
}
});

}