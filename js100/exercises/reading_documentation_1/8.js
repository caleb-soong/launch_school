let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

console.log(typeof tweet);
console.log(typeof words);
console.log(typeof isValid);
console.log(Array.isArray(words));