function merge(array1, array2) {
  let mergedArray = array1.concat(array2);

  let sortedArray = [];

  while (mergedArray.length > 0) {
    sortedArray.push(mergedArray.splice(
      mergedArray.indexOf(Math.min(...mergedArray)), 1)[0]);
  }

  return sortedArray;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]