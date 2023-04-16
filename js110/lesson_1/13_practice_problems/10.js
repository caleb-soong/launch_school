let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);
let minimumAge = agesArray[0];
for (let index = 0; index < agesArray.length; index++) {
  if (agesArray[index] < minimumAge) {
    minimumAge = agesArray[index];
  }
}

console.log(minimumAge);