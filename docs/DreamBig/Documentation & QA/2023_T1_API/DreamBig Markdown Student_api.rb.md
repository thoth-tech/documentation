# Documentation - student_api.rb

Github Link-
[student_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/student_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of Students
2. Creation of Students
3. Update Students
4. Delete Students with indicated ID
5. Get all Students

**Code does not perform validation currently, or anything relatively complex.**

**The students service is currently implemented in the frontend with a created service, data is sent
to the backend. This file is linked to
[student.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/student.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Fixing indentation within creatin/update methods

### Retrieval of Students

```ruby
class StudentApi < Grape::API
  desc 'Allow retrieval of a single student'
  get '/student/:id' do
    student_parameters = ActionController::Parameters.new(params)
      .permit(
        :id
      )

    # Auth

    student = Student.find(params[:id])
    present student, with: Entities::StudentEntity
  end
```

Uses a Students ID as a parameter, where if it is found, it is presented to the user via 'Section'
class. This method is unique since it requires a ID as a parameter to find a student.

### Creation of Students

```ruby
  desc 'Allow creation of a Student'
  params do
    requires :user_id, type: Integer, desc: 'student user'
    requires :firstName, type: String, desc: 'student first Name'
    requires :lastName, type: String, desc: 'student last Name'
    requires :phone, type: String, desc: 'student Phone number'
    requires :address, type: String, desc: 'student address'
    optional :student_type, type: String, desc: 'student type'
    optional :avatar_id, type: Integer, desc: 'avatar ID once created'

  end
  post '/student' do
    student_parameters = ActionController::Parameters.new(params)
      .permit(
        :firstName,
        :lastName,
        :phone,
        :address,
        :student_type,
        :user_id,
        :avatar_id
      )

    # Auth...

    created_student = Student.create!(student_parameters)

    present created_student, with: Entities::StudentEntity
  end
```

This method requires five parameters:

- user_id
- firstName
- lastName
- phone
- address

Two optional parameters which could included:

- student_type
- avatar_id

The parameters are used within the method to contain important details a student will have. These
parameters are stored within the variable 'student_parameters' which is used as a within the
'created_student' variable, using the
['StudentEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/student_entity.rb#L2)
class create function. This is presented to the user via the 'StudentEntity' class.

Should an avatar exist for the student, it will be used.

The parameters using other API files include:

- [user_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/users_api.rb)
- [avatar_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/avatar_api.rb)

'user_id' is used for an existing user account details which is related to the student. 'avatar_id'
is related to an existing students account avatar image.

### Update Students

```ruby
  desc 'Allow updating of a student'
  params do

    optional :firstName, type: String, desc: 'student first Name'
    optional :lastName, type: String, desc: 'student last Name'
    optional :phone, type: String, desc: 'student Phone number'
    optional :address, type: String, desc: 'student address'
    optional :user_id, type: Integer, desc: 'student user'
    optional :student_type, type: String, desc: 'student type'
    optional :avatar_id, type: Integer, desc: 'avatar ID once created'
  end
  put '/student/:id' do
    student_parameters = ActionController::Parameters.new(params)
      .permit(
        :firstName,
        :lastName,
        :phone,
        :address,
        :student_type,
        :user_id,
        :avatar_id
      )

    # Auth

    update_student = Student.find(params[:id])
    update_student.update! student_parameters

    present update_student, with: Entities::StudentEntity
  end
```

This method updates an existing Students, requiring only optional parameters:

- firstName
- lastName
- phone
- address
- student_type
- user_id
- avatar_id

Parameters are placed within variable 'student_parameters'.

Within variable 'update_student' using 'Student' class find function with Student ID, it updates an
existing Student using values within 'student_parameters'. This is presented to user via 'Student'
class.

### Delete Students with indicated ID

```ruby
  desc 'Delete the student with the indicated id'
  params do
    requires :id, type: Integer, desc: 'The id of the student to delete'
  end
  delete '/student/:id' do
    Student.find(params[:id]).destroy!
    true
  end
```

This method requires an Students ID as a parameter. Should the Student be found, it is deleted with
the destroy function within 'Student' class.

### Get all categories

```ruby
  desc 'Get all the students'
  get '/student' do
    students = Student.all

    present students, with: Entities::StudentEntity
  end
end
```

This method uses the 'all' function within the 'Student' class, which acts as a value within the
variable 'Students' holding all existing Students.

This is presented to the user via 'StudentEntity' class.
