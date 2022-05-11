class Message < ApplicationRecord
  belongs_to :user
  belongs_to :room


  def user 
    self.user
  end 
end
