let arr = ['10', '11', '9', '7', '8'];

let numbersArray = arr.map(element => Number(element));

let sortedNumbersArray = numbersArray.sort((a, b) => b - a);

console.log(sortedNumbersArray);