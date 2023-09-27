/* eslint-disable max-lines-per-function */
function createProduct(id, name, stock, price) {
  let newProduct = {};
  newProduct.id = id;
  newProduct.name = name;
  newProduct.stock = stock;
  newProduct.price = price;

  newProduct.describe = function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  };

  newProduct.setPrice = function(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      alert('Invalid price!');
    }
  };

  return newProduct;
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);

console.log(scissors);
console.log(drill);