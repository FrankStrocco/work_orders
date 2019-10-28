namespace :import do

  desc "Import technicians from csv"
  task technicians: :environment do
    filename = File.join Rails.root, "technicians.csv"

    i = 0
    CSV.foreach(filename) do |row|
      id, name = row
      if
        Technician.create(id: id, name: name)
      end
    i += 1
    end
  end

  desc "Import location info from csv"
  task locations: :environment do
    filename = File.join Rails.root, "locations.csv"

    i = 0
    CSV.foreach(filename) do |row|

      id, name, city = row
      if i > 0
        Location.create(name: name, city: city)
      end
    i += 1
    end
  end

  desc "Import order info from csv"
  task orders: :environment do
    filename = File.join Rails.root, "work_orders.csv"

    i = 0
    CSV.foreach(filename) do |row|

      id, technician_id, location_id, time, duration, price = row
      if i > 0
        Order.create(technician_id: technician_id, location_id: location_id, time: time, duration: duration, price: price)
      end
    i = i + 1
    end
  end

end
