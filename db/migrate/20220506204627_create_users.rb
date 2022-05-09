class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email, null: false, default: ""
      t.string :image, null:false, default: ""

      t.timestamps
    end
  end
end