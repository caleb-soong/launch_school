function formatDate(dateString) {
  if (dateString.match(/\d{4}([/\-])\d{2}\1\d{2}/)) {
    return dateString.split(/[/\-]/).reverse().join('.');
  } else {
    return dateString;
  }
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)