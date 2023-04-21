let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArray = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort(Number);
  } else {
    return subArray.slice().sort();
  }
});

console.log(newArray);
console.log(arr);