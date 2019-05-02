module BeagileAPI
  class Root < Grape::API
    mount BeagileAPI::V1::Root
  end
end
