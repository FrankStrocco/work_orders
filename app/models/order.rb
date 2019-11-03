class Order < ApplicationRecord
  has_many :technicians
  has_many :locations

  # @locations = Location.all
  # @technnicians = Technician.all
  # @orders = Order.all
  # @tech1_orders = @orders.where(technician_id: => 1)

end
