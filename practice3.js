let fullName = prompt("Enter your full name without spaces: ");
let username = `@${fullName.toLowerCase()+fullName.length}`;

console.log("Your username :",username);