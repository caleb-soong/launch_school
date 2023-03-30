/*This program uses 'readline-sync' to retrieve user input. On line 1, a variable is declared and intialized to
require('readline-sync') which allows for the question method to be called on the variable on lines 3 and 5.
The program wants to ask the user to input two numbers, but since the question method always returns a string value,
the values must be coerced to numbers using the Number function. The question method prints the questions (strings)
the console and also waits to receive user input.
On line 7, the numbers are added together, and on line 9, a statement using a template literal with
the numbers and their sum is printed to the console.
The main concepts illustrated are 'readline-sync', the question method, explicit type coercion, and template literals.*/