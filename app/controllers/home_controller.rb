class HomeController < ApplicationController
  def index
    render inertia: "Home/index"
  end
end
