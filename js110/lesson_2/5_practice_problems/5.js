let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sumOfMaleAges = 0;

for (let familyMember in munsters) {
  if (munsters[familyMember]['gender'] === 'male') {
    sumOfMaleAges += Number(munsters[familyMember]['age']);
  }
}

console.log(sumOfMaleAges);