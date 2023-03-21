function century(year) {
  let centuryNumber;
  if (year % 100 === 0) {
    centuryNumber = year / 100;
  } else {
    centuryNumber = (Math.floor(year / 100) + 1);
  }
  let centuryString = centuryNumber.toString();
  if (centuryString.endsWith('1') && !centuryString.endsWith('11')) {
    return `${centuryString}st`;
  } else if (centuryString.endsWith('2') && !centuryString.endsWith('12')) {
    return `${centuryString}nd`;
  } else if (centuryString.endsWith('3') && !centuryString.endsWith('13')) {
    return `${centuryString}rd`;
  } else {
    return `${centuryString}th`;
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));