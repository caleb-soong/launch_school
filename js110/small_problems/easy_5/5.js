function interleave(array1, array2) {
  let resultArray = [];
  while (array2.length > 0) {
    if (resultArray.length % 2 === 0) {
      resultArray.push(array1.shift());
    } else {
      resultArray.push(array2.shift());
    }
  }
  return resultArray;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));