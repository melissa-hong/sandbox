class Instructor < ActiveRecord::Base
  def class_count
    Class.all.count
  end
end
