module BeagileAPI
  module V1
    class Root < Grape::API
      helpers Authenticable

      version 'v1'
      format :json

      mount BeagileAPI::V1::Organizations
      mount BeagileAPI::V1::Projects
    end
  end
end
