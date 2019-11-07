class SplashController < ApplicationController
  def index
  end

  def other_index
    redirect_to(:controller => 'orders', :action => 'index')
  end
end
