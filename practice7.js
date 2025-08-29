function countVowels(str){
    let count = 0;
    for(let i of str)
    {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
        {
            count++;
        }
    }
    console.log(count);
}
countVowels("hello");

// using arrow function

const arrowCount = (str)=>{
    let count = 0;
    for(let i of str)
    {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
        {
            count++;
        }
    }
    console.log(count)
}
arrowCount("abc");