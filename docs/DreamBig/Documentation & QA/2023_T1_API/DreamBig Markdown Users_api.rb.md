# Documentation - users_api.rb

Github Link-
[users_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/users_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of Users
2. Creation of Users
3. Update Users
4. Delete Users with indicated ID
5. Get all Users

**Code does not perform validation currently, or anything relatively complex.**

**The User service is currently implemented with the frontend with a created service. This can be
found in
[user.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/user.service.ts#L8)**

Future updates could include:

- Boolean checks
- More detail about methods
- Add description to Retrieval of Users for clarity
- Creation of User is missing a variable compared to other APi files 'created_user' and is not
  presented to user
- Role API file needs to be completed for this API file to function.

### Retrieval of Users

```ruby
class UsersApi < Grape::API

  get '/users/:id' do
    user_parameters = ActionController::Parameters.new(params)
      .permit(
        :id
      )

    # Auth

    user = User.find(params[:id])
    present user, with: Entities::UsersEntity
  end
```

A Users ID is used as a parameter, where if it is found, it is presented to the user via
'UsersEntity' class. This method is unique since it requires a ID as a parameter to find a User.

### Creation of Users

```ruby
  desc 'Allow creation of a user'
  params do
    requires :username, type: String, desc: 'The username used for login'
    requires :name, type: String, desc: 'The user\'s name'
    requires :email, type: String, desc: 'The email used for login'
    requires :password, type: String, desc: 'The in-no-way secure password'
    optional :role_id, type: Integer, desc: 'Role for the user'
  end
  post '/users' do
    user_parameters = ActionController::Parameters.new(params)
      .permit(
        :username,
        :name,
        :email,
        :password,
        :role_id
      )

    User.create!(user_parameters)
  end
```

This method requires four parameters:

- username
- name
- email
- password

One optional parameter which could included:

- role_id

The parameters are used within the method to contain important details a user will have. These
parameters are stored within the variable 'user_parameters' which is used as a within the 'User'
class' create function.

The parameters using other API files include:

- [role_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/role_api.rb)

At the current moment, role_id is not implemented as the associated API file is currently empty.

### Update Users

```ruby
  desc 'Allow updating of a user'
  params do
    optional :username, type: String, desc: 'The username used for login'
    optional :name, type: String, desc: 'The user\'s name'
    requires :email, type: String, desc: 'The email used for login'
    optional :password, type: String, desc: 'The in-no-way secure password'
    optional :role_id, type: Integer, desc: 'Role for the user'
  end
  put '/users/:id' do
    user_parameters = ActionController::Parameters.new(params)
      .permit(
        :username,
        :name,
        :email,
        :password,
        :role_id
      )

    update_user = User.find(params[:id])
    update_user.update! user_parameters
    present update_user, with: Entities::UsersEntity
  end
```

This method updates an existing Users, requiring one parameter:

- email

The remaining parameters are optional:

- username
- name
- password
- role_id

Parameters are placed within variable 'user_parameters'.

Within variable 'update_user' using 'User' class find function with User ID, it updates an existing
User using values within 'user_parameters'. This is presented to user via 'User' class.

### Delete Users with indicated ID

```ruby
  desc 'Delete the user with the indicated id'
  params do
    optional :id, type: Integer, desc: 'The id of the user to delete'
  end
  delete '/users/:id' do
    User.find(params[:id]).destroy!
    true
  end
```

This method requires an Users ID as a parameter. Should the User be found, it is deleted with the
destroy function within 'User' class.

### Get all categories

```ruby
  desc 'Get all the users'
  params do
    optional :filter, type: String, desc: 'Limit response to those users starting with this filter'
  end
  get '/users' do
    filter = params[:filter]
    if filter.nil?
      User.all
    else
      User.where('name LIKE ?', "#{filter}%")
    end
  end
end
```

This method unique in that it uses an if-else statement to determine if filters are being used. If
no filters are used, all existing Users are presented to the user. Otherwise, it will filter the
list of existing users for the specified user.

This is done using the
[User](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/models/user.rb#L1)
class.
