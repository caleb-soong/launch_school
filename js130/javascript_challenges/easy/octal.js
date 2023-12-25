class Octal {
  static VALID_OCTAL_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7'];
  
  constructor(octalString) {
    this.octalString = octalString;
  }

  toDecimal() {
    let octalArray = this.octalString.split('');

    if (!(octalArray.every(digit => Octal.VALID_OCTAL_DIGITS.includes(digit)))) {
      return 0;
    }

    let reversedDecimalArray = octalArray.reverse().map((digit, index) => Number(digit) * (8**index));

    return reversedDecimalArray.reduce((a, b) => a + b);
  }
}

module.exports = Octal;