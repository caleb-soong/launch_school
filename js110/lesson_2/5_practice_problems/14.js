let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let resultArray = [];

Object.values(obj).forEach(innerObject => {
  for (let key in innerObject) {
    if (innerObject[key] === 'fruit') {
      resultArray.push(innerObject['colors'].map(color => color[0].toUpperCase() + color.slice(1)));
    } else if (innerObject[key] === 'vegetable') {
      resultArray.push(innerObject['size'].split('').map(character => character.toUpperCase()).join(''));
    }
  }
});

console.log(resultArray);