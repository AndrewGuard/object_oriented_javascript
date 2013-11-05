class Player < ActiveRecord::Base
  validates :name, uniqueness: true

  has_many :player_games
  has_many :games, through: :player_games

  # def initialize (*args)
  #   name = args
  # end
end
