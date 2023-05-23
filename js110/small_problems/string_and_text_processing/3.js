function letterCaseCount(string) {
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  for (let index = 0; index < string.length; index += 1) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(string[index])) {
      result.lowercase += 1;
    } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(string[index])) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }
  return result;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));