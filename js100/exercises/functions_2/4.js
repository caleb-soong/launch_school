function calculateBMI(heightInCentimeters, weightInKilograms) {
  console.log((weightInKilograms / (heightInCentimeters / 100)**2).toPrecision(4));
}

calculateBMI(180, 80);