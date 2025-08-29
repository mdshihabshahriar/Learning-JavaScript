let button = document.getElementById("myId");
console.dir(button);
console.log(button);

let headers = document.getElementsByClassName("myClass")
console.dir(headers);
console.log(headers);

let para = document.getElementsByTagName("p")
console.dir(para);

let firstElements = document.querySelector("p")     // 1st elements
console.dir(firstElements);

let allElements = document.querySelectorAll("p")    // all elements
console.dir(allElements);

let firstClass = document.querySelector(".myClass")
console.dir(firstClass);

let allClass = document.querySelectorAll(".myClass")
console.dir(allClass);

let myId = document.querySelector("#myId")
console.dir(myId);

let div = document.querySelector("div")
console.log(div);
// div.style.backgroundColor = "skyblue";
// div.style.fontSize = "26px";

let id = div.getAttribute("id")
console.log(id);

let name = div.getAttribute("name")
console.log(name)

let pg = document.querySelector("p");
console.log(pg.getAttribute("class"));
console.log(pg.setAttribute("class","newClass"));

// add new button

let newBtn = document.createElement("button");
newBtn.innerText = "Button";
console.log(newBtn);

div.append(newBtn);  // last e add korbe
// div.prepend(newBtn); // first e add korbe
// div.before(newBtn);   // div start howar age add hobe
// div.after(newBtn);      // div end howar por add hobe

// add new heading

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> I am new! </i>";
document.querySelector("body").prepend(newHeading);

newHeading.remove();    // remove heading