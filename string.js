let str = "JavaScript";

console.log(str);
console.log(str[3]);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(4,10));
console.log(str.replace("J","L"));

let str2 = "     JavaScript Code     ";
console.log(str2.trim());

// template literals

let str3 = `This is a template literal ${1 + 2 + 3}`;
console.log(str3);

let str4 = "Shihab";
let str5 = " Shahriar";

console.log(str4+str5);
console.log(str4.concat(str5));