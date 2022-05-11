class User < ApplicationRecord
    has_many :invitations
    has_many :workspaces, through: :invitations
    has_many :messages
    has_secure_password

    # validates :username, presence: true, uniqueness: true 
end
