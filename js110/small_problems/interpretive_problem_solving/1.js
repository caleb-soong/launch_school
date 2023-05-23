/* eslint-disable max-lines-per-function */
function lightsOn(switches) {
  let lights = [];
  for (let index = 0; index < switches; index += 1) {
    lights.push(false);
  }
  for (let multipleOf = 1; multipleOf <= lights.length; multipleOf += 1) {
    for (let index = 0; index < lights.length; index += 1) {
      if ((index + 1) % multipleOf === 0) {
        if (lights[index] === true) {
          lights[index] = false;
        } else {
          lights[index] = true;
        }
      }
    }
  }
  return lights.map((element, index) => {
    if (element === true) {
      return index + 1;
    } else {
      return element;
    }
  }).filter((element) => element > 0);
}

console.log(lightsOn(5));
console.log(lightsOn(100));