class SumOfMultiples {
  constructor(...list) {
    this.list = (list.length > 0) ? list : [3, 5];
  }

  static to(limiter) {
    return new SumOfMultiples().to(limiter);
  }

  to(limiter) {
    let allMultiples = [];

    this.list.forEach(number => allMultiples.push(this.findMultiples(number, limiter)));
    
    let uniqueMultiples = Array.from(new Set(allMultiples.flat()));
    
    return uniqueMultiples.reduce((a, b) => a + b, 0);
  }

  findMultiples(number, limiter) {
    let multiples = [];

    let currentMultiple = number;

    while (currentMultiple < limiter) {
      multiples.push(currentMultiple);

      currentMultiple += number;
    }

    return multiples;
  }
}

module.exports = SumOfMultiples;