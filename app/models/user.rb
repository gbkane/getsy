# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name           :string           not null
#  last_name           :string           not null
#  sex             :string
#  street          :string
#  state           :string
#  zip             :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :session_token, :first_name, :last_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  # validate :confirm_password

  has_many :shops,
    class_name: "Shop",
    foreign_key: :owner_id,
    primary_key: :id

  has_many :items, through: :shops

  has_many :carts

  has_many :orders, through: :carts

  attr_reader :password, :password_confirm
  after_initialize :ensure_session_token
  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.password_digest.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid])

    unless user
      user = User.create!(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid],
            first_name: auth_hash[:info][:name].split.first,
            last_name: auth_hash[:info][:name].split.last,
            email: auth_hash[:info][:nickname], #bad solution
            password: SecureRandom::urlsafe_base64)
    end

    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
  end
end
