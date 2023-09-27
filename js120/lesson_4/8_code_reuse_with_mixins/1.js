const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

let blueTruck = new Truck();
blueTruck.goFast();

let smallCar = new Car();
smallCar.goFast();

console.log('goFast' in smallCar);
console.log('goFast' in blueTruck);