let arr = [1,2,3,4];

const output = arr.reduce((prev,curr)=>{
    return prev + curr;
})
console.log(output);

// find larget number

let num = [5,1,3,2,6];

const result = num.reduce((prev,curr)=>{
    return prev > curr ? prev : curr
});
console.log(result);