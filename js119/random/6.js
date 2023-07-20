/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

//select the element out of the array if its index is a Fibonacci number

Input:
array

Output:
array of elements whose indices in the input array are Fiboacci numbers

Rules:


Examples:
*/
console.log(fiboIndices(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']));
/*
Data structure:


Algorithm:

*/
function makeFibonacci(length) {
  let sequence = [1, 1];

  while (sequence[sequence.length - 1] < length) {
    sequence.push(sequence[sequence.length - 2]
      + sequence[sequence.length - 1]);
  }

  return sequence;
}

function fiboIndices(array) {
  return array.filter((_, index) =>
    makeFibonacci(array.length).includes(index));
}