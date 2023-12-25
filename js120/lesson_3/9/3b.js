function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * (this.radius ** 2);
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2));
console.log(b.area().toFixed(2));
console.log(a.hasOwnProperty('area'));
console.log(b.hasOwnProperty('area'));