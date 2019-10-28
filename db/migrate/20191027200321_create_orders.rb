class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :technician_id
      t.integer :location_id
      t.string :time
      t.integer :duration
      t.integer :price

      t.timestamps
    end
  end
end
