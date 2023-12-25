let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArray = arr.map(subArray => {
  if (typeof subArray[0] === 'number') {
    return subArray.slice().sort((a, b) => b - a);
  } else {
    return subArray.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  }
});

console.log(newArray);
console.log(arr);