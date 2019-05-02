class BeagileAPI::V1::Projects < Grape::API
  resources :projects do
    resource ':id' do
      desc 'return Project'
      get do
        { project: {} }
      end
    end
  end
end
