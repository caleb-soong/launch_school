/* eslint-disable max-len */

let dog1 = {
  name: 'Charlie',
  age: 12,
  bio: `${this.name} is a dog who is ${this.age} years old.`,
  introduce: () => {
    return `My name is ${this.name}, and I am ${this.age} years old. Woof!`;
  },
};

function dog2() {
  return {
    name: 'Linus',
    age: 13,
    bio: `${this.name} is a dog who is ${this.age} years old.`,
    introduce: () => {
      return `My name is ${this.name}, and I am ${this.age} years old. Woof!`;
    },
  };
}

console.log(dog1.bio); //undefined is a dog who is undefined years old.
console.log(dog1.introduce()); //My name is undefined, and I am undefined years old. Woof!
console.log(dog2().bio); //undefined is a dog who is undefined years old.
console.log(dog2().introduce()); //My name is undefined, and I am undefined years old. Woof!

/*
Both objects will return the same values when their bio properties are accessed,
and both objects will return the same values when their introduce methods are invoked.

Execution context is the environment in which a function executes. In JavaScript, execution context refers to
the value of the this keyword when the code that contains the this keyword executes.
The value of the this keyword is determined by how a function is invoked, not by where or how a function is defined.
Anywhere outside a function, the this keyword is bound to the global object.

For regular function calls, the implicit execution context is the global object.
(In strict mode, the implicit execution context for regular function calls is undefined.)
For method calls, the implicit execution context is the object that contains the method.
For constructor calls, the implicit execution context is the newly created instance.

On line 23, when the bio property is accessed on the dog1 object, the implicit execution context
when the string assigned to the bio property is interpolated is the global object.
No function is invoked, and anywhere outside a function, the this keyword is bound to the global object.
Since the global object does not define name or age properties, this.name and this.age both evaluate to undefined.

On line 24, when the introduce method is invoked on the dog1 object, the implicit execution context is the dog1 object because it is a
method invocation. However, the method is defined using an arrow function, and arrow functions always get their execution context
from the surrounding context. Since the let statement is in the top-level code of the program, the surrounding context is the global object.
Since the global object does not define name or age properties, this.name and this.age both evaluate to undefined.
If the method was instead defined using a function that was not an arrow function, then the
return value would be My name is Charlie, and I am 12 years old. Woof!

On line 25, when the bio property is accessed on the object returned by the dog2 function,
the implicit execution context when the string assigned to the bio property is interpolated
is the global object because the dog2 function is invoked as a regular function.
Since the global object does not define name or age properties, this.name and this.age both evaluate to undefined.

On line 26, when the introduce method is invoked on the object returned by the dog2 function,
the implicit execution context is the returned object because it is a method invocation.
However, the method is defined using an arrow function, and arrow functions always get their execution context from the surrounding context.
Since the surrounding context of the arrow function is the body of the dog2 function, not the object returned by the function,
the implicit execution context is the global object.
Since the global object does not define name or age properties, this.name and this.age both evaluate to undefined.
If the method was instead defined using a function that was not an arrow function, then the
return value would be My name is Linus, and I am 13 years old. Woof!
*/

class Weapon {
  constructor(range, damage, fireRate) {
    this.range = range;
    this.damage = damage;
    this.fireRate = fireRate;
    Weapon.arsenal.push(this);
  }

  static arsenal = [];

  static getDescription() {
    return 'All weapons can shoot and refill ink and have range, fire rate, and damage properties.';
  }

  shoot() {
    return 'shooting ink';
  }

  refill() {
    return 'refilling ink';
  }
}

console.log(Weapon.getDescription());
console.log(Weapon.arsenal);
console.log(Weapon.arsenal.length === 0);

let splattershot = new Weapon(50, 47, 60);
console.log(splattershot.range);
console.log(splattershot.damage);
console.log(splattershot.fireRate);
console.log(splattershot.shoot());
console.log(splattershot.refill());
console.log(Weapon.arsenal);
console.log(Weapon.arsenal.length === 1);

let blaster = new Weapon(27, 70, 20);
console.log(blaster.range);
console.log(blaster.damage);
console.log(blaster.fireRate);
console.log(blaster.shoot());
console.log(blaster.refill());
console.log(Weapon.arsenal);
console.log(Weapon.arsenal.length === 2);

/*
A class Weapon is declared which defines a constructor method that assigns three instance properties range, damage, and fireRate
and mutates the array assigned to the static property arsenal by adding the instance to the array.
The class also defines a static method getDescription and two instance methods shoot and refill.
Even before creating an instance of Weapon, arsenal and getDescription can be accessed directly on the Weapon class
as shown by the first three console.log invocations. Fittingly, arsenal is initially empty.
Instances of Weapon have their own instance properties whose values are determined by the arguments passed in when the instance is created.
Also, instances have access to shoot and refill defined on Weapon.prototype.
The subsequent console.log invocations show the instance properties and methods and how the array assigned to arsenal changes
each time an instance is created. Each time an instance is created, the code in the body of the constructor method of Weapon runs,
and this includes the mutation of the array assigned to arsenal.
*/