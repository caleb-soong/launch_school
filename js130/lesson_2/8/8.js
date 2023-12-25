function later(func, argument) {
  return () => func(argument);
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning();