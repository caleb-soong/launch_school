function reverse(array) {
  let reversedArray = [];
  while (array.length > 0) {
    reversedArray.push(array.pop());
  }
  while (reversedArray.length > 0) {
    array.push(reversedArray.shift());
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);
console.log(list === result);

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1);
console.log(list1 === result1);

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2);
console.log(list2 === result2);

let list3 = [];
let result3 = reverse(list3);
console.log(result3);
console.log(list3 === result3);