function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Error: Parity is only defined for integers.');
    return;
  }
  
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(-2);
evenOrOdd(-1);
evenOrOdd(0);
evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(6.789);