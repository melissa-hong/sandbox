require "rails_helper"

RSpec.describe MainController, type: :routing do
  describe "routing" do
    it "routes to #show" do
      expect(get: "/").to route_to("main#show")
    end
  end
end
