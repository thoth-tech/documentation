# Documentation - reflections_api.rb

Github Link-
[reflections_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/reflections_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of Reflections
2. Creation of Reflections
3. Update Reflections
4. Delete Reflections with indicated ID
5. Get all Reflections

**Code does not perform validation currently, or anything relatively complex.**

**The reflections service is partially implemented with a created service, but no data is passed
into the backend. This file is linked to
[reflection.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/reflection.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Need to change title of update method to match API file 'reflection'

### Retrieval of Reflections

```ruby
class ReflectionsApi < Grape::API
  desc 'Allow retrieval of a Reflection'
  get '/reflections/:id' do
    # Auth

    reflection = Reflection.find(params[:id])
    present reflection, with: Entities::ReflectionsEntity
  end
```

Uses a Reflections ID as a parameter, where if it is found, it is presented to the user via
'ReflectionsEntity' class.

### Creation of Reflections

```ruby
  desc 'Allow creation of a Reflection'
  params do
    requires :id, type: Integer, desc: 'ID of reflection'
    requires :section_id, type: Integer, desc: 'section ID'
    requires :goal_id, type: Integer, desc: 'goal ID'
    requires :reflection_text, type: String, desc: 'details of the reflection'
  end
  post '/reflections' do
    reflection_parameters = ActionController::Parameters
      .new(params)
      .permit(
        :id,
        :section_id,
        :goal_id,
        :reflection_text
      )

    # Auth...

    created_reflection = Reflection.create!(reflection_parameters)

    present created_reflection, with: Entities::ReflectionsEntity
  end
```

This method requires four parameters:

- id
- section_id
- goal_id
- reflection_text

Used within variable 'created_reflection' to create a reflection, the variable is presented to user
via
['ReflectionsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/reflections_entity.rb#L2)
class.

The parameter 'section_id' and 'goal_id' is related to API file:

- [section_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/sections_api.rb)
- [goal_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/goals_api.rb)

'section_id' is used by the method to indicate which section the plan is made for, and the 'goal_id'
is used to indicate what is the goal of the plan/section.

### Update Reflections

```ruby
  desc 'Allow updating of a Goal'
  params do
    requires :id, type: Integer, desc: 'ID of reflection'
    optional :section_id, type: Integer, desc: 'section ID'
    optional :goal_id, type: Integer, desc: 'goal ID'
    optional :reflection_text, type: String, desc: 'details of the reflection'
  end
  put '/reflections/:id' do
    reflection_parameters = ActionController::Parameters
      .new(params)
      .permit(
        :section_id,
        :goal_id,
        :reflection_text
      )

    # Auth

    update_reflection = Reflection.find(params[:id])
    update_reflection.update!(reflection_parameters)

    present update_reflection, with: Entities::ReflectionsEntity
  end
```

This method updates an existing Reflections, requiring one variable as necessary:

- id

Three variable as optional:

- section_id
- goal_id
- reflection_text

Parameters are placed within variable 'reflection_parameters'.

Within variable 'update_reflection' using 'Reflection' class find function with Reflections ID, it
updates an existing Reflection using values within 'reflection_parameters'. This is presented to
user via 'ReflectionsEntity' class.

### Delete Reflections with indicated ID

```ruby
  desc 'Delete the reflection with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of the reflection'
  end
  delete '/reflections/:id' do
    Reflection.find(params[:id]).destroy!

    return true
  end
```

This method requires an Reflections ID as a parameter. Should the Reflections be found, it is
deleted using 'Reflection' class' destroy function.

### Get all categories

```ruby
  desc 'Get all the reflections'
  get '/reflections' do
    reflections = Reflection.all

    present reflections, with: Entities::ReflectionsEntity
  end
end
```

This method uses the 'Reflection' class' all function, which acts as a value within the variable
'Reflections' holding all existing Reflections.

This is presented to the user via 'ReflectionsEntity' class.
