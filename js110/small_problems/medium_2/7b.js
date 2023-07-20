/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
array

Output:
same array sorted via bubble sort

Rules:
sort in place (mutate)

Examples:
*/
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
/*
Data structure:


Algorithm:

*/

function bubbleSort(array) {
  for (let count = 0; count < array.length - 1; count += 1) {
    for (let index = 0; index < array.length - 1; index += 1) {
      let first = array[index];
      let second = array[index + 1];

      if (first > second) {
        array[index] = second;
        array[index + 1] = first;
      }
    }
  }

  return array;
}