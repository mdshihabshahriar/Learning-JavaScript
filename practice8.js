let num = [1,2,3,4,5];

num.forEach((num)=>{
    console.log(num * num);
})

// another approach
let calcSquare = (num) =>{
    console.log(num * num);
}
num.forEach(calcSquare);