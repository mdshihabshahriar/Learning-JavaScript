let arr1 = [1,2,3,4,5];

arr1.forEach(function printVal(val){
    console.log(val);
})

// call back function is called higher order function
let arr2 = ["Dhaka","Faridpur","Chittagong"]
arr2.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
})