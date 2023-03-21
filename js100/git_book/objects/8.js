let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj (sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);

console.log(objToCopy);