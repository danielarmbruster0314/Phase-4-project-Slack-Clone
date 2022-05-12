class Room < ApplicationRecord
    belongs_to :workspace 
    has_many :messages 
    has_many :users, through: :messages


   
end
