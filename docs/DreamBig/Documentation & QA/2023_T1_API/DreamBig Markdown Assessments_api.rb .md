# Documentation - assessments_api.rb

Github Link-
[assessments_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/assessments_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of assessments
2. Creation of assessments
3. Update assessments
4. Delete assessments with indicated ID
5. Get all assessments

**Code does not perform validation currently, or anything relatively complex.**

Future updates could include:

- Boolean checks
- More detail about methods
- Changes in general

### Retrieval of assessments

```ruby
    class AssessmentsApi < Grape::API
        desc 'Allow retrieval of an Answer in the Assessment'
        get '/assessments/:id' do
            # Auth

            assessment = Assessment.find(params[:id])
            present assessment, with: Entities::AssessmentsEntity
        end
```

Uses assessment ID as a parameter within variable 'assessment', where if it exists, it is presented
to user using AssessmentsEntity class.

### Creation of assessments

```ruby
    desc 'Allow creation of an Assessments'
    params do
        requires :id, type: Integer, desc: 'Assessment ID'
        requires :journey_id, type: Integer, desc: 'Journey ID'
        requires :category_id, type: Integer, desc: 'category ID'
    end
    post '/assessments' do
        assessments_parameters = ActionController::Parameters.new(params)
        .permit(
            :id,
            :journey_id,
            :category_id
        )

        # Auth...

        created_assessment = Assessment.create!(assessments_parameters)

        present created_assessment, with: Entities::AssessmentsEntity
    end
```

This method requires three parameters:

- id
- journey_id
- category_id

Used within variable 'created_assessment' to create an answer, variable is presented to user via
['AssessmentsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/assessments_api.rb)
class.

The parameters journey_id and category_id are related to the API files:

- [journeys_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/journeys_api.rb)
- [category_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/category_api.rb)

These is to specify what student's journey these assessments belong to, and for which category
(essentialy a subject/unit) they are undertaking.

### Update assessments

```ruby
    desc 'Allow updating of a Assessments'
    params do
        requires :id , type: Integer, desc: 'Assessment ID'
        optional :journey_id, type: Integer, desc: 'Journey ID'
        optional :category_id, type: Integer, desc: 'category ID'

    end
    put '/assessments/:id' do
        assessments_parameters = ActionController::Parameters.new(params)
        .permit(
            :journey_id,
            :category_id
        )

        # Auth

        update_assessment = Assessment.find(params[:id])
        update_assessment.update! assessments_parameters

        present update_assessment, with: Entities::AssessmentsEntity
    end
```

This method updates an existing answer, requiring one variable as a parameter and three as optional:

Required:

- ID

Optional:

- journey_id
- category_id

Parameters are placed within variable 'answers_parameters'.

Within variable 'update_assessment' using 'Assessment' class find function with assessment ID, it
updates an existing assessment using values within 'assessment_parameters'. This is presented to
user via 'AssessmentsEntity' class.

### Delete assessments with indicated ID

```ruby
    desc 'Delete the Assessments with the indicated id'
    params do
        requires :id, type: Integer, desc: 'Assessment ID'
    end
    delete '/assessments/:id' do
        Assessment.find(params[:id]).destroy!
        return true
    end
```

This method requires an assessment ID as a parameter. Should the assessment be found, it is deleted
using 'Assessment' class' destroy function.

### Get all assessments

```ruby
        desc 'Get all the assessments'
        get '/assessments' do
            assessments = Assessment.all

            present assessments, with: Entities::AssessmentsEntity
        end
    end
```

This method uses the 'Assessment' class' all function, which acts as a value within the variable
'Assessment' holding all existing assessments.

This is presented to the user via 'AssessmentsEntity' class.
