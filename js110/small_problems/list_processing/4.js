function leadingSubstrings(string) {
  let result = [];
  for (let index = 1; index <= string.length; index += 1) {
    let substring = '';
    substring += string.slice(0, index);
    result.push(substring);
  }
  return result;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));