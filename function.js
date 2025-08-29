function myFunction(){
    console.log("Welcome!");
    console.log("We are learning JS.");
}

myFunction();

function param(msg){
    console.log(msg);
}

param("I love JS.")     // argument

function sum(num1,num2){
    console.log(num1+num2);
}
sum(10,20);

function sum2(a,b){
    ans = a+b;
    return ans;
}
let val = sum2(2,3);
console.log(val);

// arrow function
const arrowSum = (a,b)=>{
    console.log(a+b);
}
arrowSum(5,7);

const printHello = ()=>{
    console.log("Hello!");
}
printHello();