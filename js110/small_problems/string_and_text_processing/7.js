function staggeredCase(string) {
  let result = '';
  let counter = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (counter === 0 && 'abcdefghijklmnopqrstuvwxyz'.includes(string[index].toLowerCase())) {
      result += string[index].toUpperCase();
      counter += 1;
    } else if (counter === 1 && 'abcdefghijklmnopqrstuvwxyz'.includes(string[index].toLowerCase())) {
      result += string[index].toLowerCase();
      counter -= 1;
    } else {
      result += string[index];
    }
  }
  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");