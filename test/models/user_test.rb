# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  sex             :string
#  street          :string
#  state           :string
#  zip             :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  provider        :string
#  uid             :string
#  first_name      :string
#  last_name       :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
