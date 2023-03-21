let words = 'The Flintstones Rock!';
let indentation = 0;

while (indentation < 10) {
  console.log(words.padStart(words.length + indentation));
  indentation++;
}