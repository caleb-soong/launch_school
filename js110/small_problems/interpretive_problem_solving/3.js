function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split("");

  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[index].toUpperCase()) > -1;
    })[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('floW'));
console.log(isBlockWord('APPLE'));
console.log(isBlockWord('apple'));
console.log(isBlockWord('apPLE'));
console.log(isBlockWord('Box'));