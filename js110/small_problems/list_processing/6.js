function palindromes(string) {
  return substrings(string).filter(substring => substring === substring.split('').reverse().join('') && substring.length > 1);
}

function substrings(string) {
  let result = [];
  for (let index1 = 0; index1 < string.length; index1 += 1) {
    for (let index2 = 1; index2 <= string.length; index2 += 1) {
      if (index1 < index2) {
        result.push(string.slice(index1, index2));
      }
    }
  }
  return result;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));