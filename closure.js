function outerFunction(){
    function innerFunction(){
        console.log("This is inner function");
    }
    return innerFunction;
}

const result = outerFunction();
result();
console.log(result);

function counter(owner){
    let count = 0;
    function increament(){
        count++;
        console.log("value of counter ",owner,count);
    }
    return increament;
}
const count1 = counter();
count1();
count1();
console.log(count1);

const rahimCounter = counter("Rahim");
rahimCounter();
rahimCounter();
rahimCounter();

const karimCounter = counter("Karim");
karimCounter();
karimCounter();

rahimCounter();
rahimCounter();