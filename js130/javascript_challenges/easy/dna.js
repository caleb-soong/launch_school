class DNA {
  constructor(strand1) {
    this.strand1 = strand1;
  }

  hammingDistance(strand2) {
    let shortStrand;
    let longStrand;
    let counter = 0;

    if (this.strand1.length <= strand2.length) {
      shortStrand = this.strand1;
      longStrand = strand2;
    } else {
      shortStrand = strand2;
      longStrand = this.strand1;
    }

    for (let index = 0; index < shortStrand.length; index += 1) {
      if (shortStrand[index] !== longStrand[index]) {
        counter += 1;
      }
    }
    
    return counter;
  }
}

module.exports = DNA;