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

class Shop < ActiveRecord::Base
  validates :name, :owner_id, presence: true

  include PgSearch
  multisearchable against: [:name, :description]

  belongs_to :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id

  has_many :items
end
