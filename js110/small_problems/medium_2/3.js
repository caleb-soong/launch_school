/*
P: Input is three numbers and output is one of four strings:
'invalid' or the type of triangle by angle measures.
E:
D: Numbers and strings. Addition is needed.
A: I will check the two conditions for a valid triangle,
first positive values and then the correct sum. I will then
classify the triangle if valid.
*/

function triangle(firstAngle, secondAngle, thirdAngle) {
  if (firstAngle <= 0 || secondAngle <= 0 || thirdAngle <= 0) {
    return 'invalid';
  }
  if (firstAngle + secondAngle + thirdAngle !== 180) {
    return 'invalid';
  }
  if (firstAngle === 90 || secondAngle === 90 || thirdAngle === 90) {
    return 'right';
  } else if (firstAngle > 90 || secondAngle > 90 || thirdAngle > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));