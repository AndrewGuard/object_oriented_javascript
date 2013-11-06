# =====GET =========================================================

get '/' do
  @player1 = Player.find_by_id(session[:player1_id])
  @player2 = Player.find_by_id(session[:player2_id])
  erb :index
end


# =====POST ========================================================

post '/login_players' do

  @player1 = Player.create(name: params[:player1_name])
  session[:player1_id] = @player1.id
  @player2 = Player.create(name: params[:player2_name])
  session[:player2_id] = @player2.id

  if @game
    @game.update()
  else
    @game = Game.create()
  end

  @game.players << @player1
  @game.players << @player2
  erb :index
end

post '/logout' do
  session.clear
  redirect '/'
end

# get  /games/new   will render the form to create a game
# post /games       will create the game (and maybe the players)
# get  /games/:id   will render the state of a specific game (by its id)

# put  /games/:id   will updated the specific game (by its id) with any params you send
# $.post("/games/12", {winner_id: 10, duration: 1000, _method: "put"})


# "/games/12",   data attr erb