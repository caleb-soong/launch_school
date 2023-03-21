function shortLongShort(string1, string2) {
  let length1 = string1.length;
  let length2 = string2.length;
  if (length1 < length2) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}

console.log(shortLongShort('Hi', 'World'));
console.log(shortLongShort('Greetings', 'World'));