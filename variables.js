const myName = "Shihab";        // const can't be re-declared or updated
let age = 23;                   // let can't be re-declared but can be updated
let price = 99.99;
price = 120.25;
const isAvailable = true;
let x;
let a = BigInt("123");
let b = Symbol("Hello!");

const student = {                   // object jodi const hoy tahole object er key value update kora jabe
    fullName: "Sakib Islam",
    age: 23,
    cgpa: 3.77,
    isPass: true,
};

console.log(myName);
console.log(typeof(myName));
console.log(age);
console.log(typeof(age));
console.log(price);
console.log(typeof(price));
console.log(isAvailable);
console.log(typeof(isAvailable));
console.log(x);
console.log(typeof(x));
console.log(a);
console.log(typeof(a));
console.log(b);
console.log(typeof(b));
console.log(student);
console.log(typeof(student));
console.log(student["fullName"]);
console.log(student.cgpa);

student["age"] = student["age"]+1;
console.log(student.age);

// data types: primitive,Non-primitive
// primitive - 7:
// Number,String,Boolean,Undefined,Null,BigInt,Symbol

// Non-primitive - 1: objects