let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,

  describe: function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },

  setPrice: function(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      alert('Invalid price!');
    }
  },
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,

  describe: function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  },

  setPrice: function(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      alert('Invalid price!');
    }
  },
};

scissors.describe();
drill.describe();