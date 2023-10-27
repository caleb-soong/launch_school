/* eslint-disable max-len */
/*
LS Study Guide
Objects, object factories, constructors and prototypes, OLOO, and ES6 classes
  -Object is a (non-primitive) data type in JavaScript.
  -Objects are collections of unordered key-pair values. The keys are the property names (properties) and the values are the property values.
  -Objects group together related data and code.
  -Objects are useful when more than one instance of something is needed.
  -Objects become more useful for larger codebases.
  -Arrays are objects whose keys are the indices.
  -Object factories are functions that return object literals with predetermined property names, property values determined
  by the arguments supplied to the factory function during each invocation, and predetermined methods.
  -Constructors (constructor functions) are functions intended to be invoked with the new keyword.
    -The constructor/prototype pattern is also called the pseudo-classical pattern.
    -They are named using PascalCase as opposed to camelCase, but this is merely syntatic convention.
      -This means whether a function is a constructor or not a constructor is based on how it's invoked, not how it's defined.
      -Any function (except arrow functions which have no prototype) can be invoked with or without the new keyword.
      -Methods can be invoked with new unless they are defined using concise syntax (concise methods).
    -Constructors use the this keyword within their function bodies to set properties on the instances.
    -Methods to be inherited by instances of the are defined on the constructor prototype (function prototype).
      -Instances do not contain individual copies of the methods.
    -When a constructor is invoked with the new keyword, the following happens:
      -a new object (instance) is created (which is typically assigned to a variable on the same line as the function invocation)
      -the this keyword points to the newly created object
      -the new object's [[prototype]] is set to reference the constructor prototype
      -the constructor is invoked (which sets the properties of the instance)
      -the new object is returned (unless the constructor explicitly returns a different object)
    -Scope-safe constructors that constructors are implicitly called with the new keyword inside the function body
    regardless of whether the new keyword is used during the invocation.
      -Most, but not all, of JavaScript's built-in constructors, such as Object, RegExp, and Array, are scope-safe. String is not.
  -In JavaScript, the word prototype can refer to two distinct but related things.
      -All functions (except arrow functions) have a property named `prototype`
      -All objects (including functions) have a [[prototype]] property
  -OLOO (objects linking to other objects)
    -Manually define a prototype object
      -Add the instance methods.
      -Add an init method (could be named anything) that uses the this keyword to assign the properites of the instance and return the instance.
    -Use Object.create to create an instance and chain the init method passing in the instance properties as the arguments.
  -ES6 Classes
    -different syntax for the constructor/prototype pattern (for the most part)
    -new keyword must be used to avoid a TypeError
    -no commas between the methods
    -use concise methods
    -typeof returns 'function'
    -all code in class executes in strict mode
    -class declarations are not hoisted
    -the prototype of a class cannot be reassigned
      -error in strict mode
      -silently fails otherwise
Methods and properties; instance and static methods and properties
  -methods are properties whose values are functions
    -since methods are properties, it makes sense that both can be inherited
    -instance properties are the properties of an instance and are the own properties of that instance
    -instance methods are the methods of an instance and can be stored directly on the instance (own properties) or, more commmonly,
    they can be defined on the object's [[prototype]] or anywhere up the object's prototype chain
    -static properities are defined and accessed directly on the constructor and
    should be used when a property would be the same for all instances of that type
    -static methods are defined and accessed directly on the constructor and
    should be used when a method would be the same for all instances of that type
Prototypal and pseudo-classical inheritance
  -prototypal inheritance (prototypal delegation) (object inheritance) works with one object at time
    -an object's [[prototype]] property points to another object
  -pseudo-classical object contruction is the constructor/prototype pattern (pseudo-classical inheritance) (constructor inheritance)
    -an instance's [[prototype]] property points to the object referenced by the constructor prototype
Encapsulation
  -bundling related state (data/properties) and behavior (operations/methods) into a single object
  -In most languages, encapsulation also refers to access restrictions which JavaScript doesn't support.
Polymorphism
  -Inheritance
    -objects of different subtypes inherit from a superclass
    -the subtypes define different methods with the same name but the implementation can be different
    -the code that uses the methods doesn't care that the objects are of different types
    -method overriding is considered an aspect of inheritance
  -Duck typing
    -objects are different and unrelated meaning one does not inherit from the other
    -objects respond to the same method name and take the same number of arguments
Collaborator objects
  -objects that are the property values in other objects and are used to represent state
  -You can access the properties of the collaborator from the parent object.
Single vs multiple inheritance
  -Single inheritance means an object can only have one prototype.
  -JavaScript doesn't support multiple inheritance, and it doesn't have classes the same way other languages do
Mix-ins; mix-ins vs. inheritance
  -mix-ins are objects from which other objects (instances of constructors or classes) can inherit using Object.assign
  -In JavaScript, the use of mixins is the workaround for lack of multiple inheritance
  -Object.assign assigns the mixin as a property or method to the prototype of the constructor or class
Methods and functions; method invocation vs. function invocation
  -For regular function calls, in strict mode, implicit this is undefined. Otherwise, it is the global object.
  -For method calls, implicit this is the object that contains the method (method execution context).
  -For constructor calls, implicit this is the newly created object.
  -Methods defined with concise syntax cannot be called with the new keyword
Higher-order functions
  -functions that either accept another function as an argument (including built-in functions such as map, filter, forEach)
The global object
  -an object that is automatically created when a program begins running that contains values and functions available anywhere in the program
  -Variables declared without let, const, or var are assigned as properties of the global object.
    -Such variables can be accessed without using the global object as the caller.
Method and property lookup sequence
  -JavaScript will first check the object for the property/method then go up the prototype chain until returning undefined if the prototype is null.
Function execution context and this
  -the environment in which a function executes which in JavaScript is the value of the this keyword
Implicit and explicit execution context
  -Implicit execution context is determind by how a function is invoked not by how a function is defined.
    -For regular function calls, in strict mode, implicit this is undefined. Otherwise, it is the global object.
    -For method calls, implicit this is the object that contains the method (method execution context).
    -For constructor calls, implicit this is the newly created object.
  -Explicit execution context is provided by calling a function with the call, apply, or bind methods and supplying the context as the argument.
Dealing with context loss
  -Method copied from object:
    -Have the function that uses the method accept the original context (object) as a second (or additional) argument.
      -forEach, map, filter, every, and some accept thisArg as the second argument.
    -Use the bind method when you pass the method to the function.
      -If you use bind once, then you can call the function repeatedly without losing context.
      -If you use bind when you pass the method to the function, then you can't see that during the invocation of the function.
  -Inner function not using the surrounding context OR Function as argument losing surrounding context:
    -Define a variable in the outer scope (self).
    -Call inner function with call or apply.
    -Call bind on inner function and assign the new returned function to a variable.
      -This can be done with a function expression or a function declaration using an extra variable on a subsequent line.
    -Use an arrow function (similar to bind in that the context cannot be changed).
      -Most common of the four techniques.
call, apply, and bind
  -methods that all functions have (functions are objects)
  -Call calls a function using its first argument as the explicit execution context.
  -Apply takes an array of arguments as the second argument.
  -Instead of apply, you can use call with the spread operator.
  -Unlike call and apply, the bind method doesn't invoke (or alter) the original function. Rather, it returns (and doesn't invoke) a new function.
  -After using bind, you can't change the execution context even if you use call, apply, or bind again.
Object.assign and Object.create
  -Object.assign copies all enumerable properties from one or more source objects (without modyfing any of them)
  to a target object and returns that modified target object.
    -The first argument is the target object, and subsequent arguments are the source objects.
  -Object.create creates a new object whose [[prototype]] property is a reference to the object passed in as the first argument.
    -If no other arguments are passed in, then the newly created object is empty in that it doesn't have any own properties.
    -Any subsequents arguments passed in will become own properties of the newly created object.
Built-in constructors like Array, Object, String and Number
  -Array
    -scope-safe
    -instance methods
      -fill replaces all elements with the provided value
        -fill can be chained when an array is created if the argument to the constructor is a single number indicating the array length
      -forEach returns undefined
      -map returns a new array
      -filter returns a new array
      -includes returns a boolean
      -toString returns the elements joined by commas
    -static methods
      -isArray returns a boolean indicating if the argument is an array
        -typeof won't work because it will say arrays are objects and not specifically arrays
      -from takes an array-like object and returns an array
  -Object
    -scope-safe
    -instance methods (arrays also have access to these)
      -hasOwnProperty
      -isPrototypeOf
      -toString by default returns '[object Object]'
    -statics methods
      -assign
      -create
      -entries
      -freeze
      -isFrozen
      -keys
      -values
  -Date
    -scope-safe
    -the Date constructor creates objects (date objects)
      -when no arguments are passed, the date will be the current time
    -instance methods
      -toString returns a string that represents that date
      -getFullYear returns the year as a number
      -getDay returns a number 0-6 where 0 is Sunday
  -String
    -not scope safe
      -When called without the new keyword, a string primitive is returned rather than a string object
    -instance methods
      -valueOf returns the string primitive of a string object
  -Number
    -not scope safe
      -When called without the new keyword, a number primitive is returned rather than a number object
  -Boolean
    -not scope safe
      -When called without the new keyword, a boolean primitive is returned rather than a boolean object
Reading OO code

Notes:

The classical approach to planning an object-oriented application includes several steps:

Write a textual description of the problem or exercise.
Extract the significant nouns and verbs from the description.
Organize and associate the verbs with the nouns.

Dot notation === member access notation
Bracket notation === computed member access notation

Another indirect way of checking for property existence is to enumerate the properties of an object via Object.keys or Object.getOwnPropertyNames.
Both return an array of the object’s properties.
The difference is that Object.keys returns an array of enumerable properties
while Object.getOwnPropertyNames returns all properties regardless if they’re enumerable or not.

A for/in loop iterates over an object's properties. The iteration includes properties from the objects in its prototype chain.
Use hasOwnProperty to skip the prototype properties.

Object.keys returns an object's "own" property keys -- you do not need to use hasOwnProperty.

Not all properties are enumerable. In particular, most properties and methods of the built-in types are not.
Usually, any properties or methods you define on for an object are enumerable.
You can check whether a property is enumerable with the Object.prototype.propertyIsEnumerable method.

The function name given to a function expression is not visible in the scope that includes the function expression.

Object.getPrototypeOf vs. obj.isPrototypeOf (checks for prototype relationships)

Object.getOwnPropertyNames vs. obj.hasOwnProperty (test whether an object owns a property)
*/