# Documentation - avatar_accessories_api.rb

Github Link-
[avatar_accessories_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_accessories_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of avatar-accessories
2. Creation of avatar-accessories
3. Update avatar-accessories
4. Delete avatar-accessories with indicated ID
5. Get all avatar-accessories

**Code does not perform validation currently, or anything relatively complex.**

Future updates could include:

- Boolean checks
- More detail about methods
- Changes within the update methods as imgpath for update is optional, may need to include
  avatar-accessory ID

### Retrieval of avatar-accessories

```ruby
    class AvatarAccessoriesApi < Grape::API
        desc 'Allow retrieval of a users avatar-accessories'
        get '/avatar-accessories/:id' do
            # Auth

            accessory = AvatarAccessory.find(params[:id])
            present accessory, with: Entities::AvatarAccessoriesEntity
        end
```

Uses avatar-accessory ID as a parameter within variable 'accessory', where if it exists, it is
presented to user using AvatarAccessoriesEntity class.

### Creation of avatar-accessories

```ruby
        desc 'Allow creation of an Avatar Accessory'
    params do
        requires :imgpath, type: String, desc: 'Link to Accesory image for avatar-accessories'
    end
    post '/avatar-accessories' do
        avatar_accessories_parameters = ActionController::Parameters.new(params)
        .permit(
            :imgpath
        )

        # Auth...

        created_avatar_accessory = AvatarAccessory.create!(avatar_accessories_parameters)

        present created_avatar_accessory, with: Entities::AvatarAccessoriesEntity
    end
```

This method requires a single parameters:

- imgpath

Used within variable 'created_avatar_accessory' to create an avatar-accessory, variable is presented
to user via
['AvatarAccessoriesEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_accessories_api.rb)
class.

### Update avatar-accessories

```ruby
    desc 'Allow updating of a Avatar accessories'
    params do
        optional :imgpath, type: String, desc: 'Link to Accesory image for avatar-accessories'
    end

    put '/avatar-accessories/:id' do
        avatar_accessories_parameters = ActionController::Parameters.new(params)
        .permit(
            :imgpath
        )

        # Auth

        update_avatar_accessory = AvatarAccessory.find(params[:id])
        update_avatar_accessory.update!(avatar_accessories_parameters)

        present update_avatar_accessory, with: Entities::AvatarAccessoriesEntity
    end
```

This method updates an existing avatar-accessory, requiring one variable as optional:

- imgpath

Parameters are placed within variable 'avatar_accessories_parameters'.

Within variable 'update_avatar_accessory' using 'AvatarAccessory' class find function with
avatar-accessory ID, it updates an existing avatar-accessory using values within
'avatar_accessories_parameters'. This is presented to user via 'AvatarAccessoriesEntity' class.

### Delete avatar-accessories with indicated ID

```ruby
    desc 'Delete the Avatar with the indicated id'
    params do
        requires :id, type: Integer, desc: 'The id of the avatar-accessories to delete'
    end
    delete '/avatar-accessories/:id' do
        AvatarAccessory.find(params[:id]).destroy!

        return true
    end
```

This method requires an avatar-accessories ID as a parameter. Should the avatar-accessory be found,
it is deleted using 'AvatarAccessory' class' destroy function.

### Get all avatar-accessories

```ruby
        desc 'Get all the avatar accessories'
        get '/avatar-accessories' do
            avatar_accessories = AvatarAccessory.all

            present avatar_accessories, with: Entities::AvatarAccessoriesEntity
        end
    end
```

This method uses the 'AvatarAccessory' class' all function, which acts as a value within the
variable 'avatar_accessories' holding all existing avatar-accessories.

This is presented to the user via 'AvatarAccessoriesEntity' class.
