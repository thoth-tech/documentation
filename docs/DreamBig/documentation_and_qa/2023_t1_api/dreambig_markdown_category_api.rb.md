# Documentation - category_api.rb

Github Link-
[category_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/category_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of category
2. Creation of category
3. Update category
4. Delete category with indicated ID
5. Get all categories

**Code does not perform validation currently, or anything relatively complex.**

**The category service is currently implemented with the frontend with a created service. This can
be found in
[category.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/category.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Should change imgpath to be a requirement since there is only 1 parameter
- Bug on line 89, update method should include brackets '()' for category parameter

### Retrieval of category

```ruby
class CategoryApi < Grape::API
  desc 'Allow retrieval of a single category'
  get '/category/:id' do
    # Auth

    category = Category.find(params[:id])
    present category, with: Entities::CategoryEntity
  end
```

Uses category ID as a parameter within variable 'category', where if it exists, it is presented to
user using CategoryEntity class.

### Creation of category

```ruby
desc 'Allow creation of a category'
  params do
    requires :name, type: String, desc: 'Category name'
    requires :description, type: String, desc: 'The description of the category'
  end
  post '/category' do
    category_parameters = ActionController::Parameters.new(params)
      .permit(
        :name,
        :description
      )

    # Auth...

    created_category = Category.create!(category_parameters)

    present created_category, with: Entities::CategoryEntity
  end
```

This method requires a two parameter:

- name
- description

Used within variable 'created_category' to create an category, variable is presented to user via
['CategoryEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/category_entity.rb#L2)
class.

A category acts as a student's unit/subject. Under this, there would be questions which the student
will need to answer for their assessment.

### Update category

```ruby
desc 'Allow updating of a categories'
  params do
    optional :name, type: String, desc: 'The category name'
    optional :description, type: String, desc: 'The description of the category'
  end
  put '/category/:id' do
    category_parameters = ActionController::Parameters.new(params)
      .permit(
        :name,
        :description
      )

    # Auth

    update_category = Category.find(params[:id])
    update_category.update! category_parameters

    present update_category, with: Entities::CategoryEntity
  end
```

This method updates an existing category, requiring two variable as optional:

- name
- description

Parameters are placed within variable 'category_parameters'.

Within variable 'update_category' using 'Category' class find function with category ID, it updates
an existing category using values within 'category_parameters'. This is presented to user via
'CategoryEntity' class.

### Delete category with indicated ID

```ruby
desc 'Delete the category with the indicated id'
  params do
    requires :id, type: Integer, desc: 'The id of the category to delete'
  end
  delete '/category/:id' do
    Category.find(params[:id]).destroy!
    return true
  end
```

This method requires an category ID as a parameter. Should the category be found, it is deleted
using 'Category' class' destroy function.

### Get all categories

```ruby
desc 'Get all the categories'
  get '/category' do
    categories = Category.all

    present categories, with: Entities::CategoryEntity
  end
end
```

This method uses the 'CategoryEntity' class' all function, which acts as a value within the variable
'categories' holding all existing category.

This is presented to the user via 'CategoryEntity' class.
