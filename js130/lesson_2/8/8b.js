function later(callback, argument) {
  return function() {
    callback(argument);
  }
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning();