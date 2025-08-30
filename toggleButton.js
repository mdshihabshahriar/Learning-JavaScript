let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let curMode = "light";

modeBtn.addEventListener("click",()=>{
    if(curMode === "light")
    {
        curMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
        body.remove
    }
    else
    {
        curMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curMode);
})