# == Schema Information
#
# Table name: shops
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  owner_id    :integer          not null
#  rating      :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ShopTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
