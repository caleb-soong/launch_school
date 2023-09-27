const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficieny;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficieny = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficieny = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable);