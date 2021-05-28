class AddTrainingModels < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name, null: false
      t.string :phone, null: false
      t.date :birth_date

      t.timestamps
    end

    create_table :instructors do |t|
      t.string :name, null: false
      t.string :phone, null: false
      t.date :birth_date

      t.timestamps
    end

    create_table :classes do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.references :instructor, foreign_key: true, index: true

      t.timestamps
    end

    create_table :scheduled_classes do |t|
      t.references :class, foreign_key: true, index: true, null: false
      t.references :instructor, foreign_key: true, index: true, null: false
      t.datetime :scheduled, null: false
      t.datetime :canceled_at
      t.integer :capacity

      t.timestamps
    end

    create_table :class_students do |t|
      t.references :scheduled_class, foreign_key: true, index: true, null: false
      t.references :student, foreign_key: true, index: true, null: false
      t.datetime :canceled_at

      t.timestamps
    end
  end
end
