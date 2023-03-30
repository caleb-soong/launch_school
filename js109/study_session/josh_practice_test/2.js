/*On lines 1-3, three global variables are declared with the let keyword and intialized to two strings and an array, respectively.
A function declaration is defined on lines 5-8 with two parameters and calls the array.push method on the first parameter, 'colors',
appending the second parameter, 'color'. It then returns 'colors'.
Line 10 declares a new global variable with the let keyword and initializes it to the return value of the function with the global variables
'colors' and 'color1' as its arguments. When the function is called, a reference to the array assigned to the global variable colors
is passed in to the function as the first argument, and the value of the string 'purple' assigned to the global variable 'color1'
is passed in to the function as the second argument. The parameters are assigned to these values.
The array.push method appends the string 'purple' to the 'colors' array, mutating the array and returning its new length of 4.
The mutated array is returned by the function, and the 'newColors' global variable is assigned a reference to this array.
On line 11, the function is called with 'newColors' and 'color2' as its arguments. A reference to the array assigned to the global variable 'newColors'
is passed in to the function as the first argument, and the value of the string 'pink' assigned to the global variable 'color2' is passed in to the
function as the second argument. The parameters are assigned to these values. The array.push method appends the string 'pink' to the 'newColors' array,
mutating the array and return its new length of 5. The mutated array is returned by the function.  
On line 12, the console.log method is invoked on the global variable 'colors' which is still assigned to a reference to the same mutated array as
'newColors'. Thus, the mutated array with all five colors is printed which is ['red', 'green', 'blue', 'purple', 'pink'].*/