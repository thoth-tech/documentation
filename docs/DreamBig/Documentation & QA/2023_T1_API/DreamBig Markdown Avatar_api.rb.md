# Documentation - avatar_api.rb

Github Link-
[avatar_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of Avatar
2. Creation of Avatar
3. Update Avatar
4. Delete Avatar with indicated ID
5. Get all Avatar

**Code does not perform validation currently, or anything relatively complex.**

**The avatar service is currently partially implemented in the frontend with a created service, but
no data is being sent to the backend.**

Future updates could include:

- Boolean checks
- More detail about methods
- Changes within the update methods as parameters are optional, may need to include Avatar ID as
  required

### Retrieval of Avatar

```ruby
    class AvatarApi < Grape::API
        desc 'Allow retrieval of a users Avatar'
        get '/avatar/:id' do
        # Auth

        avatar = Avatar.find(params[:id])
        present avatar, with: Entities::AvatarEntity
    end
```

Uses avatar ID as a parameter within variable 'avatar', where if it exists, it is presented to user
using AvatarEntity class.

### Creation of Avatar

```ruby
    desc 'Allow creation of an Avatar'
    params do
        requires :avatar_head_id, type: Integer, desc: 'Avatar Head ID'
        requires :avatar_torsos_id, type: Integer, desc: 'Avatar torso ID'
        requires :avatar_hairs_id, type: Integer, desc: 'Avatar hair ID'
        requires :avatar_accessories_id, type: Integer, desc: 'Avatar accessories ID'
    end
    post '/avatar' do
        avatar_parameters = ActionController::Parameters.new(params)
        .permit(
            :avatar_head_id,
            :avatar_torsos_id,
            :avatar_hairs_id,
            :avatar_accessories_id
        )

        # Auth...

        created_avatar = Avatar.create!(avatar_parameters)

        present created_avatar, with: Entities::AvatarEntity
    end
```

This method requires four parameters:

- avatar_head_id
- avatar_torsos_id
- avatar_hairs_id
- avatar_accessories_id

Used within variable 'created_avatar' to create an avatar, variable is presented to user via
['AvatarEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_api.rb)
class.

The four parameters are related to the API files:

- [avatar_head_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_heads_api.rb)
- [avatar_torsos_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_torsos_api.rb)
- [avatar_hairs_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_hairs_api.rb)
- [avatar_accessories_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_accessories_api.rb)

These are the main four visual components which make up a student's avatar for their account. Each
of these require an 'imgpath' to be used as a parameter in their creation.

### Update Avatar

```ruby
    desc 'Allow updating of a Avatar'
    params do
        optional :avatar_head_id, type: Integer, desc: 'Avatar Head ID'
        optional :avatar_torsos_id, type: Integer, desc: 'Avatar torso ID'
        optional :avatar_hairs_id, type: Integer, desc: 'Avatar hair ID'
        optional :avatar_accessories_id, type: Integer, desc: 'Avatar accessories ID'
    end
    put '/avatar/:id' do
        avatar_parameters = ActionController::Parameters.new(params)
        .permit(
            :avatar_head_id,
            :avatar_torsos_id,
            :avatar_hairs_id,
            :avatar_accessories_id
        )

        # Auth

        update_avatar = Avatar.find(params[:id])
        update_avatar.update!(avatar_parameters)

        present update_avatar, with: Entities::AvatarEntity
    end
```

This method updates an existing avatar, requiring four variables as a parameter and all being
optional:

Optional:

- avatar_head_id
- avatar_torsos_id
- avatar_hairs_id
- avatar_accessories_id

Parameters are placed within variable 'avatar_parameters'.

Within variable 'update_avatar' using 'Avatar' class find function with avatar ID, it updates an
existing avatar using values within 'avatar_parameters'. This is presented to user via
'AvatarEntity' class.

### Delete Avatar with indicated ID

```ruby
    desc 'Delete the Avatar with the indicated id'
    params do
        requires :id, type: Integer, desc: 'The id of the Avatar to delete'
    end
    delete '/avatar/:id' do
        Avatar.find(params[:id]).destroy!
        return true
    end
```

This method requires an avatar ID as a parameter. Should the avatar be found, it is deleted using
'Avatar' class' destroy function.

### Get all Avatar

```ruby
    desc 'Get all the avatars'
        get '/avatar' do
            avatars = Avatar.all

            present avatars, with: Entities::AvatarEntity
        end
    end
```

This method uses the 'Avatar' class' all function, which acts as a value within the variable
'avatar' holding all existing Avatar.

This is presented to the user via 'AvatarEntity' class.
