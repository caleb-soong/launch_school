let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(array);
function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}
console.log(integers);