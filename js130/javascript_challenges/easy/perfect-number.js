class PerfectNumber {
  static classify(number) {
    if (number < 1) {
      throw new Error("Only positive integers are valid.");
    }

    let validDivisors = [1];
    let divisor = 2;

    while (divisor <= (number / 2)) {
      if (number % divisor === 0) {
        validDivisors.push(divisor);
      }

      divisor += 1;
    }

    let sum = validDivisors.reduce((a, b) => a + b);

    if (sum < number) {
      return 'deficient';
    } else if (sum > number) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;