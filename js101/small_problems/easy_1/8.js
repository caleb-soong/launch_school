function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(1));
console.log(isLeapYear(4));
console.log(isLeapYear(100));
console.log(isLeapYear(400));