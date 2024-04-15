# Documentation - category_questions_api.rb

Github Link-
[category_questions_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/category_questions_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of category questions
2. Creation of category questions
3. Update category questions
4. Delete category questions with indicated ID
5. Get all categorie questions

**Code does not perform validation currently, or anything relatively complex.**

**The category question service is currently partially implemented in the frontend with a created
service, but no data is being sent to the backend. This file is found in
[category_question.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/category_question.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Bug in delete section, should be 'return true' line 123

### Retrieval of category questions

```ruby
class CategoryQuestionsApi < Grape::API
  desc 'Allow retrieval of an Answer in the Assessment'
  get '/category-questions/:id' do
    # Auth

    question = CategoryQuestion.find(params[:id])
    present question, with: Entities::CategoryQuestionsEntity
  end
```

Uses category questions ID as a parameter within variable 'category questions', where if it exists,
it is presented to user using CategoryQuestionsEntity class.

### Creation of category questions

```ruby
desc 'Allow creation of a Category Question'
  params do
    requires :id, type: Integer, desc: 'ID of the Category Question'
    requires :question, type: String, desc: 'question text'
    requires :category_id, type: Integer, desc: 'category ID'
  end
  post '/category-questions' do
    category_questions_parameters = ActionController::Parameters
        .new(params)
        .permit(
          :id,
          :question,
          :category_id
        )

    # Auth...

    created_category_question = CategoryQuestion.create!(category_questions_parameters)

    present created_category_question, with: Entities::CategoryQuestionsEntity
  end
```

This method requires a three parameter:

- id
- description
- category_id

Used within variable 'created_category_questions' to create an category questions, variable is
presented to user via
['CategoryQuestionsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/category_questions_entity.rb#L2)
class.

These parameters are used to create a question for the related category(unit/subject) which a
student will need to answer within their assessments. The parameter 'category_id' is related to API
file:

- [category_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/category_api.rb)

### Update category questions

```ruby
desc 'Allow updating a Category Question'
  params do
    requires :id, type: Integer, desc: 'ID of the Category Question'
    optional :question, type: String, desc: 'question text'
    optional :category_id, type: Integer, desc: 'category ID'
  end
  put '/category-questions/:id' do
    category_questions_parameters = ActionController::Parameters
        .new(params)
        .permit(
          :question,
          :category_id,
        )

    # Auth

    update_category_question = CategoryQuestion.find(params[:id])
    update_category_question.update!(category_questions_parameters)

    present update_category_question, with: Entities::CategoryQuestionsEntity
  end
```

This method updates an existing category questions, requiring one variable as necessary:

- id

Two variable as optional:

- description
- category_id

Parameters are placed within variable 'category_questions_parameters'.

Within variable 'update_category_question' using 'CategoryQuestion' class find function with
category questions ID, it updates an existing category question using values within
'category_questions_parameters'. This is presented to user via 'CategoryQuestionsEntity' class.

### Delete category questions with indicated ID

```ruby
desc 'Delete the Category Question with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of the Category Question'
  end
  delete '/category-questions/:id' do
    CategoryQuestion.find(params[:id]).destroy!
    true
  end
```

This method requires an category questions ID as a parameter. Should the category questions be
found, it is deleted using 'CategoryQuestion' class' destroy function.

### Get all categories

```ruby
desc 'Get all the catagory questions'
  get '/category-questions' do
    catagory_questions = CategoryQuestion.all

    present catagory_questions, with: Entities::CategoryQuestionsEntity
  end
end
```

This method uses the 'CategoryQuestionsEntity' class' all function, which acts as a value within the
variable 'categories' holding all existing category questions.

This is presented to the user via 'CategoryQuestionsEntity' class.
