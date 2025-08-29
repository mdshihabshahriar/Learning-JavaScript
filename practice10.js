let n = prompt("Enter a number : ");

let arr = [];

for(let i = 1;i <= n; i++)
{
    arr[i-1] = i;
}
console.log(arr);

let ans = arr.reduce((prev,res)=>{
    return prev+res;
})
console.log(ans);

let factorial = arr.reduce((prev,res)=>{
    return prev*res;
})
console.log(factorial);