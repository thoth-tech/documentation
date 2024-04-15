# Documentation - avatar_torsos_api.rb

Github Link-
[avatar_torsos_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_torsos_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of avatar torsos
2. Creation of avatar torsos
3. Update avatar torsos
4. Delete avatar torsos with indicated ID
5. Get all avatar torsos

**Code does not perform validation currently, or anything relatively complex.**

**The avatar service is partially implemented in the frontend with a created service, but no data is
being sent to the backend. This file is linked to
[avatar.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/avatar.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Should change imgpath to be a requirement since there is only 1 parameter
- Bug on line 56, improper class. Should change to AvatarTorso
- Bug on line 83 where AvatarTorso should be used with .find function

### Retrieval of avatar torsos

```ruby
class AvatarTorsosApi < Grape::API
  desc 'Allow retrieval of a users avatar-torsos'
  get '/avatar-torsos/:id' do
    # Auth

    torso = AvatarTorso.find(params[:id])
    present torso, with: Entities::AvatarTorsosEntity
  end
```

Uses avatar torso ID as a parameter within variable 'torso', where if it exists, it is presented to
user using AvatarTorsosEntity class.

### Creation of avatar torsos

```ruby
desc 'Allow creation of an Avatar Torsos'
  params do
    requires :imgpath, type: String, desc: 'Link to Accesory image for avatar-Torsos'
  end
  post '/avatar-torsos' do
    avatar_torsos_parameters = ActionController::Parameters.new(params)
      .permit(
        :imgpath
      )

    # Auth...

    created_avatar_torso = AvatarHair.create!(avatar_torsos_parameters)

    present created_avatar_torso, with: Entities::AvatarTorsosEntity
  end
```

This method requires a single parameter:

- imgpath

Used within variable 'created_avatar_torso' to create an avatar torso, variable is presented to user
via
['AvatarTorsosEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/avatar_torsos_entity.rb#L2)
class.

### Update avatar torsos

```ruby
desc 'Allow updating of a Avatar Torsos'
  params do
    optional :imgpath, type: String, desc: 'Link to Accesory image for avatar-Torsos'
  end

  put '/avatar-torsos/:id' do
    avatar_torsos_parameters = ActionController::Parameters.new(params)
      .permit(
        :imgpath
      )

    # Auth

    update_avatar_torso = avatar_torsos_parameters.find(params[:id])
    update_avatar_torso.update!(avatar_torsos_parameters)

    present update_avatar_torso, with: Entities::AvatarTorsosEntity
  end
```

This method updates an existing avatar hair, requiring one variable as optional:

- imgpath

Parameters are placed within variable 'avatar_torsos_parameters'.

Within variable 'update_avatar_torso' using 'AvatarTorso' class find function with avatar hair ID,
it updates an existing avatar hair using values within 'avatar_torsos_parameters'. This is presented
to user via 'AvatarTorsosEntity' class.

### Delete avatar torsos with indicated ID

```ruby
desc 'Delete the Avatar Torsos with the indicated id'
  params do
    requires :id, type: Integer, desc: 'The id of the avatar-Torsos to delete'
  end
  delete '/avatar-torsos/:id' do
    AvatarTorso.find(params[:id]).destroy!

    return true
  end
```

This method requires an avatar torsos ID as a parameter. Should the avatar torso be found, it is
deleted using 'AvatarTorso' class' destroy function.

### Get all avatar torsos

```ruby
desc 'get all the avatar torsos'
  get '/avatar-torsos' do
    avatar_torsos = AvatarTorso.all

    present avatar_torsos, with: Entities::AvatarTorsosEntity
  end
end
```

This method uses the 'AvatarTorso' class' all function, which acts as a value within the variable
'avatar_torsos' holding all existing avatar torsos.

This is presented to the user via 'AvatarTorsosEntity' class.
