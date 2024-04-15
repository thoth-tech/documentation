# Documentation - avatar_heads_api.rb

Github Link-
[avatar_heads_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_heads_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of avatar heads
2. Creation of avatar heads
3. Update avatar heads
4. Delete avatar heads with indicated ID
5. Get all avatar heads

**Code does not perform validation currently, or anything relatively complex.**

**The avatar service is partially implemented in the frontend with a created service, but no data is
being sent to the backend. This file is linked to
[avatar.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/avatar.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Should change imgpath to be a requirement since there is only 1 parameter
- There is a bug on line 84 where brackets '()' are missing for the avatar_heads_parameter

### Retrieval of avatar heads

```ruby
class AvatarHeadsApi < Grape::API
  desc 'Allow retrieval of a users avatar-heads'
  get '/avatar-heads/:id' do
    # Auth

    head = AvatarHead.find(params[:id])
    present head, with: Entities::AvatarHeadsEntity
  end
```

Uses avatar head ID as a parameter within variable 'head', where if it exists, it is presented to
user using AvatarHeadsEntity class.

### Creation of avatar heads

```ruby
desc 'Allow creation of an Avatar Heads'
  params do
    requires :imgpath, type: String, desc: 'Link to Accesory image for avatar-Heads'
  end
  post '/avatar-heads' do
    avatar_heads_parameters = ActionController::Parameters.new(params)
      .permit(
        :imgpath
      )

    # Auth...

    created_avatar_head = AvatarHead.create!(avatar_heads_parameters)

    present created_avatar_head, with: Entities::AvatarHeadsEntity
  end
```

This method requires a single parameter:

- imgpath

Used within variable 'created_avatar_head' to create an avatar head, variable is presented to user
via
['AvatarHeadsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/avatar_heads_entity.rb#L2)
class.

### Update avatar heads

```ruby
desc 'Allow updating of a Avatar Heads'
  params do
    optional :imgpath, type: String, desc: 'Link to Accesory image for avatar-Heads'
  end

  put '/avatar-heads/:id' do
    avatar_heads_parameters = ActionController::Parameters.new(params)
      .permit(
        :imgpath
      )

    # Auth

    update_avatar_head = AvatarHead.find(params[:id])
    update_avatar_head.update! avatar_heads_parameters

    present update_avatar_head, with: Entities::AvatarHeadsEntity
  end
```

This method updates an existing avatar head, requiring one variable as optional:

- imgpath

Parameters are placed within variable 'avatar_heads_parameters'.

Within variable 'update_avatar_head' using 'AvatarHead' class find function with avatar head ID, it
updates an existing avatar head using values within 'avatar_heads_parameters'. This is presented to
user via 'AvatarHeadsEntity' class.

### Delete avatar heads with indicated ID

```ruby
desc 'Delete the Avatar Heads with the indicated id'
  params do
    requires :id, type: Integer, desc: 'The id of the avatar-Heads to delete'
  end
  delete '/avatar-heads/:id' do
    AvatarHead.find(params[:id]).destroy!

    return true
  end
```

This method requires an avatar heads ID as a parameter. Should the avatar head be found, it is
deleted using 'Avatarhead' class' destroy function.

### Get all avatar heads

```ruby
desc 'Get all the avatar heads'
  get '/avatar-heads' do
    avatar_heads = AvatarHead.all

    present avatar_heads, with: Entities::AvatarHeadsEntity
  end
end
```

This method uses the 'AvatarHead' class' all function, which acts as a value within the variable
'avatar_heads' holding all existing avatar heads.

This is presented to the user via 'AvatarHeadsEntity' class.
