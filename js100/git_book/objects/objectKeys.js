let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person);
console.log(personKeys);
personKeys.forEach(key => {
  console.log(person[key])
});