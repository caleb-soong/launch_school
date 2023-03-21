function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    console.log(`We have a match! ${results}`);
  } else {
    console.log('No match here.');
  }
}

has_a_or_e("basketball");
has_a_or_e("football");
has_a_or_e("hockey");
has_a_or_e("golf");

let regex = /b/g;
let str = "ababa";

console.log(regex.test(str));
console.log(regex.test(str));
console.log(regex.test(str));