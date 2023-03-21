function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);
console.log(clonedPerson.age);

person.name.isStageName = false;
console.log(person.name.isStageName);
console.log(clonedPerson.name.isStageName);