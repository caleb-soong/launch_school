let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray);
console.log(numbers);

let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray);
console.log(numbers);