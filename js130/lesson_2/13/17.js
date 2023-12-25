function qux() {
  let animalType = "cat";
  let age = 9;
  let colors = ["black", "white"];
  return {
    type: animalType,
    age,
    colors,
  };
}

let { type, age, colors } = qux();
console.log(type);
console.log(age);
console.log(colors);