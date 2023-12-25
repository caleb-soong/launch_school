function later2(func, argument) {
  return secondArgument => func(argument, secondArgument);
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30);