class Anagram {
  constructor(pattern) {
    this.pattern = pattern;
  }

  match(list) {
    return list.filter(word => this.isAnagram(word));
  }

  isAnagram(word) {
    if (this.pattern.toUpperCase() === word.toUpperCase()) {
      return false;
    }

    if (this.pattern.length !== word.length) {
      return false;
    }

    if (this.pattern.toUpperCase().split('').sort().join()
            === word.toUpperCase().split('').sort().join()) {
      return true;
    }

    return false;
  }
}

module.exports = Anagram;