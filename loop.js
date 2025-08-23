for(let i = 1;i <= 5;i++)
{
    console.log("JavaScript");
}

// calculate sum of n numbers

let sum = 0;
for(let i = 1; i <= 10; i++)
{
    sum += i;
}
console.log("Sum:",sum);

// while loop
let i = 1;
while(i <= 5)
{
    console.log(i);
    i++;
}

// do-while loop
let j = 1;
do{
    console.log("Code");
    j++;
}
while(j<=5);

// for-of loop

let str = "JavaScript";
for(let i of str)
{
    console.log(i);
}

// for-in loop

let student = {
    name: "Rakib Hasan",
    age: 25,
    cgpa: 3.81,
    isPass: true
};

for(let key in student)
{
    console.log("key =",key,"value = ",student[key])
}