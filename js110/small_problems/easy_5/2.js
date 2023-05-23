function union(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index += 1) {
    result.push(array1[index]);
  }
  for (let index = 0; index < array2.length; index += 1) {
    if (!result.includes(array2[index])) {
      result.push(array2[index]);
    }
  }
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));