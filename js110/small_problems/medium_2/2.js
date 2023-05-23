/*
P: Input is three numbers and output is one of four strings:
'invalid' or the type of triangle by side lengths.
All inputs must be greater than zero. The sum of the two shortest sides
must be greater than the longest side.
E:
D: Number and strings. Addition is needed.
A: An outer if statement will determine whether
the three sides represent a valid triangle.
If it is a valid triangle, then an inner if statement
will determine the type of triangle.
*/

function triangle(firstSide, secondSide, thirdSide) {
  if (firstSide <= 0 || secondSide <= 0 || thirdSide <= 0) {
    return 'invalid';
  }
  let sides = [firstSide, secondSide, thirdSide];
  let ascendingSides = sides.sort((a, b) => a - b);
  if (ascendingSides[0] + ascendingSides[1] <= ascendingSides[2]) {
    return 'invalid';
  }
  if ((ascendingSides[0] === ascendingSides[1])
    && (ascendingSides[0] === ascendingSides[2])) {
    return 'equilateral';
  } else if ((ascendingSides[0] < ascendingSides[1])
          && (ascendingSides[1] < ascendingSides[2])) {
    return 'scalene';
  } else {
    return 'isosceles';
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));