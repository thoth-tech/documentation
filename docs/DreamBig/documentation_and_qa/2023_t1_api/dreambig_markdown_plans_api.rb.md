# Documentation - plans_api.rb

Github Link-
[plans_api.rb](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/plans_api.rb)

**Requires [Grape Framework](https://github.com/ruby-grape/grape#what-is-grape)**

## Code performs the following

1. Retrieval of plans
2. Creation of plans
3. Update plans
4. Delete plans with indicated ID
5. Get all plans

**Code does not perform validation currently, or anything relatively complex.**

**The plans service is partially implemented with a created service, but no data is passed into the
backend. This file is linked to
[plan.service.ts](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-ui/src/app/services/plan.service.ts#L16)**

Future updates could include:

- Boolean checks
- More detail about methods

### Retrieval of plans

```ruby
class PlansApi < Grape::API
  desc 'Allow retrieval of a Plan'
  get '/plans/:id' do
    # Auth

    plan = Plan.find(params[:id])
    present plan, with: Entities::PlansEntity
  end
```

Uses a plans ID as a parameter, where if it is found, it is presented to the user via 'PlansEntity'
class.

### Creation of plans

```ruby
  desc 'Allow creation of a Plan'
  params do
    requires :id, type: Integer, desc: 'ID of plan'
    requires :section_id, type: Integer, desc: 'section ID'
    requires :goal_id, type: Integer, desc: 'goal ID'
    requires :plan_text, type: String, desc: 'details of the plan'
  end
  post '/plans' do
    plan_parameters = ActionController::Parameters
      .new(params)
      .permit(
        :id,
        :section_id,
        :goal_id,
        :plan_text
      )

    # Auth...

    created_plan = Plan.create!(plan_parameters)

    present created_plan, with: Entities::PlansEntity
  end
```

This method requires four parameters:

- id
- section_id
- goal_id
- plan_text

Used within variable 'created_plan' to create a plan, the variable is presented to user via
['PlansEntity'](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/entities/plans_entity.rb#L2)
class.

The parameter 'goal_id' and 'section_id' is related to API file:

- [section_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/sections_api.rb)
- [goal_id](https://github.com/thoth-tech/dream-big/blob/d72249d788068c71962e5a760ab1e15caef50ce5/dream-big-api/app/api/goals_api.rb)

'section_id' is used by the method to indicate which section the plan is made for, and the 'goal_id'
is used to indicate what is the goal of the plan/section.

### Update plans

```ruby
  desc 'Allow updating of a Plan'
  params do
    requires :id, type: Integer, desc: 'ID of plan'
    optional :section_id, type: Integer, desc: 'section ID'
    optional :goal_id, type: Integer, desc: 'goal ID'
    optional :plan_text, type: String, desc: 'details of the plan'
  end
  put '/plans/:id' do
    plan_parameters = ActionController::Parameters
      .new(params)
      .permit(
        :section_id,
        :goal_id,
        :plan_text
      )

    # Auth

    update_plan = Plan.find(params[:id])
    update_plan.update!(plan_parameters)

    present update_plan, with: Entities::PlansEntity
  end
```

This method updates an existing plans, requiring one variable as necessary:

- id

Three variable as optional:

- section_id
- goal_id
- plan_text

Parameters are placed within variable 'plan_parameters'.

Within variable 'update_plan' using 'Plan' class find function with plans ID, it updates an existing
plans using values within 'plan_parameters'. This is presented to user via 'PlansEntity' class.

### Delete plans with indicated ID

```ruby
  desc 'Delete the plan with the indicated id'
  params do
    requires :id, type: Integer, desc: 'ID of the plan'
  end
  delete '/plans/:id' do
    Plan.find(params[:id]).destroy!

    return true
  end
```

This method requires an plans ID as a parameter. Should the plans be found, it is deleted using
'Plan' class' destroy function.

### Get all categories

```ruby
  desc 'Get all the plans'
  get '/plans' do
    plans = Plan.all

    present plans, with: Entities::PlansEntity
  end
end
```

This method uses the 'Plan' class' all function, which acts as a value within the variable 'plans'
holding all existing plans.

This is presented to the user via 'PlansEntity' class.
