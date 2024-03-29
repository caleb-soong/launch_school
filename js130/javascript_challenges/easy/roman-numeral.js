class RomanNumeral {
  constructor(integer) {
    this.integer = integer;
  }

  static VALUES = [['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                   ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                   ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                   ['', 'M', 'MM', 'MMM']];

  toRoman() {
    let digitsArray = String(this.integer).split('');
    
    let romanNumeralsArray = this.convertDigits(digitsArray);

    return romanNumeralsArray.join('');
  }

  convertDigits(digitsArray) {
    let reversedDigitsArray = digitsArray.reverse();
    
    let reversedRomanNumeralsArray = reversedDigitsArray.map((digit, index) => {
      return RomanNumeral.VALUES[index][digit];
    });

    return reversedRomanNumeralsArray.reverse();
  }
}

module.exports = RomanNumeral;