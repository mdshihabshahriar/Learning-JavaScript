let num = [92,96,12,120,23];
console.log(num);
console.log(num[2]);
console.log(num.length);

let heroes = ["ironman","spiderman","thor","hulk"];
console.log(heroes);
console.log(heroes.length);

for(let i = 0;i<heroes.length;i++)
{
    console.log(heroes[i]);
}

let cities = ["dhaka","khulna","rajshahi","chittagong","barisal"];

for(let city of cities)
{
    console.log(city.toUpperCase());
}


let food = ["potato","biriyani","drinks","kabab"];
food.push("drinks","burger")    // add kore last e
console.log(food);
food.pop()      // delete kore last e
console.log(food);
console.log(food.toString());   // convert into string

let _heroes = ["batman","superman"];
let combine = heroes.concat(_heroes);
console.log(combine);

heroes.unshift("antman")    // add kore first e
console.log(heroes);

heroes.shift()      // delete kore first e
console.log(heroes);

console.log(heroes.slice(1,3))      // slice kore kintu orginal array te change hobe na

// splice diye add,delete,replace kora jay
// splice(startInd,delCount,newEle)

let arr1 = [1,2,3,4,5,6,7];

arr1.splice(2,2,101,102);    // delete and add , or replace
console.log(arr1);

let arr2 = [1,2,3,4,5,6,7];
arr2.splice(2,0,101);       // only add
console.log(arr2);

let arr3 = [1,2,3,4,5,6,7];
arr3.splice(3,1);       // only delete
console.log(arr3);