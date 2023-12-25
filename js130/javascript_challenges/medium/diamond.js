class Diamond {
  static ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  static makeDiamond(letter) {
    let letterNumber = this.ALPHABET.indexOf(letter);
    let outsideWhiteSpace = letterNumber - 1;
    let insideWhiteSpace = 1;
    let firstAndLastRow = ' '.repeat(outsideWhiteSpace + 1) + 'A' + ' '.repeat(outsideWhiteSpace + 1);
    let rows = [];

    rows.push(firstAndLastRow);

    for (let index = 1; index < letterNumber; index += 1) {
      rows.push(' '.repeat(outsideWhiteSpace) + this.ALPHABET[index] +
                ' '.repeat(insideWhiteSpace) + this.ALPHABET[index] + ' '.repeat(outsideWhiteSpace));

      outsideWhiteSpace -= 1;
      insideWhiteSpace += 2;
    }

    if (letter !== 'A') {
      rows.push(letter + ' '.repeat(insideWhiteSpace) + letter);
    }

    for (let index = letterNumber - 1; index > 0; index -= 1) {
      outsideWhiteSpace += 1;
      insideWhiteSpace -= 2;
      
      rows.push(' '.repeat(outsideWhiteSpace) + this.ALPHABET[index] +
                ' '.repeat(insideWhiteSpace) + this.ALPHABET[index] + ' '.repeat(outsideWhiteSpace));
    }

    if (letter !== 'A') {
      rows.push(firstAndLastRow + '\n');
    } else {
      rows.push('');
    }

    return rows.join('\n');
  }
}

module.exports = Diamond;