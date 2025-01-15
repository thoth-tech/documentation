# Documentation - planets_api.rb

Github Link-
[planets_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/planets_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of planets
2. Creation of planets
3. Update planets
4. Delete planets with indicated ID
5. Get all planets

**Code does not perform validation currently, or anything relatively complex.**

**The planets service is partially implemented with a created service, but no data is passed into
the backend. This file is linked to
[planet.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/planet.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Fixes in code indentation for 'creation/update' methods

### Retrieval of planets

```ruby
class PlanetsApi < Grape::API
  desc 'Allow retrieval of a Planet'
  get '/planets/:id' do
    # Auth

    planet = Planet.find(params[:id])
    present planet, with: Entities::PlanetsEntity
  end
```

Uses planets ID as a parameter within variable 'planet', where if it exists, it is presented to user
using PlanetsEntity class.

### Creation of planets

```ruby
  desc 'Allow creation of a Planet'
  params do
    requires :id, type: Integer, desc: 'ID of Planet'
    requires :name, type: String, desc: 'name of the planet'
    requires :journey_id, type: Integer, desc: 'journey ID'
  end
  post '/planets' do
    planet_parameters = ActionController::Parameters
       .new(params)
       .permit(
         :id,
         :name,
         :journey_id
       )

    # Auth...

    created_planet = Planet.create!(planet_parameters)

    present created_planet, with: Entities::PlanetsEntity
  end
```

This method requires three parameters:

- id
- name
- journey_id

Used within variable 'created_planet' to create a planet, the variable is presented to user via
['PlanetsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/planets_entity.rb#L2)
class.

The parameter 'journey_id' is related to API file:

- [journey_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/journeys_api.rb)

The journey_id is used to indicate which students are currently enrolled within the journey.

### Update planets

```ruby
  desc 'Allow updating of a Planet'
  params do
    requires :id, type: Integer, desc: 'ID of Planet'
    optional :name, type: String, desc: 'name of the planet'
    optional :journey_id, type: Integer, desc: 'journey ID'
  end
  put '/planets/:id' do
    planet_parameters = ActionController::Parameters
       .new(params)
       .permit(
         :name,
         :journey_id
       )

    # Auth

    update_planet = Planet.find(params[:id])
    update_planet.update!(planet_parameters)

    present update_planet, with: Entities::PlanetsEntity
  end
```

This method updates an existing planets, requiring one variable as necessary:

- id

Two variable as optional:

- name
- journey_id

Parameters are placed within variable 'planet_parameters'.

Within variable 'update_planet' using 'Planet' class find function with planets ID, it updates an
existing planets using values within 'planet_parameters'. This is presented to user via
'PlanetsEntity' class.

### Delete planets with indicated ID

```ruby
  desc 'Delete the Planet with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of Planet'
  end
  delete '/planets/:id' do
    Planet.find(params[:id]).destroy!

    return true
  end
```

This method requires an planets ID as a parameter. Should the planets be found, it is deleted using
'Planet' class' destroy function.

### Get all categories

```ruby
  'Get all the planets'
  get '/planets' do
    planets = Planet.all

    present planets, with: Entities::PlanetsEntity
  end
end
```

This method uses the 'Planet' class' all function, which acts as a value within the variable
'planets' holding all existing planets.

This is presented to the user via 'PlanetsEntity' class.
