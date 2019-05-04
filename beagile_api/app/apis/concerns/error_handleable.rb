module ErrorHandleable
  extend ActiveSupport::Concern

  included do # rubocop:disable Metrics/BlockLength
    rescue_from ActiveRecord::RecordNotFound do |_e|
      response = {
        errors: [{
          detail: 'Not Found',
          status: '404'
        }]
      }.as_json
      error!(response, 404)
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      response = ActiveModelSerializers::Adapter::JsonApi.new(
        ActiveModel::Serializer::ErrorSerializer.new(e.record)
      ).as_json
      error!(response, 422)
    end

    rescue_from ActiveRecord::StatementInvalid do |_e|
      response = {
        errors: [{
          detail: 'Server Error',
          status: '500'
        }]
      }.as_json
      error!(response, 500)
    end

    rescue_from StandardError do |_e|
      response = {
        errors: [{
          detail: 'Server Error',
          status: '500'
        }]
      }.as_json
      error!(response, 500)
    end

    # rescue_from Pundit::NotAuthorizedError do |_e|
    #   response = {
    #     errors: [{
    #       detail: 'Forbidden',
    #       status: '403'
    #     }]
    #   }.as_json
    #   error!(response, 403)
    # end
  end
end
