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

OOP
let dog = {
  name: 'Charlie',
  bark() {
    console.log(`${this.name} says "ROO ROO ROO!"`);
  }
};

dog.bark();

Procedural
let dog = 'Charlie';

function bark(dog) {
  console.log(`${dog} says "ROO ROO ROO!"`);
}

bark(dog);

6.
JavaScript doesn't support access restrictions which prevent objects from being mutated by other objects.
Objects expose a public interface for interacting with other objects.

7.
An object having access to properties and methods not defined on itself but rather another object.

8.
JavaScript doesn't define classes (or methods) in the same way as other OOP languages.
In JavaScript inheritance is established through the prototype chain.

9.
Prototypal inheritance is when one object is the prototype of another object.

let mammal = {
  breathe() {
    console.log('breathing');
  }
};

let dog = Object.create(mammal);

dog.name = 'Charlie';

console.log(dog.hasOwnProperty('name'));
console.log(dog.hasOwnProperty('breathe'));
dog.breathe();

10.
It's an internal property that points to another object. When a property is accessed on the object and isn't found,
JavaScript then searches the object referenced by [[Prototype]].

11.
let dogPrototype = {
  makeSound() {
    console.log('sound');
  }
};

let dog = Object.create(object);
// OR
let dog = {};
Object.setPrototypeOf(dog, dogPrototype);

dog.makeSound();
console.log(dog.hasOwnProperty('makeSound'));

12.
Object.create establishes inheritance by creating an object and setting its [[Prototype]] to the object passed in as the (first) argument.
The newly created object will not have its "own" properties but will have access to those on the prototype object.
Object.create can establish inheritance with custom objects or with the .prototype property of a function object.

Object.assign copies the properties from one or more source objects to a target object, thus mutating it, but it does not establish
inheritance because it does not set or change the [[Prototype]] of the target object.
Object.assign can be useful to add properties to an object whose [[Protoype]] is better suited for a different object
as JavsScript does not support multiple inheritance. In particular, Object.assign is used to add properties from mixin objects
to other objects.

13.
Object.setPrototypeOf is a static method that changes the [[Prototype]] of one object to another object.
The first argument is the object whose [[Prototype]] is set to reference the object that is the second argument.

14.
Pseudo-classical inheritance involves prototypal inheritance between an instance of a constructor and the constructor.
Specifically, the [[Prototype]] of the instance references the .prototype of the constructor. More generally,
prototypal inheritance can be between any two objects when one object's [[prototype]] references the other object.

15.
JavaScript does not support multiple inheritance. An object's [[prototype]] can only reference one object at a time.

16.
Mixins (custom objects) can be used to add properties to different objects that do not share the same [[Prototype]].
The objects belong to different classes, but for the purpose of code reuse, it's better to define a mixin.

17.
Polymorphism is the ability of unrelated objects to respond to the same method invocation. The benefit of polymorphism
is being able to invoke the same method or callback function on objects of different types.

18.
Polymorphism through inheritance

class Weapon {
  shoot() {}
}

class Charger extends Weapon {
  shoot() {
    console.log('sniping');
  }
}

class Splatling extends Weapon {
  shoot() {
    console.log('spraying');
  }
}

class Roller extends Weapon {}

class Brush extends Weapon {}

let weapons = [new Charger(), new Splatling(), new Roller(), new Brush()];
weapons.forEach(weapon => weapon.shoot());

Polymorphism through duck typing

let string = 'string';
let array = ['a', 'r', 'r', 'a', 'y'];

[string, array].forEach(element => console.log(element.includes('r')));

19.

20.
A mixin is an object with properties that should be assigned to objects of different types
who do not share the same [[Prototype]].

21.
Use inheritance for an "is a" relationship when one object is a type of another object.
Use a mixin for a "has a" relationship with one object has a certain attribute or ability.

22.
Member access notation (dot notation) and computed member access notation (bracket notation)
are two different ways to access object properties. Bracket notation accepts any expression that
evaluates to a value, but dot notation requires valid variable names. Dot notation also
coerces to a string and searchess the object for a property with that string as the key.

function assignProperty(object, property, value) {
  object[property] = value;
}

let person = {};

assignProperty(person, 'name', 'Caleb');

console.log(person);

23.
The word prototype usually refers to object prototype but can also refer to function prototype.

.prototype is an object that is a property of all function objects.
When a function is called as a constructor to create a new instance (object),
the [[Prototype]] property of that object points to the .prototype of the constructor (function).

The [[Prototype]] of an object is itself an object from whom that object can access properties (including methods)
without having them defined on itself.

[[Prototype]] is the same as __proto__ ("dunder proto") which is deprecated.
This is the internal property of all created objects that is used to search for properties (and methods) when they are not defined on the object.

- Object prototype is [[Prototype]] or __proto__.

- Function prototype is .prototype

24.
If a property is accessed on an object and not found on the object, JavaScript will search for the property on the object's [[Prototype]].
Since every object has a [[Prototype]], a prototype chain can be formed between several objects, and JavaScript will search the entire prototype
chain until it find the property or returns undefined because the [[Prototype]] of an object is null.

25.
A prototype is a link between objects when one object's [[Protoype]] points to another object whose own [[Prototype]] points to another object, and so on.

26.
A bare object is an object whose [[Prototype]] is null.

let bareObject = Object.create(null);
console.log(Object.getPrototypeOf(bareObject) === null);

