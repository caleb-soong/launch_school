/*The code prints the following to the console:
'foo is 5, bar is 7'
'foo is 0, bar is 0'
'foo is 4, bar is 42'
'foo is 3, bar is 42'
?? is the nullish coalescing operator which returns the right operand if the left operand is nullish,
and the two nullish values are null and undefined. Otherwise, the left operand is returned.
When the function is called four times, no nullish arguments are passed in. However, on the third invocation,
only one argument is passed in, so the parameter 'bar' will retains its default value of null. On the fourth
invocation, no arguments are passed, so both parameters retain their default nullish values.*/