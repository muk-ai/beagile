module Authenticable
  extend Grape::API::Helpers

  def current_user
    @current_user ||= begin
                        token = request.headers['Authorization'].split.last
                        decoded_token = FirebaseIdTokenDecoder.new(token).decode
                        decoded_token['payload']['sub']
                        # TODO: find User
                        # User.find_by(user_id: user_id)
                      rescue StandardError
                        nil
                      end
  end

  def authenticate!
    return if current_user

    response = {
      errors: [{
        detail: 'Unauthorized',
        status: '401'
      }]
    }.as_json
    error!(response, 401)
  end
end
