/* eslint-disable max-len */
/*
1.
OOP is a programming paradigm that uses objects to organize code and interact with each other.
It is a distinct from procedural programming taught in JS100, JS101, and JS110.
(Procedure programming uses variable declarations, conditionals, loops, and function calls in a logical sequence.)

2.
JavaScript is sometimes considered not OO because it doesn't define classes the way other languages do.
But it is OO in the truest sense that objects point to other objects for inheritance.

3.
OOP is easier to read, maintain, and change.

4.
OOP can be longer, less efficient, and require more memory, disk space, and computing power.

5.
Encapsulation refers to the bundling of state (data/properties) and behavior (operations/methods) in a single object.

6.
JavaScript doesn't support access restrictions which prevent objects from being mutated by other objects.

7.
An object having access to properties and methods not defined on itself but rather another object.

8.
JavaScript doesn't define classes (or methods) in the same way as other OOP languages.
In JavaScript inheritance is established through the prototype chain.

9.
Prototypal inheritance is when one object is the prototype of another object.

10.
It's an internal property that points to another object. When a property is accessed on the object and isn't found,
JavaScript then searches the object referenced by [[Prototype]].

23.
The prototype of an object is itself an object from whom that object can access properties (including methods)
without having them defined on itself.

.prototype is an object that is a property of all function objects. When a function is called a constructor to create a new instance (object), the [[Prototype]] property of that object points to the .prototype of the constructor (function).

[[Prototype]] is the same as __proto__ ("dunder proto") which is deprecated. This is the internal property of all created objects that is used to search for properties (and methods) when they are not defined on the object.

- Object prototype is [[Prototype]]

- Function prototype is .prototype

32.
.bind(shirt)
someVar.call(shirt)
someVar.apply(shirt)

33.
self
arrow function
.bind(this) after closing curly bracket of innermost function
second parameter (context) to function with this as argument

34.
The new keyword invokes a function as a constructor (PascalCase is merely syntactic).
If the new keyword is not used when an instance of a class is defined, an error is thrown.

35.
Most built-in constructors are scope-safe such as Array, Object, and Date.
Custon scope-safe constructors can also be defined.
Scope-safe constructors are called as constructors regardless of whether the new keyword is used.
Otherwise, constructors called without the new keyword will be called as regular functions and will likely not work as intended.

36.
A factory function returns an object using object literal syntax. The created objects (instances)
have the same property names and methods, and the property values are determined by the
arguments supplied to the factory function when the instances are created.

There is no way to determine which factory function created any of the instances.

Factories are memory-inefficient because each instance receives a copy of every method.

37.
When the [[Prototype]] of an object points to another object using Object.create

38.
Constructor functions are named by programmers using PascalCase instead of camelCase,
but this is merely syntactical, and any function can be called as a constructor.

The this keyword assigns property names and values each instance of the constructor.
Instances share property names, and the values are determined by the arguments supplied
to the constructor each time an instance is created (each time the constructor is called)

Methods must be defined on the .prototype property (an object) of the constructor
so that the instances (objects) of the constructor have access to those methods.

39.
The pattern defines an object literal with an init method that sets the properties of an instance when the method is called (and returns the object).
In conjunction with using Object.assign, the instance inherits the methods defined on the object literal.

40.

What is es6 classes

In Javascript, inheritance is established through the prototype chain,
and one way to do this is through the use of constructor functions.
This is called the pseudo-classical method or the constructor/prototype method.
The class keyword is mostly a different syntax for this constructor/prototype method.

Classes can be defined as class declarations or class expressions like other function because classes are constructor functions.
The extends keyword establishes one class as the subtype of another.
And the super keyword calls a method in the super-type class to be invoked with an instance of the sub-type as context.

The class keyword also removes the need to reset the constructor and generally is considered a more concise syntax that the constructor/prototype method.
Lastly, the new keyword is required when creating an instance of a class.
The class keyword was introduced to help developers who are used to OOP in other lanaguages.

The new keyword is required when creating an instance of a class.
Class declarations are not hoisted like other function declarations.
(Properties aren't separated by commas.)
All code executes in strict mode.
You cannot resassign the [[Prototype]]

41.
The super keyword is used within a sub-class definition to invoke the constructor method of its super-class
passing in some or all of the arguments in its own constructor method. This is equivalent to using call within a sub-type constructor to
invoke the super-type constructor with an instance of the sub-type constructor set as the value of the this keyword.

42.
Built-in constructors include Array, Object, Date, String, Number, and Boolean and can be used to create object instances of those data types.

43.
There are both string primitives and string objects in JavaScript. When methods are called on string primitives,
JavaScript wraps them in string objects, calls the method, returns the appropriate value, and then discards the string object.
As a rule, it is best not to create string objects explicitly. There are object forms for the other primitive data types as well.

44.
Scope-safe constructors are constructors that are called as constructors regardless of whether the new keyword is used.

function Dog(name, age) {
  if (!(this instanceof Dog)) {
    return new Dog(name, age);
  }

  this.name = name;
  this.age = age;
}

let charlie = new Dog('Charlie', 12);
let linus = Dog('Linus', 13);

*/