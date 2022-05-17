class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :room, :created_at
  has_one :user
  has_one :room
end
