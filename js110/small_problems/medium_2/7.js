/*
P: Input is an array with two or more elements. Output is the same
array after sorting using bubble sort. One iteration consists of
comparing the first two elements, then the second and third elements,
and so on until the last two elements are compared. During comparisons,
the index positions may be swapped so that the elements will be in
ascending order. Multiple iterations may be required in order to put the
entire array is ascending order. The output is determined when no elements
are swapped during an entire iteration.
E: In the given examples, elements are all numbers or all strings.
D: Input and output is the same array.
A: A helper function could be used to perform a single iteration
and determine whether or not compared elements should be swapped.
The helper function must also tracked number of swaps.
A loop must run so that multiple iterations can occur.
The stopping condition should be that no elements swapped during the most
recent iteration. The mutated input array must be returned.
*/

function bubbleSort(array) {
  let iterations = 0;
  do {
    for (let index = 0; index < array.length - 1; index += 1) {
      let currentElements = [array[index], array[index + 1]];
      if (currentElements[0] > currentElements[1]) {
        array[index] = currentElements[1];
        array[index + 1] = currentElements[0];
      }
    }
    iterations += 1;
  } while (iterations < array.length - 1);
  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);