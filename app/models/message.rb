class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room

def creator 
  self.user 
end 
 
end
