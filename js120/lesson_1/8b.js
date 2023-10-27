/*
let book1 = {
  title: 'Mythos',
  author: 'Stephen Fry',
  getDescription() {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book2 = {
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris',
  getDescription() {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book3 = {
  title: "Aunts aren't Gentleman",
  author: 'PG Wodehouse',
  getDescription() {
    return `${this.title} was written by ${this.author}.`;
  },
};
*/

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription() {
      return `${this.title} was written by ${this.author}. I have` + `${this.read ? '' : "n't"}` + ' read it.';
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentleman", 'PG Wodehouse', true);

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

console.log(book1.read);
book1.readBook();
console.log(book1.read);
console.log(book2.read);
console.log(book3.read);

