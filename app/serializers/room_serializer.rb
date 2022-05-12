class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_private
  has_many :messages, Serializer:MessageSerializer 
end
