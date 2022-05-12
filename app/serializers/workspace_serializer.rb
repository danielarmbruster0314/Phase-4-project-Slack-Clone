class WorkspaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :list_rooms
  has_one :user
end
