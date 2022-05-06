class InvitationSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :workspace
end
