function modifyString(string) {
  let newString = string.toLowerCase().trim().split('').filter(character => 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(character));
  return newString;
}

function isRealPalindrome(string) {
  return modifyString(string).join('') === modifyString(string).reverse().join('');
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));