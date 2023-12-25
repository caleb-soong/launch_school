function startCounting() {
  let number = 1;
  let countFunction = setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000);

  return countFunction;
}

function stopCounting(countFunction) {
  clearInterval(countFunction);
}

let countFunction = startCounting();

stopCounting(countFunction);