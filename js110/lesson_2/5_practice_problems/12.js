let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArray = arr.map(subArray => subArray.filter(number => number % 3 === 0));

console.log(newArray);
console.log(arr);