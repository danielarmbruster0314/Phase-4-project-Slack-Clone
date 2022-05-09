class CreateInvitations < ActiveRecord::Migration[6.1]
  def change
    create_table :invitations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :workspace, null: false, foreign_key: true

      t.timestamps
    end
  end
end
