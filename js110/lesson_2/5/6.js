let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let familyMember in munsters) {
  console.log(`${familyMember} is a ${munsters[familyMember][`age`]}-year-old ${munsters[familyMember]['gender']}.`);
}