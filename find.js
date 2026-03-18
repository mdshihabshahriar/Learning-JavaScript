const students = [
    {    name : 'Sakib' , age : 30   },
    {    name : 'Rakib' , age : 20   },
    {    name : 'Akib' , age : 25   },
    {    name : 'Jakib' , age : 40   },
    {    name : 'Akib' , age : 35   },
]

// const student = students.find(std => std.name === "Jakib");
const student = students.find(std => std.name[0] === "A");
console.log(student);