class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);
    
    let [ shortSide, middleSide, longSide ] = this.sides;

    if (shortSide < 0 || middleSide < 0 || longSide < 0) {
      throw new Error("All side lengths must be greater than zero.");
    }

    if (shortSide + middleSide <= longSide) {
      throw new Error("No triangle can be formed with sides of these lengths.");
    }
  }

  kind() {
    let [ shortSide, middleSide, longSide ] = this.sides;
    
    if (shortSide === middleSide && middleSide === longSide) {
      return 'equilateral';
    } else if (shortSide === middleSide && middleSide !== longSide) {
      return 'isosceles';
    } else if (shortSide !== middleSide && middleSide === longSide) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;