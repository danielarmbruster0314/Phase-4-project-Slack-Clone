class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :room
  has_one :user
  has_one :room
end
