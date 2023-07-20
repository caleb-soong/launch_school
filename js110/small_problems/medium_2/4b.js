/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:


Output:


Rules:


Examples:
*/
console.log(fridayThe13ths(2023));
/*
Data structure:


Algorithm:

*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}