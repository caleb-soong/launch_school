function catAge(humanAge) {
  if (humanAge === 0) {
    console.log(0);
  } else if (humanAge === 1) {
    console.log(15);
  } else if (humanAge === 2) {
    console.log(24);
  } else {
    console.log(humanAge * 4 + 16);
  }
}

catAge(0);
catAge(1);
catAge(2);
catAge(3);
catAge(4);