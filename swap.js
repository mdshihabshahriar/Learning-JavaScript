let a = 7;
let b = 5;
console.log(a, b);

const temp = a;
a = b;
b = temp;
console.log(a, b);

let x = 7;
let y = 5;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);