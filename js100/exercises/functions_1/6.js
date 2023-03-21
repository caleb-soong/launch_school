function compareByLength(string1, string2) {
  if (string1.length < string2.length) {
    return -1;
  } else if (string1.length === string2.length) {
    return 0;
  } else {
    return 1;
  }
}
console.log(compareByLength('great', 'weekend'));