/*The Math.random method returns a random number between [0, 1). Since the number is always less than one,
  the upper bound after multiplying by 2 is less than 2 which is rounded down to one by the Math.floor method.
  Thus b will be assigned to either 0 or 1, and it has a roughly 50% chance of being assigned to either.
  If Math.random returns [0, 0.5), then b will be assigned to 0. If Math.random returns [0.5, 1), then b
  will be assigned to 1. On line 3, a is reassigned to the product of 2 and the value of b, and that product
  will be 0 or 2. However, the if condition contains a reassignment instead of using the === strict equality operator.
  Thus, even if a was assigned to 0 on line 3, it gets reassigned to 2 on line 5, so the if clause always runs and
  the else clause never runs.*/
