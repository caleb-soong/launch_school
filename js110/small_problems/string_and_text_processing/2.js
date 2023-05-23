function removeVowels(array) {
  return array.map(string => removeVowelsString(string));
}

function removeVowelsString(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if (!'aeiouAEIOU'.includes(string[index])) {
      result += string[index];
    }
  }
  return result;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));