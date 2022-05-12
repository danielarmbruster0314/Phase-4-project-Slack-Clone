class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :image, :avaliable_workspaces, :workspaces
end
