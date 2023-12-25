class CustomSet {
  constructor(array) {
    this.array = Array.from(new Set(array));
  }

  isEmpty() {
    return this.array.length === 0;
  }

  intersection(otherSet) {
    let newArray = [];

    this.array.forEach(element => {
      if (otherSet.array.indexOf(element) !== -1) {
        newArray.push(element);
      }
    });

    return new CustomSet(newArray);
  }

  union(otherSet) {
    let newArray = [];

    this.array.forEach(element => newArray.push(element));
    otherSet.array.forEach(element => newArray.push(element));

    return new CustomSet(newArray);
  }

  difference(otherSet) {
    let newArray = [];

    this.array.forEach(element => {
      if (otherSet.array.indexOf(element) === -1) {
        newArray.push(element);
      }
    });

    return new CustomSet(newArray);
  }

  isDisjoint(otherSet) {
    let newArray = [];

    this.array.forEach(element => newArray.push(element));
    otherSet.array.forEach(element => newArray.push(element));

    let newSet = new CustomSet(newArray);

    return (this.array.length + otherSet.array.length) === newSet.array.length;
  }

  isSame(otherSet) {
    return this.array.sort().toString() === otherSet.array.sort().toString();
  }

  isSubset(otherSet) {
    let arrayCopy = otherSet.array.slice();
    
    this.array.forEach(element => arrayCopy.push(element));

    let newSet = new CustomSet(arrayCopy);

    return otherSet.array.length === newSet.array.length;
  }

  add(element) {
    if (this.array.indexOf(element) === -1) {
      this.array.push(element);
    }

    return this;
  }

  contains(element) {
    return this.array.indexOf(element) !== -1;
  }
}

module.exports = CustomSet;