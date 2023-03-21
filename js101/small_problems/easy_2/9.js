function printAge() {
  let teddyAge;
  while (!(teddyAge >= 20 && teddyAge <= 120)) {
    teddyAge = Math.floor((Math.random() * 120) + 1);
  }
  console.log(`Teddy is ${teddyAge} years old!`);
}

printAge();