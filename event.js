let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) =>{
//     console.log("btn1 was clicked!");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

// addEventListener diye ek jinis multiple bar kora jay

btn1.addEventListener("click", (e) => {
    console.log("Button1 was clicked - handler1");
    console.log(e);
    console.log(e.type);
});

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler2");
});

const handler3 = () => {
    console.log("Button1 was clicked - handler3");
};

btn1.addEventListener("click",handler3);

btn1.addEventListener("click", () => {
    console.log("Button1 was clicked - handler4");
});

btn1.removeEventListener("click",handler3);

let box = document.querySelector("div");

box.onmouseover = (e) =>{
    console.log("you are inside the div")
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}