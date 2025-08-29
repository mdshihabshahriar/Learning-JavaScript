let h2 = document.querySelector("h2")

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Shihab."

let div = document.querySelectorAll(".box")
let idx = 1;
for(i of div)
{
    i.innerText = `new unique value ${idx}`;
    idx++;
}

// div[0].innerText = "new unique value 1";
// div[1].innerText = "new unique value 2";
// div[2].innerText = "new unique value 3";