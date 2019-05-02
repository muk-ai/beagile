class BeagileAPI::V1::Organizations < Grape::API
  resources :organizations do
    resource ':id' do
      desc 'return Organization'
      get do
        { organization: {} }
      end
    end
  end
end
