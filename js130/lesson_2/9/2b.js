/*
function makeList() {
  let list = [];
  return function(todo) {
    if (todo === undefined) {
      if (list.length > 0) {
        list.forEach(todo => console.log(todo));
      } else {
        console.log("The list is empty.");
      }
    } else if (list.indexOf(todo) !== -1) {
      list.splice(list.indexOf(todo), 1);
      console.log(`${todo} removed!`);
    } else {
      list.push(todo);
      console.log(`${todo} added!`);
    }
  }
}
*/

function makeList() {
  let items = [];
  
  return {
    list() {
      if (items.length > 0) {
        items.forEach(todo => console.log(todo));
      } else {
        console.log("The list is empty.");
      }
    },

    add(todo) {
      if (items.indexOf(todo) === -1) {
        items.push(todo);
        console.log(`${todo} added!`);
      }
    },

    remove(todo) {
      if (items.indexOf(todo) !== -1) {
        items.splice(items.indexOf(todo), 1);
        console.log(`${todo} removed!`);
      }
    },
  }
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();