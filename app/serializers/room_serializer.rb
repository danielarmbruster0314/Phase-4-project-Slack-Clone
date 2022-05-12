class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_private, :messages
end
