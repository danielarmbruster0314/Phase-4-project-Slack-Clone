class Workspace < ApplicationRecord
  belongs_to :user
  has_many :rooms 
  has_many :users, through: :invitations
end
