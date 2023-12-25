function formatDate(dateString) {
  if (dateString.match(/\d{4}-\d{2}-\d{2}/)) {
    return dateString.split('-').reverse().join('.');
  } else {
    return dateString;
  }
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)