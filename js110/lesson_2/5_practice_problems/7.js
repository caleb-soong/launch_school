let a = 2;
let b = [5, 8];
let arr = [a, b]; //[2, [5, 8]]

arr[0] += 2; //arr now references [4, [5, 8]] and a is still assigned to 2 because it was not reassigned
arr[1][0] -= a; //arr now references [4, [3, 8]] and b now references [3, 8] because one of its elements was reassigned.

console.log(a); //2
console.log(b); //[3, 8]