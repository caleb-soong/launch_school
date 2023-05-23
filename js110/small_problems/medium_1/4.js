/* eslint-disable max-lines-per-function */
/*
P: The input is a string of one or more commands separated by single spaces.
The output is a list of numbers corresponding to the number of times the
print command is called.
E: The input string will be valid but may exclude the print command.
D: The stack is represented by an array.
The rightmost value of the array is the top of the stack.
A: The input string will be converted to an array of commands. The function
will iterate through the commands and perform an operation based on the command.
An empty array and register value of zero will be initialized.
*/

function minilang(string) {
  let stack = [];
  let register = 0;
  let inputArray = string.split(' ');
  inputArray.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
    }
  });
}

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');