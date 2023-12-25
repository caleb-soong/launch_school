function delayLog() {
  for (var number = 1; number <= 10; number += 1) {
    setTimeout(() => console.log(number), number * 1000);
  }
}

delayLog();