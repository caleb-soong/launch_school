/* eslint-disable max-len */
let ItemCreator = (function() {
  function generateSkuCode(itemName, category) {
    return (itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
            category.replace(/\s/g, '').slice(0, 2).toUpperCase());
  }

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined;
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  getItem: function(skuCode) {
    return this.items.filter(function(item) {
      return item.skuCode === skuCode;
    })[0];
  },

  create: function(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update: function(skuCode, itemInformation) {
    Object.assign(this.getItem(skuCode), itemInformation);
  },

  delete: function(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list: function() {
    return this.items;
  },

  inStock: function() {
    return this.items.filter(function(item) {
      return item.quantity > 0;
    });
  },

  itemsInCategory: function(category) {
    return this.items.filter(function(item) {
      return item.category === category;
    });
  },
};

let ReportManager = {
  init: function(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  },

  reportInStock: function() {
    console.log(this.items.inStock().map(function(item) {
      return item.itemName;
    }).join(','));
  },
};

ItemManager.create('basket ball', 'sports', 0);
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);

console.log(ItemManager.items);
ReportManager.init(ItemManager);
console.log(ReportManager.reportInStock());
ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
console.log(ReportManager.reportInStock());
console.log(ItemManager.itemsInCategory('sports'));
ItemManager.delete('SOCSP');
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();