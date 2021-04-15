module Types
  class QueryType < GraphQL::Schema::Object
    field :time, String, null: false

    def time
      Time.current
    end
  end
end
