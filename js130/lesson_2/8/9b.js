function later2(callback, argument1) {
  return function(argument2) {
    callback(argument1, argument2);
  }
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!