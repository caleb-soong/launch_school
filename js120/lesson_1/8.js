/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description

"Me Talk Pretty One Day was written by David Sedaris."

let book1 = {
  title: 'Mythos',
  author: 'Stephen Fry',
  getDescription: function() {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book2 = {
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris',
  getDescription: function() {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book3 = {
  title: "Aunts aren't Gentlemen",
  author: 'PG Wodehouse',
  getDescription: function() {
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

    getDescription: function() {
      if (this.read === true) {
        return `${this.title} was written by ${this.author}. I have read it.`;
      } else {
        return `${this.title} was written by ${this.author}. I haven't read it.`;
      }
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());