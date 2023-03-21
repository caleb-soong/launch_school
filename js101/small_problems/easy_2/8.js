function oddities(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index % 2 === 0) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities([1, 2, 3, 4, 5, 6]));
console.log(oddities(["abc", "def"]));
console.log(oddities([123]));
console.log(oddities([]));