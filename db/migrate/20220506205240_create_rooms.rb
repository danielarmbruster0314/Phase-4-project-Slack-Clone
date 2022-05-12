class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.boolean :is_private, default: false
      t.belongs_to  :workspace
      t.timestamps
    end
  end
end
