class Order < ApplicationRecord
  has_many :technicians
  has_many :locations
end
