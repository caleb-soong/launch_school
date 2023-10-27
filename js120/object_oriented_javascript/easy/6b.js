class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  getWheels() {
    return 4;
  }
}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
  getWheels() {
    return 6;
  }
}

/*
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  getWheels() {
    return this.wheels;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

let car = new Car('Toyota', 'Corolla');
let motorcycle = new Motorcycle('Brand', '001');
let truck = new Truck('Chevy', 'Silverado', 'big payload');

console.log(car.getWheels());
console.log(car.info());
console.log(motorcycle.getWheels());
console.log(motorcycle.info());
console.log(truck.getWheels());
console.log(truck.info());
*/