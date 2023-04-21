let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let resultObject = {};

arr.forEach(subArray => {
  resultObject[subArray[0]] = subArray[1];
});

console.log(resultObject);