# # 1. Variables and Scope
# ###
# CoffeeScript fixes one of the major bugbears with JavaScript,
# global variables.In JavaScript,
# it’s all too easy to accidentally declare a global variable by
# forgetting to include var before the variable assignment.
# CoffeeScript solves this by simply removing global variables.Behind the scenes,
# CoffeeScript wraps up scripts with an anonymous function,
# keeping the local context,
# and automatically prefixes all variable assignments with var.
# ###
# myVariable = "test"

# ###
# However, sometimes it’s useful to create global variables.
# You can either do this by directly setting them as
# properties on the global object(window in browsers),
# or with the following pattern:
# ###
# exports = this
# exports.MyVariable = "foo-bar"

# # 1.2.1 Functions
# func = -> "bar"

# # 1.2.2 Function Arguments
# times = (a = 1, b = 2) -> a * b

# sum = (nums...) ->
#   result = 0
# nums.forEach(n) -> result += n result

# # 1.2.3 Function Invocation
# a = "Howdy!"
# alert a
# # Equivalent to: alert(a)

# # 1.2.4 Function Context
# this.clickHandler = -> alert "clicked"
# element.addEventListener "click", (e) => this.clickHandler(e)

# # 1.3. Object Literals and Array Definition
# object1 = { one: 1, two: 2 }
# # Without braces
# object2 = one: 1, two: 2
# # Using new lines instead of commas
# object3 =
#     one: 1
#     two: 2
# User.create(name: "John Smith")

# # 1.4. Flow Control
# if true == true
#   "We're ok"
# if true != true then "Panic"
# # Equivalent to:
# #(1 > 0) ? "Ok" : "Y2K!"
# if 1 > 0 then "Ok" else "Y2K!"
    
# # String Interpolation
# favorite_color = "Blue. No, yel..."
# question = "Bridgekeeper: What... is your favorite color?
# Galahad: #{ favorite_color } Bridgekeeper: Wrong!
# "

# #Loops and Comprehensions
# for name in ["Roger", "Roderick", "Brian"]
#   alert "Release #{name}"

# for name, i in ["Roger the pickpocket", "Roderick the robber"]
#   alert "#{i} - Release #{name}"

# # iterating over properties in objects
# names = sam: seaborn, donna: moss
# alert("#{first} #{last}") for first, last of names


# # 1.5 Arrays
# #Ranges are created by two numerical values
# range = [1..5]
# firstTwo = ["one", "two", "three"][0..1]

# numbers = [0..9]
# numbers[3..5] = [-3, -4, -5]

# # 1.6 Aliases and the Existential Operator
# @saviour = true

# # Another is ::, which is an alias for prototype:
# User::first = -> @records[0]

# # null check before accessing a property
# blackKnight.getLegs()?.kick()

# #check that a property is actually a function, and callable
# blackKnight.getLegs().kick?()

# # 2 CoffeeScript Classes
# class Animal
# constructor: (name) ->
#   @name = name
#   # OR
# class Animal
#   constructor: (@name) ->

#   # 2.1 Instance Properties
# class Animal
#   price: 5
#   sell: =>
#     alert "Give me #{@price} shillings!"
# animal = new Animal $("#sell").click(animal.sell)

#   # prototypal inheritance to automatically
#   # inherit all of a class’s instance properties
#   # Not need to do
#   # class Parrot extends Animal
#   #   constructor: ->
#   #     super("Parrot")
# class Animal
#   constructor: (@name) ->
# class Parrot extends Animal
#   Animal::rip = true
    
# parrot = new Parrot("Macaw")
# alert("This parrot is no more") if parrot.rip

# # 3 CoffeeScript Idioms
# # 3.1 Each
# myFunction(item) for item in array

# # 3.2 Map
# result = (item.name for item in array)

# # 3.3 Filter
# result = (item for item in array when item.name is "test")

# # 3.4 Include
# string = "a long test string"
# included = !!~ string.indexOf "test"

# # 3.5 Property Iteration
# # CoffeeScript has already reserved in for use with arrays.
# # Instead, the operator has been renamed of,
# # and can be used like thus:
# object = {one: 1, two: 2}
# alert("#{key} = #{value}") for key, value of object

# # 3.6 AND/OR
# hash = null
# hash ?= {}

# # 3.7 Destructuring Assignments
# someObject = { a: 'value for a', b: 'value for b' }
# { a, b } = someObject

# # 3.8 External Libraries
# # Use local alias
# $ = jQuery
# $ ->
# # DOMContentLoaded $(".el").click ->
# alert("Clicked!")

# # 3.8 Private Variables
# # Execute function immediately
# type = do ->
# types = [
#   "Boolean"
#   "Number"
#   "String"
#   "Function"
#   "Array"
#   "Date"
#   "RegExp"
#   "Undefined"
#   "Null"
# ]
# # classToType is completely private,
# # and can never again be referenced outside the executing anonymous function.
# classToType = {}
# for name in types
#   classToType["[object " + name + "]"] = name.toLowerCase()

# # Return a function
# (obj) ->
#   strType = Object::toString.call(obj)
#   classToType[strType] or "object"