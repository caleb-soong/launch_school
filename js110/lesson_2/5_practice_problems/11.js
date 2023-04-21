let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray = arr.map(object => {
  let incrementedObject = {};

  for (let property in object) {
    incrementedObject[property] = object[property] + 1;
  }

  return incrementedObject;
});

console.log(newArray);
console.log(arr);