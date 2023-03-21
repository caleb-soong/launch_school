let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break; //The break doesn't change the console.log statement, but it stops the program from checking the subsequent array elements.
  }
}

console.log(indexOfFive);