function delayLog() {
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(number => {
    setTimeout(function() {
      console.log(number);
    }, number * 1000);
  });
}

delayLog();