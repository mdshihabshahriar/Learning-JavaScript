const king = {name : "Sakib" , age : 20, kingdom : "Dhaka"};
// Object.freeze(king);
Object.seal(king);
delete king.age;
delete king.kingdom;
king.movie = "Toofan";
king.name = "No.1"
console.log(king);