/* eslint-disable max-lines-per-function */
/*
function makeList() {
  let list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length === 0) {
        console.log("The list is empty.");
      } else {
        list.forEach(item => console.log(item));
      }
    } else if (list.indexOf(item) !== -1) {
      list.splice(list.indexOf(item), 1);
      console.log(`${item} removed!`);
    } else {
      list.push(item);
      console.log(`${item} added!`);
    }
  };
}
*/

function makeList() {
  let items = [];

  return {
    add(item) {
      if (items.indexOf(item) === -1) {
        items.push(item);
        console.log(`${item} added!`);
      }
    },

    remove(item) {
      if (items.indexOf(item) !== -1) {
        items.splice(items.indexOf(item), 1);
        console.log(`${item} removed!`);
      }
    },

    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    },
  };
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();