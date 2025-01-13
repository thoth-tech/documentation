# Documentation - dream_big_api.rb

Github Link-
[dream_big_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/dream_big_api.rb)

**Requires:**

- **[Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**
- **[Grape-Swagger](https://github.com/ruby-grape/grape-swagger)**

The file is in **JSON** format

```JSON
class DreamBigApi < Grape::API
  prefix "api"
  format :json

  before do
    headers["Access-Control-Allow-Origin"] = "*"
    headers["Access-Control-Allow-Methods"] = "POST, PUT, DELETE, GET, OPTIONS"
    headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  end

  rescue_from :all do |e|
    case e
    when ActiveRecord::RecordInvalid, Grape::Exceptions::ValidationErrors
      message = e.message
      status = 400
    when ActiveRecord::InvalidForeignKey
      message = "This operation has been rejected as it would break data integrity. Ensure that related values are deleted or updated before trying again."
      status = 400
    when Grape::Exceptions::MethodNotAllowed
      message = e.message
      status = 405
    when ActiveRecord::RecordNotDestroyed
      message = e.message
      status = 400
    when ActiveRecord::RecordNotFound
      message = "Unable to find requested #{e.message[/(Couldn't find )(.*)( with)/, 2]}"
      status = 404
    else
      # logger.error "Unhandled exception: #{e.class}"
      # logger.error e.inspect
      # logger.error e.backtrace.join("\n")

      puts "FAILING!"
      puts e.inspect
      puts e.backtrace.join("\n")

      message = "Sorry... something went wrong with your request."
      message = e.inspect
      status = 500
    end
    Rack::Response.new({ error: message }.to_json, status, { "Content-type" => "text/error" })
  end
```

The above headers are run before the main block of code.

the 'rescue_from' method checks for exceptions **'|e|'** from the entire code using case statements.
Should errors occur, it will match with a case and an error is thrown along with setting a status,
such as:

- **status=400** [Bad Request]
- **status=404** [ API user not found]
- **status=405** [ HTTP request not allowed]

Error is displayed for user in quotes, such as:

> "Unable to find requested #{e.message[/(Couldn't find )(.*)( with)/, 2]}"

Backtrace associated with exception where it is located is an array of strings. It will then output
a user written message and output a error:

- **status=500** [HTTP internal server ]

This is done with a message as seen in line 44:

> Rack::Response.new({ error: message }.to_json, status, { "Content-type" => "text/error" }

---

```JSON
#mount DreamBigApi
  mount CategoryApi
  mount UsersApi
  mount StudentApi
  mount AvatarApi
  mount AvatarHairsApi
  mount AvatarHeadsApi
  mount AvatarAccessoriesApi
  mount AvatarTorsosApi
  mount AnswersApi
  mount AssessmentsApi
  mount CategoryQuestionsApi
  mount JourneysApi
  mount PlanetsApi
  mount SectionsApi
  mount GoalsApi
  mount ReflectionsApi
  mount PlansApi

  add_swagger_documentation(
    base_path: nil,
    api_version: "v1",
    hide_documentation_path: true,
    info: {
      title: "Dream-big-api API Documentaion",
      description: "Dreambig-api is an entity service and web socket proof of concept.",
      license: "AGPL v3.0",
      license_url: "https://github.com/doubtfire-lms/dream-big/blob/main/LICENSE",
    },
    mount_path: "swagger_doc"
  )
end
```

The rest of the code is mounting all API files within
**['API'](https://github.com/codeJdawg/dream-big-api-documentation/tree/main/dream-big-api/app/api)**
directory.
