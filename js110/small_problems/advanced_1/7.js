let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

/*
Input: array and search item (array element)
Output: index of search item in the array (or -1)
Rules:
array is already sorted
must use a binary search
  search the array for the middle value (round down)
  If that is the search item, return index
  Else, delete one half and repeat.
    The half to be deleted is the upper half if the
    middle value is less than the search item.
    Otherwise, delete lower half.
return -1 if item cannot be found
*/

/* Algorithm:
1. Create a copy of the array.
2. If the search term is the same value as the middle
element of the array, return that index.
Else, delete one half of the array.
3. Return -1
*/

function binarySearch(array, item) {
  let arrayCopy = array.slice();

  while (arrayCopy.length > 0) {
    if (item < arrayCopy[0] || item > arrayCopy[arrayCopy.length - 1]) {
      return -1;
    }

    if (arrayCopy[Math.floor((arrayCopy.length / 2) - 0.5)] === item) {
      return array.indexOf(item);
    } else if (arrayCopy[Math.floor((arrayCopy.length / 2) - 0.5)] < item) {
      arrayCopy.splice(0, Math.floor((arrayCopy.length / 2) + 0.5));
    } else {
      arrayCopy.splice(arrayCopy.length / 2,
        Math.floor((arrayCopy.length / 2) - 0.5));
    }
  }

  return -1;
}