27.
The global object is an object that is implicity available to any JavaScript program and contains many built-in properties.
It can be mutated like other objects. In node its value is global and in a browser its value is window.

console.log(global);

28.
Execution context is the context in which a function is invoked. In JavaScript it is the value of the this keyword.

29.
Implicit execution context is when JavaScript determines execution context implicitly. Outside of functions,
the value this is the global object or undefined in strict mode. Within functions, the value of this depends
on how the function is invoked.

For regular function calls, the value of this is still the global object.
For constructor calls, the value of this is the newly created instance.
For method calls, the value of this is the object that contains the method.

30.
Explicit execution context is when execution context is set to a specific object explicitly using call, apply, or bind.

31.
The this keyword is the execution context of a function invocation.

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

function makeWeapon(range, fireRate, damage) {
  return {
    range,
    fireRate,
    damage,
    shoot() {
      console.log('shooting ink');
    },
    refill() {
      console.log('refilling ink');
    },
  };
}

let dualie = makeWeapon(10, 90, 36);
console.log(dualie);
dualie.shoot();
dualie.refill();

37.
Constructor functions are named by programmers using PascalCase instead of camelCase,
but this is merely syntactical, and any function can be called as a constructor.

The this keyword assigns property names and values to each instance of the constructor.
Instances share property names, and the values are determined by the arguments supplied
to the constructor each time an instance is created (each time the constructor is called)

Methods must be defined on the .prototype property (an object) of the constructor
so that the instances (objects) of the constructor have access to those methods.

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

let charlie = new Dog('Charlie', 12);

console.log(Object.getPrototypeOf(charlie) === Dog.prototype);

38.
const booyahBombMixin = {
  booyahBomb() {
    console.log('BOOYAH!');
  }
};

class Weapon {
  constructor(range, fireRate, damage) {
    this.range = range;
    this.fireRate = fireRate;
    this.damage = damage;
  }

  shoot() {
    console.log('shooting ink');
  }

  refill() {
    console.log('refilling ink');
  }
}

class Dualie extends Weapon {
  dodgeRoll() {
    console.log('rolling');
  }
}

class GooglaDualies extends Dualie {}

Object.assign(GooglaDualies.prototype, booyahBombMixin);

class Slosher extends Weapon {
  constructor(range, fireRate, directDamage, splashDamage) {
    super(range, fireRate);
    this.directDamage = directDamage;
    this.splashDamage = splashDamage;
  }
}

class SloshingMachine extends Slosher {}

Object.assign(SloshingMachine.prototype, booyahBombMixin);

39.
The pattern defines an object literal with an init method that sets the properties of an instance when the method is called (and returns the object).
In conjunction with using Object.assign, the instance inherits the methods defined on the object literal.

const booyahBombMixin = {
  booyahBomb() {
    console.log('BOOYAH!');
  }
};

function Weapon(range, fireRate, damage) {
  this.range = range;
  this.fireRate = fireRate;
  this.damage = damage;
}

Weapon.prototype.shoot = function() {
  console.log('shooting ink');
};

Weapon.prototype.refill = function() {
  console.log('refilling ink');
};

function Dualie(range, fireRate, damage) {
  Weapon.call(this, range, fireRate, damage);
}

Dualie.prototype = Object.create(Weapon.prototype);
Dualie.prototype.constructor = Dualie;

Dualie.prototype.dodgeRoll = function() {
  console.log('rolling');
};

function GooglaDualies(range, fireRate, damage) {
  Dualie.call(this, range, fireRate, damage);
}

GooglaDualies.prototype = Object.create(Dualie.prototype);
GooglaDualies.prototype.constructor = GooglaDualies;

Object.assign(GooglaDualies.prototype, booyahBombMixin);

function Slosher(range, fireRate, directDamage, splashDamage) {
  Weapon.call(this, range, fireRate);
  this.directDamage = directDamage;
  this.splashDamage = splashDamage;
}

Slosher.prototype = Object.create(Weapon.prototype);
Slosher.prototype.constructor = Slosher;

function SloshingMachine(range, fireRate, directDamage, splashDamage) {
  Slosher.call(this, range, fireRate, directDamage, splashDamage);
}

SloshingMachine.prototype = Object.create(Slosher.prototype);
SloshingMachine.prototype.constructor = SloshingMachine;

Object.assign(SloshingMachine.prototype, booyahBombMixin);

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

const booyahBombMixin = {
  booyahBomb() {
    console.log('BOOYAH!');
  }
};

class Weapon {
  constructor(range, fireRate, damage) {
    this.range = range;
    this.fireRate = fireRate;
    this.damage = damage;
  }

  shoot() {
    console.log('shooting ink');
  }

  refill() {
    console.log('refilling ink');
  }
}

class Dualie extends Weapon {
  dodgeRoll() {
    console.log('rolling');
  }
}

class GooglaDualies extends Dualie {}

Object.assign(GooglaDualies.prototype, booyahBombMixin);

class Slosher extends Weapon {
  constructor(range, fireRate, directDamage, splashDamage) {
    super(range, fireRate);
    this.directDamage = directDamage;
    this.splashDamage = splashDamage;
  }
}

class SloshingMachine extends Slosher {}

Object.assign(SloshingMachine.prototype, booyahBombMixin);

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

console.log(charlie instanceof Dog);
console.log(linus instanceof Dog);
console.log(Object.getPrototypeOf(charlie) === Dog.prototype);
console.log(Object.getPrototypeOf(linus) === Dog.prototype);

*/