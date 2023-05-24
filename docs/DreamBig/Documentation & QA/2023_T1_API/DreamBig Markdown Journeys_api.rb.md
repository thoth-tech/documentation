# Documentation - journeys_api.rb

Github Link-
[journeys_api.rb](https://github.com/codeJdawg/dream-big-api-documentation/blob/main/dream-big-api/app/api/journeys_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of journeys
2. Creation of journeys
3. Update journeys
4. Delete journeys with indicated ID
5. Get all journeys

**Code does not perform validation currently, or anything relatively complex.**

**The journey service is implemented with the frontend with a created service, this can be found in
[journey.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/journey.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods

### Retrieval of journeys

```ruby
class JourneysApi < Grape::API
  desc 'Allow retrieval of an Journey'
  get '/journeys/:id' do
    # Auth

    journey = Journey.find(params[:id])
    present journey, with: Entities::JourneysEntity
  end
```

Uses journeys ID as a parameter within variable 'journey', where if it exists, it is presented to
user using JourneysEntity class.

### Creation of journeys

```ruby
  desc 'Allow creation of a Journey'
  params do
    requires :id, type: Integer, desc: 'ID of Journey'
    requires :student_id, type: Integer, desc: 'student ID'
  end
  post '/journeys' do
    journey_parameters = ActionController::Parameters
       .new(params)
       .permit(
         :id,
         :student_id
       )

    # Auth...

    created_journey = Journey.create!(journey_parameters)

    present created_journey, with: Entities::JourneysEntity
  end
```

This method requires two parameters:

- id
- student_id

Used within variable 'created_journey' to create a journey, variable is presented to user via
['JourneysEntity'](https://github.com/codeJdawg/dream-big-api-documentation/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/journeys_entity.rb#L2)
class.

The parameter 'student_id' is related to API file:

- [student_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/student_api.rb)

The student_id is used to indicate which students are currently enrolled within the journey.

### Update journeys

```ruby
  desc 'Allow updating of a Journey'
  params do
    requires :id, type: Integer, desc: 'ID of Journey'
    optional :student_id, type: Integer, desc: 'student ID'
  end
  put '/journeys/:id' do
    journey_parameters = ActionController::Parameters
       .new(params)
       .permit(
         :student_id
       )

    # Auth

    update_journey = Journey.find(params[:id])
    update_journey.update!(journey_parameters)

    present update_journey, with: Entities::JourneysEntity
  end
```

This method updates an existing journeys, requiring one variable as necessary:

- id

One variable as optional:

- student_id

Parameters are placed within variable 'journey_parameters'.

Within variable 'update_journey' using 'Journey' class find function with journeys ID, it updates an
existing journeys using values within 'journey_parameters'. This is presented to user via
'JourneysEntity' class.

### Delete journeys with indicated ID

```ruby
  desc 'Delete the journey with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of the journey'
  end
  delete '/journeys/:id' do
    Journey.find(params[:id]).destroy!

    return true
  end
```

This method requires an journeys ID as a parameter. Should the journeys be found, it is deleted
using 'Journey' class' destroy function.

### Get all categories

```ruby
  desc 'Get all the journeys'
  get '/journeys' do
    journeys = Journey.all

    present journeys, with: Entities::JourneysEntity
  end
end
```

This method uses the 'Journey' class' all function, which acts as a value within the variable
'journeys' holding all existing journeys.

This is presented to the user via 'JourneysEntity' class.
