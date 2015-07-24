# == Schema Information
#
# Table name: items
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  description    :text
#  qty            :integer          default(1), not null
#  price          :float            not null
#  shop_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  main_image_url :string
#

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
