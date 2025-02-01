# Documentation - goals_api.rb

Github Link-
[goals_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/goals_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of goals
2. Creation of goals
3. Update goals
4. Delete goals with indicated ID
5. Get all goals

**Code does not perform validation currently, or anything relatively complex.**

**The goal service is currently partially implemented in the frontend with a created service, but no
data is being passed from to the backend. This file is linked to
[goal.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/goal.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods
- Formatting of creation/update goals needs to be fixed

### Retrieval of goals

```ruby
class GoalsApi < Grape::API
  desc 'Allow retrieval of a Goal'
  get '/goals/:id' do
    # Auth

    goal = Goal.find(params[:id])
    present goal, with: Entities::GoalsEntity
  end
```

Uses goals ID as a parameter within variable 'goal', where if it exists, it is presented to user
using CategoryQuestionsEntity class.

### Creation of goals

```ruby
 desc 'Allow creation of a Goal'
  params do
    requires :id, type: Integer, desc: 'ID of goal'
    requires :section_id, type: Integer, desc: 'section ID'
    requires :description, type: String, desc: 'description of goal'
    requires :status, type: String, desc: 'status of goal'
  end
  post '/goals' do
    goal_parameters = ActionController::Parameters
                           .new(params)
                           .permit(
                             :id,
                             :section_id,
                             :description,
                             :status
                           )

    # Auth...

    created_goal = Goal.create!(goal_parameters)

    present created_goal, with: Entities::GoalsEntity
  end
```

This method requires four parameters:

- id
- section_id
- description
- status

Used within variable 'created_goal' to create a goal, variable is presented to user via
['GoalsEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/goals_entity.rb#L2)
class.

The parameters used within this method are required for the creation of a student's goals, and
determines whether they achieve the goal or not within a section(Unit/Subject chapter). The
parameter 'section_id' is related to API file:

- [section_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/sections_api.rb)

### Update goals

```ruby
desc 'Allow updating of a Goal'
  params do
    requires :id, type: Integer, desc: 'ID of goal'
    optional :section_id, type: Integer, desc: 'section ID'
    optional :description, type: String, desc: 'description of goal'
    optional :status, type: String, desc: 'status of goal'
  end
  put '/goals/:id' do
    goal_parameters = ActionController::Parameters
                           .new(params)
                           .permit(
                             :section_id,
                             :description,
                             :status
                           )

    # Auth

    update_goal = Goal.find(params[:id])
    update_goal.update!(goal_parameters)

    present update_goal, with: Entities::GoalsEntity
  end
```

This method updates an existing goals, requiring one variable as necessary:

- id

Three variable as optional:

- section_id
- description
- status

Parameters are placed within variable 'goal_parameters'.

Within variable 'update_goal' using 'Goal' class find function with goals ID, it updates an existing
goals using values within 'goal_parameters'. This is presented to user via 'GoalsEntity' class.

### Delete goals with indicated ID

```ruby
desc 'Delete the Goal with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of the goal'
  end
  delete '/goals/:id' do
    Goal.find(params[:id]).destroy!

    return true
  end
```

This method requires an goals ID as a parameter. Should the goals be found, it is deleted using
'Goal' class' destroy function.

### Get all categories

```ruby
  desc 'Get all the goals'
  get '/goals' do
    goals = Goal.all

    present goals, with: Entities::GoalsEntity
  end
end
```

This method uses the 'Goal' class' all function, which acts as a value within the variable 'goals'
holding all existing goals.

This is presented to the user via 'GoalsEntity' class.
