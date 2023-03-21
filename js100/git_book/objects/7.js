let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//for (let key in myObj) {
  //if (myObj.hasOwnProperty(key)) {
    //console.log(key);
  //}
//}