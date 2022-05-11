class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :creator
  has_one :user
  has_one :room
end
