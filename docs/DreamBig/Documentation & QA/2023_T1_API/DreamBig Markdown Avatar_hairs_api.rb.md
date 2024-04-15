# Documentation - avatar_hairs_api.rb

Github Link-
[avatar_hairs_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_hairs_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of avatar hairs
2. Creation of avatar hairs
3. Update avatar hairs
4. Delete avatar hairs with indicated ID
5. Get all avatar hairs

**Code does not perform validation currently, or anything relatively complex.**

**The avatar service is partially implemented in the frontend with a created service, but no data is
being sent to the backend. This file is linked to
[avatar.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/avatar.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Should change imgpath to be a requirement since there is only 1 parameter

### Retrieval of avatar hairs

```ruby
class AvatarHairsApi < Grape::API
desc 'Allow retrieval of a users avatar-hairs'
  get '/avatar-hairs/:id' do
    # Auth

    hair = AvatarHair.find(params[:id])
    present hair, with: Entities::AvatarHairsEntity
  end

```

Uses avatar hair ID as a parameter within variable 'hair', where if it exists, it is presented to
user using AvatarHairsEntity class.

### Creation of avatar hairs

```ruby
desc 'Allow creation of an Avatar Hairs'
  params do
    requires :imgpath, type: String, desc: 'Link to Accesory image for avatar-Hairs'
  end
  post '/avatar-hairs' do
    avatar_hairs_parameters = ActionController::Parameters.new(params)
      .permit(
        :imgpath
      )

    # Auth...

    created_hair = AvatarHair.create!(avatar_hairs_parameters)

    present created_hair, with: Entities::AvatarHairsEntity
  end
```

This method requires a single parameters:

- imgpath

Used within variable 'created_hair' to create an avatar hair, variable is presented to user via
['AvatarHairsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/avatar_hairs_entity.rb#L2)
class.

### Update avatar hairs

```ruby
desc 'Allow updating of a Avatar Hairs'
    params do
        optional :imgpath, type: String, desc: 'Link to Accesory image for avatar-Hairs'
    end

    put '/avatar-hairs/:id' do
        avatar_hairs_parameters = ActionController::Parameters.new(params)
        .permit(
            :imgpath
        )

        # Auth

        update_avatar_hair = AvatarHair.find(params[:id])
        update_avatar_hair.update!(avatar_hairs_parameters)

        present update_avatar_hair, with: Entities::AvatarHairsEntity
    end
```

This method updates an existing avatar hair, requiring one variable as optional:

- imgpath

Parameters are placed within variable 'avatar_hairs_parameters'.

Within variable 'update_avatar_hair' using 'AvatarHair' class find function with avatar hair ID, it
updates an existing avatar hair using values within 'avatar_hairs_parameters'. This is presented to
user via 'AvatarHairsEntity' class.

### Delete avatar hairs with indicated ID

```ruby
desc 'Delete the Avatar Hairs with the indicated id'
    params do
        requires :id, type: Integer, desc: 'The id of the avatar-Hairs to delete'
    end
    delete '/avatar-hairs/:id' do
        AvatarHair.find(params[:id]).destroy!

        return true
    end
```

This method requires an avatar hairs ID as a parameter. Should the avatar hair be found, it is
deleted using 'AvatarHair' class' destroy function.

### Get all avatar hairs

```ruby
desc 'Get all the avatar hairs'
  get '/avatar-hairs' do
    avatar_hairs = AvatarHair.all

    present avatar_hairs, with: Entities::AvatarHairsEntity
  end
end
```

This method uses the 'AvatarHair' class' all function, which acts as a value within the variable
'avatar_hairs' holding all existing avatar hairs.

This is presented to the user via 'AvatarHairsEntity' class.
