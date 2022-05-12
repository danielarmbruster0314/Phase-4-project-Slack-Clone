class Workspace < ApplicationRecord
  belongs_to :user
  has_many :rooms 
  has_many :users, through: :invitations

  def list_rooms
    self.rooms
  end 
end
