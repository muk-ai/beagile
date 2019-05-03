module BeagileAPI
  class Root < Grape::API
    mount BeagileAPI::V1::Root

    if defined? GrapeSwaggerRails
      add_swagger_documentation(
        info: {
          title: 'Beagile API',
          description: 'desciption'
        }
      )
    end
  end
end
