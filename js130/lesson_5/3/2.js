function startCounting() {
  let counter = 1;
  let counterId = setInterval(function () {
    console.log(counter);
    counter += 1;
  }, 1000);

  return counterId;
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();

stopCounting(counterId);