function isLeapYear(year) {
  if (year > 1752) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(1));
console.log(isLeapYear(4));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
console.log(isLeapYear(2000));
console.log(isLeapYear(2100));