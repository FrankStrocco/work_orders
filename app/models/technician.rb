class Technician < ApplicationRecord
  # belongs_to :order
  has_and_belongs_to_many :orders


end
