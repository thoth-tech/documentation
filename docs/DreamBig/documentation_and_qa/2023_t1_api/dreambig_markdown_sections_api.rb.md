# Documentation - sections_api.rb

Github Link-
[sections_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/sections_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of Sections
2. Creation of Sections
3. Update Sections
4. Delete Sections with indicated ID
5. Get all Sections

**Code does not perform validation currently, or anything relatively complex.**

**The sections service is partially implemented in the frontend with a created service, but no data
is being sent to the backend. This file is linked to
[section.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/section.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Fixing indentation within creatin/update methods

### Retrieval of Sections

```ruby
class SectionsApi < Grape::API
  desc 'Allow retrieval of a Section'
  get '/sections/:id' do
    # Auth

    section = Section.find(params[:id])
    present section, with: Entities::SectionsEntity
  end
```

Uses a Sections ID as a parameter, where if it is found, it is presented to the user via 'Section'
class.

### Creation of Sections

```ruby
  desc 'Allow creation of a Section'
  params do
    requires :id, type: Integer, desc: 'ID of section'
    requires :planet_id, type: Integer, desc: 'planet ID'
    requires :category_id, type: Integer, desc: 'category ID'
  end
  post '/sections' do
    section_parameters = ActionController::Parameters
                          .new(params)
                          .permit(
                            :id,
                            :planet_id,
                            :category_id
                          )

    # Auth...

    created_section = Section.create!(section_parameters)

    present created_section, with: Entities::SectionsEntity
  end
```

This method requires three parameters:

- id
- planet_id
- category_id

Used within variable 'created_section' to create a section, the variable is presented to user via
['SectionsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/sections_entity.rb#L2)
class.

The parameter 'planet_id' and 'category_id' is related to API file:

- [planet_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/planets_api.rb)
- [category_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/category_api.rb)

'planet_id' is used by the method to indicate which planet is assigned to the section, and the
'category_id' is used to indicate what category is this section assigned to.

### Update Sections

```ruby
  desc 'Allow updating of a Section'
  params do
    requires :id, type: Integer, desc: 'ID of section'
    optional :planet_id, type: Integer, desc: 'planet ID'
    optional :category_id, type: Integer, desc: 'category ID'
  end
  put '/sections/:id' do
    section_parameters = ActionController::Parameters
                          .new(params)
                          .permit(
                            :planet_id,
                            :category_id
                          )

    # Auth

    update_section = Section.find(params[:id])
    update_section.update!(section_parameters)

    present update_section, with: Entities::SectionsEntity
  end
```

This method updates an existing Sections, requiring one variable as necessary:

- id

Two variable as optional:

- planet_id
- category_id

Parameters are placed within variable 'section_parameters'.

Within variable 'update_section' using 'Section' class find function with Section ID, it updates an
existing Reflection using values within 'section_parameters'. This is presented to user via
'Section' class.

### Delete Sections with indicated ID

```ruby
  desc 'Delete the Section with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of the section'
  end
  delete '/sections/:id' do
    Section.find(params[:id]).destroy!

    return true
  end
```

This method requires an Sections ID as a parameter. Should the Sections be found, it is deleted with
the destroy function within 'Section' class.

### Get all categories

```ruby
  desc 'Get all the selections'
  get '/sections' do
    sections = Section.all

    present sections, with: Entities::SectionsEntity
  end
end
```

This method uses the 'all' function within the 'Section' class, which acts as a value within the
variable 'sections' holding all existing Sections.

This is presented to the user via 'SectionsEntity' class.
