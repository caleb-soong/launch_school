function User(first, last) {
  if (this instanceof User) {
    this.name = first + ' ' + last;
  } else {
    return new User(first, last);
  }
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);
console.log(user1.name);
console.log(user2.name);