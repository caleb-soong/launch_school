class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {

}

class Car extends Vehicle {

}

let truck = new Truck(2003);
console.log(truck.year);

let car = new Car(2015);
console.log(car.year);