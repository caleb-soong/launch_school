class Scrabble {
  static SCORES = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  }

  static score(word) {
    return new Scrabble(word).score();
  }
  
  constructor(word) {
    this.word = word;
  }

  score() {
    if (typeof this.word !== "string") {
      return 0;
    }
    
    if (this.word.length < 1) {
      return 0;
    }

    let lettersArray = this.word.toUpperCase().split('');

    let score = 0;

    lettersArray.forEach(letter => {
      if (Scrabble.SCORES[letter]) {
        score += Scrabble.SCORES[letter];
      }
    });

    return score;
  }
}

module.exports = Scrabble;