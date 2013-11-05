# =====GET =========================================================

get '/' do
  @player1 = Player.find_by_id(session[:player1_id])
  @player2 = Player.find_by_id(session[:player2_id])
  erb :index
end

get '/logout' do
  session.clear
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
